import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import Home from './_components/Home';
 
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
    
    return (
        <Home></Home>
    );
}
