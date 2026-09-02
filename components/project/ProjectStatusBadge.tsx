import { cn } from '@/lib/utils';

type ProjectStatusBadgeProps = {
    status: 'shipped' | 'experiment' | 'concept';
    className?: string;
};

const statusConfig = {
    shipped: {
        label: 'Shipped',
        className: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    experiment: {
        label: 'Experiment',
        className: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    },
    concept: {
        label: 'Concept',
        className: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    },
};

export function ProjectStatusBadge({ status, className }: ProjectStatusBadgeProps) {
    const config = statusConfig[status];

    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border',
                config.className,
                className
            )}
        >
            <span className={cn(
                'size-1.5 rounded-full',
                status === 'shipped' && 'bg-emerald-500',
                status === 'experiment' && 'bg-amber-500',
                status === 'concept' && 'bg-blue-500',
            )} />
            {config.label}
        </span>
    );
}
