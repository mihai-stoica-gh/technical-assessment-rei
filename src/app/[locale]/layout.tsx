import type { Metadata } from "next";
import "./globals.css";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import Header from "./_components/Header";
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: "MoviesApp",
  description: "Find out information about the latest movies",
};

export default async function RootLayout({
    children,
    params: {locale}
}: Readonly<{
    children: React.ReactNode;
    params: {locale: string};
}>) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <html lang={locale}>
                <body>
                    <Header></Header>
                    {children}
                </body>
            </html>
        </NextIntlClientProvider>
    );
}
