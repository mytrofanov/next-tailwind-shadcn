import React from 'react';
import Link from 'next/link';
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { usePathname } from 'next/navigation';

interface NavigationMenuItemProps {
    link: string;
    title: string;
}

const MenuItem = (props: NavigationMenuItemProps) => {
    const { link, title } = props;
    const pathName = usePathname();
    const isActive = pathName === link;

    return (
        <NavigationMenuItem>
            <Link href={link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} active={isActive}>
                    <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">{title}</h4>
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
};

export default MenuItem;
