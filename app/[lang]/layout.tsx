import React from 'react';
import '../../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/styles/theme-provider';
import { Header } from '@/components/header';
import { GlobalStoreProvider } from '@/store/global.store';
import { LocaleType } from '@/localization/locale-types';
import { i18n } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next App with Tailwind and shadcn/ui',
    description: 'Generated by create next app',
};

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ lang: locale }));
}

interface RootLayoutProps {
    children: React.ReactNode;
    params: { lang: LocaleType };
}

const RootLayout = async (props: RootLayoutProps) => {
    const { children, params } = props;
    const dictionary: Dictionary = await getDictionary(params.lang);
    return (
        <html lang={params.lang}>
            <body>
                <GlobalStoreProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <Header
                            headerDictionary={dictionary['header']}
                            modeToggleDictionary={dictionary['modeToggle']}
                            lang={params.lang}
                        />
                        {children}
                    </ThemeProvider>
                </GlobalStoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
