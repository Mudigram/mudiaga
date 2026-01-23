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
                <div className="flex flex-col gap-4">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 justify-center bg-sidebar-accent text-sidebar-accent-foreground px-3 py-2 rounded-md text-sm font-medium hover:bg-sidebar-accent/90 transition group-data-[collapsible=icon]:hidden"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4h4" /></svg>
                        Download Resume
                    </a>
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
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}