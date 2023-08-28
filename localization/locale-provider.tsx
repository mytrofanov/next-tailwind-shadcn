import React from 'react';
import { LocaleType } from '@/localization/locale-types';
import { i18n } from '@/i18n-config';

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ lang: locale }));
}

interface LocaleLayoutProps {
    children: React.ReactNode;
    lang: LocaleType;
}

export const LocaleLayout = async ({ children, params }: { children: React.ReactNode; params: { lang: string } }) => {
    // const { children, lang } = props;
    // console.log('lang: ', lang);

    return (
        <html lang={params.lang}>
            <body>{children}</body>
        </html>
    );
};

export default LocaleLayout;
