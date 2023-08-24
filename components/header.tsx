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

const Header = () => {
    return (
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Home</h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/register" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Register</h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">About</h4>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="mx-8 flex items-center justify-between">
                <div className="mr-2">
                    <ModeToggle />
                </div>
                <CustomSelect label="Language" options={languages} placeholder="select language" />
            </div>
        </div>
    );
};

export default Header;
