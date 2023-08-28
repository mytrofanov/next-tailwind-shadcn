'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { i18n } from '@/i18n-config';
import { redirectedPathName } from '@/utils';

interface LangSelectProps {
    placeholder: string;
    onSelect: (selected: string) => void;
}

export function LangSelect(props: LangSelectProps) {
    const { placeholder, onSelect } = props;
    const pathName = usePathname();

    return (
        <Select onValueChange={onSelect}>
            <SelectTrigger className="w-[180px] text-sm ">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Languages:</SelectLabel>
                    <ul>
                        {i18n.locales.map(locale => {
                            return (
                                <li key={locale}>
                                    <Link href={redirectedPathName(pathName, locale)}>{locale}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
