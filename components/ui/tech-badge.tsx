import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Technology color map
const techColors: Record<string, string> = {
    // Frontend
    "Next.js": "bg-[#000000] text-white hover:bg-[#000000]/80 dark:bg-white dark:text-black dark:hover:bg-white/90",
    "Next.js 15": "bg-[#000000] text-white hover:bg-[#000000]/80 dark:bg-white dark:text-black dark:hover:bg-white/90",
    "Next.js 16": "bg-[#000000] text-white hover:bg-[#000000]/80 dark:bg-white dark:text-black dark:hover:bg-white/90",
    "React": "bg-[#61dafb]/10 text-[#61dafb] hover:bg-[#61dafb]/20 border-[#61dafb]/20",
    "React 19": "bg-[#61dafb]/10 text-[#61dafb] hover:bg-[#61dafb]/20 border-[#61dafb]/20",
    "TypeScript": "bg-[#3178c6]/10 text-[#3178c6] hover:bg-[#3178c6]/20 border-[#3178c6]/20",
    "Tailwind CSS": "bg-[#06b6d4]/10 text-[#06b6d4] hover:bg-[#06b6d4]/20 border-[#06b6d4]/20",
    "Tailwind CSS v4": "bg-[#06b6d4]/10 text-[#06b6d4] hover:bg-[#06b6d4]/20 border-[#06b6d4]/20",

    // Backend
    "Python": "bg-[#3776ab]/10 text-[#3776ab] hover:bg-[#3776ab]/20 border-[#3776ab]/20",
    "FastAPI": "bg-[#009688]/10 text-[#009688] hover:bg-[#009688]/20 border-[#009688]/20",
    "Node.js": "bg-[#339933]/10 text-[#339933] hover:bg-[#339933]/20 border-[#339933]/20",
    "PostgreSQL": "bg-[#336791]/10 text-[#336791] hover:bg-[#336791]/20 border-[#336791]/20",

    // Database & Services
    "Supabase": "bg-[#3ecf8e]/10 text-[#3ecf8e] hover:bg-[#3ecf8e]/20 border-[#3ecf8e]/20",
    "MongoDB": "bg-[#47a248]/10 text-[#47a248] hover:bg-[#47a248]/20 border-[#47a248]/20",
    "Redis": "bg-[#dc382d]/10 text-[#dc382d] hover:bg-[#dc382d]/20 border-[#dc382d]/20",

    // State Management & Libraries
    "Redux Toolkit": "bg-[#764abc]/10 text-[#764abc] hover:bg-[#764abc]/20 border-[#764abc]/20",
    "Zustand": "bg-[#433e38]/10 text-[#433e38] dark:text-[#f4f1eb] hover:bg-[#433e38]/20 border-[#433e38]/20",
    "TanStack Query": "bg-[#ff4154]/10 text-[#ff4154] hover:bg-[#ff4154]/20 border-[#ff4154]/20",
    "React Query": "bg-[#ff4154]/10 text-[#ff4154] hover:bg-[#ff4154]/20 border-[#ff4154]/20",
    "Framer Motion": "bg-[#ff0055]/10 text-[#ff0055] hover:bg-[#ff0055]/20 border-[#ff0055]/20",

    // Concepts
    "DDD": "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    "Gamification": "bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
    "Auth": "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
    "Full-stack": "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800",
    "Mobile-first": "bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800",
};

interface TechBadgeProps extends React.ComponentProps<typeof Badge> {
    name: string;
}

export function TechBadge({ name, className, ...props }: TechBadgeProps) {
    // Try exact match, then partial match support could be added if needed
    const colorClass = techColors[name] || "bg-secondary text-secondary-foreground hover:bg-secondary/80";

    return (
        <Badge
            variant="outline"
            className={cn("border transition-colors font-medium", colorClass, className)}
            {...props}
        >
            {name}
        </Badge>
    );
}
