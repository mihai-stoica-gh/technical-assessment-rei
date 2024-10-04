import {unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {getTranslations} from 'next-intl/server';
import Image from "next/image";
 
export async function generateMetadata({
        params: {locale}
    }: Readonly<{
        params: {locale: string};
    }>) {
    const t = await getTranslations({locale, namespace: 'HomePage'});
    
    return {
        title: t('title')
    };
}

export default function Page({params: {locale}}: {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('HomePage');

    return (
        <div>
            <h1>{t('title')}</h1>
            <p>{t('content')}</p>
        </div>
    );
}
