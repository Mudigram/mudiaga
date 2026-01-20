import Link from 'next/link';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <div className="w-full flex-1">
                <nav className="flex items-center gap-4 text-sm font-medium">
                    <Link href="/" className="hidden font-bold sm:inline-block">
                        My Portfolio OS
                    </Link>
                </nav>
            </div>
            <div className="flex items-center gap-4 text-sm">
                <ThemeToggle />
                <Link href="/#contact" className="hover:underline">Contact</Link>
                <a
                    href="https://github.com/Mudigram"
                    target="_blank"
                    className="hidden sm:inline-flex items-center gap-1.5 border rounded-md px-2 py-1 hover:bg-muted"
                >
                    <span className="text-xs">v0.1.0</span>
                </a>
            </div>
        </header>
    );
}