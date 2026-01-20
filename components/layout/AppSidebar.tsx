'use client';

import * as React from 'react';
import {
    LayoutDashboard,
    Briefcase,
    Terminal,
    BookOpen,
    Github,
    Linkedin,
    Twitter,
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
    {
        title: 'Overview',
        url: '/',
        icon: LayoutDashboard,
    },
    {
        title: 'Projects',
        url: '/projects',
        icon: Briefcase,
    },
    {
        title: 'API Playground',
        url: '/api-playground',
        icon: Terminal,
    },
    {
        title: 'Case Studies',
        url: '/case-studies',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar collapsible="icon" >
            <SidebarHeader className="h-14 border-b flex items-center">
                <Link href="/" className="flex items-center font-semibold pt-2">
                    <span className="group-data-[collapsible=icon]:hidden">Mudiaga Omene</span>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="px-4 py-8">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                tooltip={item.title}
                                isActive={pathname === item.url}
                            >
                                <Link href={item.url}>
                                    <item.icon className="size-4" />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
                <div className="flex items-center justify-around group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-4">
                    <a href="https://github.com/Mudigram" target="_blank" className="text-muted-foreground hover:text-foreground">
                        <Github className="size-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/mudiaga-omene-7727271b2/" target="_blank" className="text-muted-foreground hover:text-foreground">
                        <Linkedin className="size-4" />
                    </a>
                    <a href="https://www.x.com/TheMudiaga" target="_blank" className="text-muted-foreground hover:text-foreground">
                        <Twitter className="size-4" />
                    </a>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}