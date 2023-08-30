'use client';
import React from 'react';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import LangSelect from '@/components/lang-select';
import ModeToggle from '@/components/theme-mode-toggle';
import { Locale } from '@/i18n-config';
import { pathNameWithLang } from '@/lib/utils';
import { HeaderDictionary, ModeToggleDictionary } from '@/localization';
import MenuItem from '@/components/navigation-menu-item';

interface HeaderProps {
    lang: Locale;
    headerDictionary: HeaderDictionary;
    modeToggleDictionary: ModeToggleDictionary;
}

export const Header = (props: HeaderProps) => {
    const { lang, headerDictionary, modeToggleDictionary } = props;

    return (
        <div className="mx-auto flex max-w-xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <NavigationMenu>
                <NavigationMenuList>
                    <MenuItem link={pathNameWithLang('/', lang)} title={headerDictionary.home} />
                    <MenuItem link={pathNameWithLang('/register', lang)} title={headerDictionary.register} />
                    <MenuItem link={pathNameWithLang('/about', lang)} title={headerDictionary.about} />
                    <MenuItem link={pathNameWithLang('/account', lang)} title={headerDictionary.account} />
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center justify-between">
                <div className="mr-2">
                    <ModeToggle dictionary={modeToggleDictionary} />
                </div>
                <LangSelect currentLocale={lang} />
            </div>
        </div>
    );
};

export default Header;
