import { Link } from '@inertiajs/react';
import { LayoutGrid, Package, PackageOpen, Settings, Tag } from 'lucide-react';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import families from '@/routes/families/index';
import options from '@/routes/options/index';
import products from '@/routes/products/index';

import type { NavItem } from '@/types';
import AppLogo from './app-logo';
import categories from '@/routes/categories';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Products',
        href: products.index.url(),
        icon: Package,
    },
    {
        title: 'Families',
        href: families.index.url(),
        icon: PackageOpen,
    },
    {
        title: 'Options',
        href: options.index.url(),
        icon: Settings,
    },
    {
        title: 'Categories',
        href: categories.index.url(),
        icon: Tag,
    },


];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
