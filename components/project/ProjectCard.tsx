import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
    if (featured) {
        return (
            <Link href={project.href} className="group block">
                <article className="overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-border hover:shadow-sm">
                    {project.heroImage && (
                        <div className="relative aspect-[2/1] w-full overflow-hidden bg-muted">
                            <Image
                                src={project.heroImage}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    )}
                    <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <ProjectStatusBadge status={project.status} />
                                <span className="text-xs text-muted-foreground">{project.year}</span>
                            </div>
                            <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>
            </Link>
        );
    }

    return (
        <Link href={project.href} className="group block">
            <article className="h-full rounded-lg border border-border/50 bg-card p-5 transition-all hover:border-border hover:shadow-sm space-y-3">
                <div className="flex items-center justify-between gap-2">
                    <ProjectStatusBadge status={project.status} />
                    <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <h3 className="text-base font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map(tag => (
                        <span
                            key={tag}
                            className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </article>
        </Link>
    );
}