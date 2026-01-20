import Link from 'next/link';
import { Project } from '@/data/projects';


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link href={project.href} className="group block">
            <Card className="h-full border-muted transition-all hover:border-primary/30 hover:shadow-sm overflow-hidden">
                {/* Hero Image */}
                {project.heroImage && (
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                        <Image
                            src={project.heroImage}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                        />
                    </div>
                )}
                <CardHeader className="p-5 pb-3">
                    <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 3).map(tag => (
                                <TechBadge key={tag} name={tag} className="text-[10px] py-0 px-1.5" />
                            ))}
                        </div>
                        <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </CardContent>
            </Card>
        </Link>
    );
}