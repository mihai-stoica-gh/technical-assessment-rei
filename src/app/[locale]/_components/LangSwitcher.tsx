'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import styles from './LangSwitcher.module.scss';
import {useTransition} from 'react';
import { GlobeIcon } from 'lucide-react';

export default function LangSwitcher() {
    const t = useTranslations('LangSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function setLang(locale: "en" | "ro" | undefined) {
        startTransition(() => {
            router.replace(
                pathname,
                { locale: locale}
            )
        })
    }

    return (
        <>
            {locale === 'ro' && (
                <button onClick={() => {setLang('en');}} className={styles.button}>
                    <GlobeIcon size={20} />
                    {t('locale', { locale: 'en'})}
                </button>
            )}
            {locale === 'en' && (
                <button onClick={() => {setLang('ro');}} className={styles.button}>
                    <GlobeIcon size={20} />
                    {t('locale', { locale: 'ro'})}
                </button>
            )}
        </>
    )
}