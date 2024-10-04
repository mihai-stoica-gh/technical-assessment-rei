'use client';

import {ChangeEvent, ReactNode, useTransition} from 'react';
import Image from "next/image";
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';

type Props = {
    children: ReactNode;
    defaultValue: string;
}

export default function LangSwitcherSelect({
    children,
    defaultValue
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value as "en" | "ro" | undefined;
        startTransition(() => {
            router.replace(
                pathname,
                { locale: nextLocale}
            )
        })
    }

    return (
        <select defaultValue={defaultValue} disabled={isPending} onChange={onSelectChange}>
            {children}
        </select>
    );
}