import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Mock verification for structure demo
    const validSlugs = ["scaling-geospatial-api", "data-integrity-field-workflows"];
    if (!validSlugs.includes(slug)) notFound();

    return (
        <div className="max-w-3xl mx-auto py-10 space-y-12">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="size-4" /> Back to Case Studies
            </Link>

            <article className="space-y-10">
                <header className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="secondary" className="rounded-sm">Case Study</Badge>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Clock className="size-3" /> 12 min read</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                            {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </h1>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        A deep dive into the engineering constraints and architectural decisions made while building high-performance systems.
                    </p>
                </header>

                <Separator />

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Context & Problem</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Every engineering decision starts with a constraint. In this project, the primary challenge was...
                            [Long-form engineering content describing the specific domain problem]
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Design Decisions</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We evaluated three different approaches for handling this. The first involved...
                        </p>
                        <div className="bg-muted/50 p-6 rounded-lg border">
                            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">The Solution</h3>
                            <p className="text-sm italic">
                                We ultimately chose a hybrid strategy focusing on eventual consistency and read-heavy optimization.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Trade-offs</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Engineering is the art of choosing the right problems to have. By selecting this architecture, 
                            we prioritized performance over...
                        </p>
                    </section>
                </div>
            </article>
        </div>
    );
}