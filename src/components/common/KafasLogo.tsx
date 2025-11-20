import { cn } from '@/lib/utils';

export function KafasLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-start", className)}>
        <svg viewBox="0 0 400 60" className="h-full w-auto">
            <rect x="0" y="10" width="130" height="40" fill="#DC2626" />
            <text x="10" y="42" fontFamily="serif" fontSize="35" fontWeight="bold" fill="white">
                Kafas
            </text>
            <text x="140" y="42" fontFamily="serif" fontSize="35" fontWeight="bold" fill="hsl(var(--foreground))">
                Group
            </text>
            <text x="280" y="20" fontFamily="sans-serif" fontSize="12" fill="hsl(var(--foreground))">
                ®
            </text>
            <text x="0" y="58" fontFamily="serif" fontStyle="italic" fontSize="12" fill="#DC2626">
                bringing the world closer to you
            </text>
        </svg>
    </div>
  );
}
