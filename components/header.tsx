'use client';
import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { useGlobalStore } from '@/store/global.store';
import LangSelect from '@/components/lang-select';
import ModeToggle from '@/components/theme-mode-toggle';
import { Locale } from '@/i18n-config';
import { LocaleType } from '@/localization/locale-types';
import { langPathName } from '@/utils';

interface HeaderProps {
    lang: Locale;
    headerDictionary: HeaderDictionary;
    modeToggleDictionary: ModeToggleDictionary;
}

export const Header = (props: HeaderProps) => {
    const { lang, headerDictionary, modeToggleDictionary } = props;
    const [state, dispatch] = useGlobalStore();

    React.useEffect(() => {
        if (lang) {
            dispatch({
                type: 'locale-set',
                payload: lang as LocaleType,
            });
        }
    }, [dispatch, lang]);

    return (
        <div className="mx-auto flex max-w-4xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href={langPathName('/', lang)} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                                    {headerDictionary.home}
                                </h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={langPathName('/register', lang)} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                                    {headerDictionary.register}
                                </h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={langPathName('/about', lang)} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                                    {headerDictionary.about}
                                </h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={langPathName('/account', lang)} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                                    {headerDictionary.account}
                                </h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
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
