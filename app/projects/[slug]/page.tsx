import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TechBadge } from "@/components/ui/tech-badge";
import { ExternalLink, Github, FileText, Database, Play, Terminal } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        }
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: `${project.title} | Mudiaga Portfolio`,
            description: project.description,
            images: project.heroImage ? [project.heroImage] : [],
        },
    }
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    const content = project.content || {
        readme: "Detailed documentation coming soon.",
        architecture: "Architecture diagrams and system design notes are being prepared.",
    };

    return (
        <div className="max-w-5xl sm:px-6 lg:px-8 py-4">
            {/* Header */}
            <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <TechBadge key={tag} name={tag} className="text-xs" />
                    ))}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{project.title}</h1>
                <p className="text-base sm:text-xl text-muted-foreground max-w-3xl">
                    {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition w-full sm:w-auto"
                        >
                            <ExternalLink className="size-4" />
                            <span className="text-sm sm:text-base">Visit Live Site</span>
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border rounded-md font-medium hover:bg-muted transition w-full sm:w-auto"
                        >
                            <Github className="size-4" />
                            <span className="text-sm sm:text-base">View Source</span>
                        </a>
                    )}
                </div>

                {/* Hero Image */}
                {project.heroImage && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                        <Image
                            src={project.heroImage}
                            alt={`${project.title} screenshot`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
            </div>

            {/* GitHub-style Tabbed Interface */}
            <Tabs defaultValue="readme" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-10 sm:h-12 p-0 gap-3 sm:gap-6 lg:gap-8 overflow-x-auto">
                    <TabsTrigger
                        value="readme"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-full px-0 font-medium text-sm whitespace-nowrap"
                    >
                        <FileText className="size-3 sm:size-4 mr-1.5 sm:mr-2" /> <span className="hidden sm:inline">README</span><span className="sm:hidden">Read</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="architecture"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-full px-0 font-medium text-sm whitespace-nowrap"
                    >
                        <Database className="size-3 sm:size-4 mr-1.5 sm:mr-2" /> <span className="hidden sm:inline">Architecture</span><span className="sm:hidden">Arch</span>
                    </TabsTrigger>
                    {content.apiNotes && (
                        <TabsTrigger
                            value="notes"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-full px-0 font-medium text-sm whitespace-nowrap"
                        >
                            <Terminal className="size-3 sm:size-4 mr-1.5 sm:mr-2" /> <span className="hidden sm:inline">Tech Notes</span><span className="sm:hidden">Tech</span>
                        </TabsTrigger>
                    )}
                    {content.demoUrl && (
                        <TabsTrigger
                            value="demo"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-full px-0 font-medium text-sm whitespace-nowrap"
                        >
                            <Play className="size-3 sm:size-4 mr-1.5 sm:mr-2" /> <span className="hidden sm:inline">Live Demo</span><span className="sm:hidden">Demo</span>
                        </TabsTrigger>
                    )}
                </TabsList>

                <TabsContent value="readme" className="py-6 sm:py-8">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="p-0 prose prose-sm sm:prose dark:prose-invert max-w-none">
                            <div className="whitespace-pre-wrap font-sans text-muted-foreground leading-relaxed text-sm sm:text-base">
                                {content.readme}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="architecture" className="py-6 sm:py-8">
                    <Card>
                        <CardHeader className="p-4 sm:p-6">
                            <CardTitle className="text-lg sm:text-xl">System Design & Constraints</CardTitle>
                            <CardDescription className="text-sm">How this project was engineered for scale and reliability.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 prose prose-sm sm:prose dark:prose-invert max-w-none">
                            <div className="whitespace-pre-wrap text-muted-foreground text-sm sm:text-base">
                                {content.architecture}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {content.apiNotes && (
                    <TabsContent value="notes" className="py-6 sm:py-8">
                        <Card>
                            <CardHeader className="p-4 sm:p-6">
                                <CardTitle className="text-lg sm:text-xl">API & Implementation Details</CardTitle>
                                <CardDescription className="text-sm">Technical documentation and integration notes.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 prose prose-sm sm:prose dark:prose-invert max-w-none">
                                <div className="whitespace-pre-wrap text-muted-foreground font-mono text-xs sm:text-sm bg-muted/30 p-3 sm:p-4 rounded overflow-x-auto">
                                    {content.apiNotes}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                )}

                {content.demoUrl && (
                    <TabsContent value="demo" className="py-8">
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-dashed">
                            <a
                                href={content.demoUrl}
                                target="_blank"
                                className="flex items-center gap-2 hover:underline"
                            >
                                Open External Demo <ExternalLink className="size-4" />
                            </a>
                        </div>
                    </TabsContent>
                )}
            </Tabs>

            {/* Additional Images Gallery */}
            {project.images && project.images.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold">Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {project.images.map((image, idx) => (
                            <div key={idx} className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
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
        </div>
    );
}