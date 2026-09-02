import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { ProjectStatusBadge } from '@/components/project/ProjectStatusBadge';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: `${project.title} | Mudiaga Omene`,
            description: project.description,
            images: project.heroImage ? [project.heroImage] : [],
        },
    };
}

function CaseStudySection({ title, label, content }: { title: string; label: string; content: string }) {
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground">{label}</span>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="text-[15px] text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {content}
            </div>
        </div>
    );
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    const cs = project.caseStudy;

    return (
        <div className="mx-auto max-w-3xl px-6 py-12 space-y-12">
            {/* Back Link */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="size-3.5" />
                All projects
            </Link>

            {/* Header */}
            <header className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                    <ProjectStatusBadge status={project.status} />
                    <span className="text-xs text-muted-foreground">{project.role} · {project.year}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {project.title}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                        >
                            <ExternalLink className="size-4" />
                            Visit Live Site
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                        >
                            <Github className="size-4" />
                            View Source
                        </a>
                    )}
                </div>
            </header>

            {/* Hero Image */}
            {project.heroImage && (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
                    <Image
                        src={project.heroImage}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Key Insight Callout */}
            {project.keyInsight && (
                <blockquote className="border-l-2 border-primary/40 pl-5 py-2">
                    <p className="text-base italic text-foreground/80 leading-relaxed">
                        &ldquo;{project.keyInsight}&rdquo;
                    </p>
                </blockquote>
            )}

            {/* Case Study — Narrative Scroll */}
            {cs && (
                <div className="space-y-12 pt-4">
                    <div className="border-t border-border/50 pt-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                            Case Study
                        </p>

                        <div className="space-y-10">
                            <CaseStudySection label="01" title="The Problem" content={cs.problem} />
                            <CaseStudySection label="02" title="The Insight" content={cs.insight} />
                            <CaseStudySection label="03" title="The Approach" content={cs.approach} />
                            <CaseStudySection label="04" title="The Build" content={cs.build} />
                            <CaseStudySection label="05" title="Technical Decisions" content={cs.technicalDecisions} />
                            <CaseStudySection label="06" title="Challenges" content={cs.challenges} />
                            <CaseStudySection label="07" title="Outcome" content={cs.outcome} />
                            <CaseStudySection label="08" title="Reflection" content={cs.reflection} />
                        </div>
                    </div>
                </div>
            )}

            {/* Fallback for non-case-study projects */}
            {!cs && project.description && (
                <div className="space-y-4 pt-4 border-t border-border/50">
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                        {project.description}
                    </p>
                </div>
            )}

            {/* Screenshots Gallery */}
            {project.images && project.images.length > 0 && (
                <div className="space-y-6 pt-4 border-t border-border/50">
                    <h2 className="text-lg font-semibold">Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.images.map((image, idx) => (
                            <div
                                key={idx}
                                className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted"
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Navigation */}
            <div className="pt-8 border-t border-border/50">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="size-3.5" />
                    Back to all projects
                </Link>
            </div>
        </div>
    );
}