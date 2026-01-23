import { projects } from "@/data/projects";
import ProjectCard from "@/components/project/ProjectCard";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Database, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const strengths = [
    { title: "Backend Systems", icon: Database, items: ["API Design", "Data Modeling", "Systems Architecture"] },
    { title: "Product Engineering", icon: Globe, items: ["Next.js", "Performance", "Product Thinking"] },
    { title: "Infrastructure", icon: Terminal, items: ["CI/CD", "Security", "Scale"] },
  ];

  return (
    <div className="max-w-4xl space-y-20 py-8">
      {/* Narrative Intro */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Full-stack engineer building production-grade systems.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          I specialize in building APIs and products that solve real problems.
          Currently focused on making Nigerian healthcare data accessible through
          <span className="text-foreground font-medium"> OpenHealth NG</span>.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium hover:bg-primary/90 transition shadow-sm"
          >
            Download Resume <ArrowRight className="size-4" />
          </a>
          <a
            href="https://github.com/Mudigram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border bg-background px-5 py-2.5 rounded-md font-medium hover:bg-muted transition"
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
            GitHub
          </a>
          <Link href="/projects" className="inline-flex items-center gap-2 border bg-muted/50 px-5 py-2.5 rounded-md font-medium hover:bg-muted transition">
            View Projects
          </Link>
        </div>
      </section>

      {/* Technical Strengths */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Technical Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((s) => (
            <div key={s.title} className="space-y-3">
              <div className="flex items-center gap-2 text-foreground">
                <s.icon className="size-4" />
                <h3 className="font-medium">{s.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Highlighted Work */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Highlighted Work</h2>
          <Link href="/projects" className="text-sm font-medium hover:underline flex items-center gap-1">
            All Projects <ArrowRight className="size-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {projects
            .filter(p => p.highlight)
            .map(project => (
              <Card key={project.slug} className="group overflow-hidden border-muted transition hover:border-foreground/20">
                <Link href={project.href} className="block">
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-xl group-hover:text-primary transition">{project.title}</CardTitle>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>
                      <Badge variant="secondary" className="shrink-0">{project.tags[0]}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(1).map(tag => (
                        <span key={tag} className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-20 pb-12 border-t">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Let's build something substantial.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always open to discussing system architecture, API design, or new product opportunities.
              The best way to reach me is via email or LinkedIn.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:omene.mudiaga@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/mudiaga-omene-7727271b2/"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border px-6 py-3 rounded-lg font-medium hover:bg-muted transition"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}