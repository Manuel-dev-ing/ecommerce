import { Link } from '@inertiajs/react';
import { Layers, LayoutGrid, Package, PackageOpen, Settings, Tag, Tags } from 'lucide-react';
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
import categories from '@/routes/categories';
import families from '@/routes/families/index';
import options from '@/routes/options/index';
import products from '@/routes/products/index';
import subcategories from '@/routes/subcategories/index';

import type { NavItem } from '@/types';
import AppLogo from './app-logo';
import variants from '@/routes/variants';

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
        icon: Tags,
    },
    {
        title: 'Subcategories',
        href: subcategories.index.url(),
        icon: Tag,
    },
    {
        title: 'Variants',
        href: variants.index.url(),
        icon: Layers
    }


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
