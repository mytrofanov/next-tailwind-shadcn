'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { redirectedPathName } from '@/utils';
import { LocaleType } from '@/localization/locale-types';
import { currentLanguageName } from '@/utils/current-language-name';

interface LangSelectProps {
    currentLocale: LocaleType;
}

export function LangSelect(props: LangSelectProps) {
    const { currentLocale } = props;
    const pathName = usePathname();

    return (
        <Link href={redirectedPathName(pathName, currentLocale === 'ua' ? 'en' : 'ua')}>
            {currentLanguageName(currentLocale)}
        </Link>
    );
}