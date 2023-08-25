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
import { ModeToggle } from '@/components/ui/theme-mode-toggle';
import { CustomSelect } from '@/components/custom-select';
import { languages } from '@/localization/languages';
import { useGlobalStore } from '@/store/global.store';
import { LocaleType } from '@/localization/locale-types';
import { useIntl } from '@/shared/hooks';

const Header = () => {
    const [state, dispatch] = useGlobalStore();
    const { fm } = useIntl();

    const handleChangeLanguage = (newLocale: string) => {
        dispatch({
            type: 'locale-set',
            payload: newLocale as LocaleType,
        });
    };

    return (
        <div className="mx-auto flex max-w-4xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                                    {fm('header.home')}
                                </h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/register" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                                    {fm('header.register')}
                                </h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                                    {fm('header.about')}
                                </h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/account" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                                    {fm('header.account')}
                                </h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center justify-between">
                <div className="mr-2">
                    <ModeToggle />
                </div>
                <CustomSelect options={languages} placeholder="select language" onSelect={handleChangeLanguage} />
            </div>
        </div>
    );
};

export default Header;
