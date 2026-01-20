import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Clock, Layers } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = [
    {
        title: "Scaling a Geospatial API for National Use",
        description: "How I handled PostGIS query optimization and caching strategies for OpenHealth NG to support 10k+ requests per minute.",
        tags: ["Performance", "PostgreSQL", "Systems"],
        readTime: "8 min read",
        slug: "scaling-geospatial-api"
    },
    {
        title: "Designing for Data Integrity in Field Workflows",
        description: "A deep dive into the domain-driven design decisions made for the Energy Production Log system.",
        tags: ["Architecture", "DDD", "Backend"],
        readTime: "12 min read",
        slug: "data-integrity-field-workflows"
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="max-w-4xl space-y-12 py-4">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    Engineering-driven breakdowns of complex problems, design decisions, and technical trade-offs.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {CASE_STUDIES.map((study) => (
                    <Card key={study.slug} className="group border-muted hover:border-foreground/20 transition-all">
                        <CardHeader className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-tighter">
                                    Engineering Deep Dive
                                </Badge>
                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="size-3" /> {study.readTime}
                                </span>
                            </div>
                            <CardTitle className="text-2xl mb-2 group-hover:text-primary transition">
                                {study.title}
                            </CardTitle>
                            <CardDescription className="text-base leading-relaxed max-w-2xl">
                                {study.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-8 pb-8 pt-0 flex items-center justify-between">
                            <div className="flex gap-2">
                                {study.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link 
                                href={`/case-studies/${study.slug}`} 
                                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all text-primary"
                            >
                                Read Article <ArrowRight className="size-4" />
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Empty State / Coming Soon */}
            <div className="rounded-lg border border-dashed p-12 flex flex-col items-center justify-center text-center space-y-4 bg-muted/20">
                <Layers className="size-8 text-muted-foreground opacity-50" />
                <div className="space-y-1">
                    <p className="font-medium">More studies in progress</p>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        I'm currently documenting my work on Distributed Systems and Gamification Engines.
                    </p>
                </div>
            </div>
        </div>
    );
}