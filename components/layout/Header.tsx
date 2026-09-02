'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

const navItems = [
    { label: 'Work', href: '/projects' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    // Close mobile menu whenever pathname changes
    React.useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scrolling when mobile menu is open
    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/85 backdrop-blur-md">
            <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
                {/* Logo / Name */}
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Mudiaga Omene
                </Link>

                {/* Desktop Nav Links */}
                <nav className="hidden sm:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm transition-colors hover:text-foreground ${
                                pathname === item.href
                                    ? 'text-foreground font-medium'
                                    : 'text-muted-foreground'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden sm:flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href="https://github.com/Mudigram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        title="GitHub"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-4"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-foreground text-background px-3.5 py-1.5 rounded-md text-xs font-medium hover:bg-foreground/90 transition-colors"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Hamburger & Theme Toggle */}
                <div className="flex sm:hidden items-center gap-2">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                        aria-expanded={mobileMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="size-5" />
                        ) : (
                            <Menu className="size-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer / Overlay */}
            {mobileMenuOpen && (
                <div className="sm:hidden border-b border-border/60 bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
                    <div className="px-6 py-6 space-y-6 max-w-4xl mx-auto">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-base font-medium py-1 transition-colors ${
                                        pathname === item.href
                                            ? 'text-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="pt-4 border-t border-border/50 space-y-3">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-foreground text-background py-2.5 rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                            >
                                <FileText className="size-4" />
                                Download Resume
                            </a>
                            <div className="flex items-center justify-between pt-2">
                                <a
                                    href="https://github.com/Mudigram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    GitHub
                                    <ArrowUpRight className="size-3" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mudiaga-omene-7727271b2/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    LinkedIn
                                    <ArrowUpRight className="size-3" />
                                </a>
                                <a
                                    href="https://www.x.com/TheMudiaga"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Twitter / X
                                    <ArrowUpRight className="size-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}