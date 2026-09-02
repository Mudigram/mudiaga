import { projects } from '@/data/projects';
import ProjectCard from '@/components/project/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Work',
    description: 'Products, tools, and experiments I\'ve built.',
};

export default function ProjectsPage() {
    const tier1 = projects.filter(p => p.tier === 1);
    const tier2 = projects.filter(p => p.tier === 2);
    const tier3 = projects.filter(p => p.tier === 3);

    return (
        <div className="mx-auto max-w-4xl px-6 py-16 space-y-20">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Work</h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    A collection of products, systems, and experiments. Organized by depth —
                    from shipped products with real users to smaller explorations and tools.
                </p>
            </div>

            {/* Shipped Products */}
            <section className="space-y-8">
                <div className="space-y-1">
                    <h2 className="text-lg font-semibold">Shipped Products</h2>
                    <p className="text-sm text-muted-foreground">
                        Full products I&apos;ve designed, built, and deployed.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {tier1.map(project => (
                        <ProjectCard key={project.slug} project={project} featured />
                    ))}
                </div>
            </section>

            {/* More Work */}
            <section className="space-y-8">
                <div className="space-y-1">
                    <h2 className="text-lg font-semibold">More Work</h2>
                    <p className="text-sm text-muted-foreground">
                        SDKs, platforms, and tools — smaller scope, still shipped.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tier2.map(project => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            {/* Lab / Experiments */}
            <section className="space-y-6">
                <div className="space-y-1">
                    <h2 className="text-lg font-semibold">Lab</h2>
                    <p className="text-sm text-muted-foreground">
                        Experiments, prototypes, and explorations. Not production products.
                    </p>
                </div>
                <div className="space-y-3">
                    {tier3.map(project => (
                        <a
                            key={project.slug}
                            href={project.githubUrl || project.href}
                            target={project.githubUrl ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-4 py-3 px-4 rounded-lg border border-border/50 hover:border-border hover:bg-card transition-all group"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 shrink-0">
                                    Experiment
                                </span>
                                <span className="text-sm font-medium truncate">{project.title}</span>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <div className="hidden sm:flex flex-wrap gap-1.5 justify-end">
                                    {project.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-xs text-muted-foreground">{project.year}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}