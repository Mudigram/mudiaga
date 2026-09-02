import { projects } from '@/data/projects';
import ProjectCard from '@/components/project/ProjectCard';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
    const tier1 = projects.filter(p => p.tier === 1);
    const tier2 = projects.filter(p => p.tier === 2);

    return (
        <div className="mx-auto max-w-4xl px-6">

            {/* ——— HERO ——— */}
            <section className="py-20 sm:py-28 space-y-6">
                <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                    Mudiaga Omene · Lagos, Nigeria
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                    I turn problems
                    <br />
                    into products.
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Systems-oriented software builder with an engineering background.
                    I find broken workflows, design the system to fix them, and ship the product.
                    Currently building tools for Nigerian businesses.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                    >
                        View Work <ArrowRight className="size-4" />
                    </Link>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                    >
                        Resume
                    </a>
                    <a
                        href="https://github.com/Mudigram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </section>

            {/* ——— SELECTED WORK ——— */}
            <section className="py-16 space-y-10 border-t border-border/50">
                <div className="flex items-end justify-between gap-4">
                    <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            Selected Work
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                            Products I&apos;ve shipped
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        All projects <ArrowRight className="size-3" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {tier1.map(project => (
                        <ProjectCard key={project.slug} project={project} featured />
                    ))}
                </div>

                <Link
                    href="/projects"
                    className="sm:hidden inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                >
                    View all projects <ArrowRight className="size-3" />
                </Link>
            </section>

            {/* ——— HOW I THINK ——— */}
            <section className="py-16 space-y-8 border-t border-border/50">
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Process
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        How I think about building
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                        {
                            step: '01',
                            title: 'Observe',
                            description: 'I notice where systems are broken, inefficient, or missing entirely.',
                        },
                        {
                            step: '02',
                            title: 'Question',
                            description: 'Why does this work this way? What if the constraint is actually the opportunity?',
                        },
                        {
                            step: '03',
                            title: 'Design',
                            description: 'Map the system. Define boundaries, data flows, and the simplest path to a working product.',
                        },
                        {
                            step: '04',
                            title: 'Build',
                            description: 'Ship something real. Not a pitch deck. Not a prototype. A product people can use.',
                        },
                        {
                            step: '05',
                            title: 'Learn',
                            description: 'Watch how people actually use it. Iterate. Rebuild what needs rebuilding.',
                        },
                    ].map(item => (
                        <div
                            key={item.step}
                            className="rounded-lg border border-border/50 bg-card p-5 space-y-2"
                        >
                            <span className="text-xs font-mono text-muted-foreground">{item.step}</span>
                            <h3 className="text-sm font-semibold">{item.title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ——— MORE WORK ——— */}
            <section className="py-16 space-y-8 border-t border-border/50">
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        More Work
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Other things I&apos;ve built
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tier2.map(project => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            {/* ——— ABOUT ——— */}
            <section id="about" className="py-16 space-y-8 border-t border-border/50">
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        About
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        The story behind the builder
                    </h2>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-4">
                    <p className="text-base leading-relaxed">
                        I studied Petroleum Engineering — the kind of degree that teaches you to think
                        in systems, constraints, and resource optimization. But I&apos;d been building things
                        long before university. As a kid, I made remote-control car prototypes because
                        I couldn&apos;t afford to buy one. I created paper wallets, then figured out how
                        to waterproof them.
                    </p>
                    <p className="text-base leading-relaxed">
                        The pattern has always been the same: see a problem, imagine a better system,
                        try to build it. Software became the medium that let me do this at scale.
                        I taught myself to code by building — a wedding website for a department dinner
                        I had no business making, then progressively more complex products.
                    </p>
                    <p className="text-base leading-relaxed">
                        Today, I build products that solve real problems — mostly in Nigeria, where I live.
                        Receipt generators for small businesses. Price management systems for retail stores.
                        Healthcare facility APIs. AI-powered tools for students navigating international admissions.
                        Each project starts the same way: I notice something broken, question why, and build.
                    </p>
                    <p className="text-base leading-relaxed">
                        I&apos;m honest about my weaknesses too. I start more things than I finish. I get excited
                        by new problems before the current one is fully solved. I&apos;m working on becoming a
                        better finisher — which is why this portfolio prioritizes shipped work over ideas.
                    </p>
                </div>
            </section>

            {/* ——— CAPABILITIES ——— */}
            <section className="py-16 space-y-8 border-t border-border/50">
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Capabilities
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        What I work with
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            area: 'Frontend',
                            items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
                        },
                        {
                            area: 'Backend',
                            items: ['Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'REST APIs'],
                        },
                        {
                            area: 'AI & Data',
                            items: ['Machine Learning', 'RAG Systems', 'ChromaDB', 'LLM Integration'],
                        },
                        {
                            area: 'Other',
                            items: ['Rust', 'React Native', 'Git', 'Vercel', 'Docker'],
                        },
                    ].map(group => (
                        <div key={group.area} className="space-y-3">
                            <h3 className="text-sm font-semibold">{group.area}</h3>
                            <ul className="space-y-1.5">
                                {group.items.map(item => (
                                    <li key={item} className="text-sm text-muted-foreground">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ——— CONTACT ——— */}
            <section id="contact" className="py-20 space-y-6 border-t border-border/50">
                <div className="max-w-2xl space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Let&apos;s build something.
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I&apos;m open to software engineering roles, product collaborations, and interesting
                        problems. Best way to reach me is email.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a
                        href="mailto:omene.mudiaga@gmail.com"
                        className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                    >
                        omene.mudiaga@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mudiaga-omene-7727271b2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                    >
                        LinkedIn
                        <ArrowUpRight className="size-3.5" />
                    </a>
                </div>
            </section>
        </div>
    );
}