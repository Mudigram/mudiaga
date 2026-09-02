import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-border/50 bg-muted/30">
            <div className="mx-auto max-w-4xl px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                    {/* Identity */}
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">Mudiaga Omene</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Software engineer &amp; product builder.
                            <br />
                            Lagos, Nigeria.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            Navigate
                        </p>
                        <div className="flex flex-col gap-2">
                            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Work
                            </Link>
                            <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                About
                            </Link>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            Elsewhere
                        </p>
                        <div className="flex flex-col gap-2">
                            {[
                                { label: 'GitHub', href: 'https://github.com/Mudigram' },
                                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mudiaga-omene-7727271b2/' },
                                { label: 'X / Twitter', href: 'https://www.x.com/TheMudiaga' },
                                { label: 'Email', href: 'mailto:omene.mudiaga@gmail.com' },
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                                >
                                    {link.label}
                                    <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Mudiaga Omene. Ideas deserve form.
                    </p>
                </div>
            </div>
        </footer>
    );
}
