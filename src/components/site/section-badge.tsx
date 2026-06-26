import { cn } from "@/lib/utils";

export function SectionBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-white/10 bg-zinc-900/80 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-zinc-200 shadow-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
