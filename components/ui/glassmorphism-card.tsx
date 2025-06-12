import { cn } from "@/lib/utils";

interface GlassmorphismCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "low" | "medium" | "high";
  hoverEffect?: boolean;
  glowAccent?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function GlassmorphismCard({
  intensity = "medium",
  hoverEffect = false,
  glowAccent = false,
  className,
  children,
  ...props
}: GlassmorphismCardProps) {
  const intensityStyles = {
    low: "bg-background/30 backdrop-blur-sm",
    medium: "bg-background/40 backdrop-blur-md",
    high: "bg-background/60 backdrop-blur-lg",
  };

  return (
    <div
      className={cn(
        "relative rounded-xl border border-border/50 p-6 shadow-md",
        intensityStyles[intensity],
        hoverEffect && "transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg",
        glowAccent && "before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-r before:from-blue-600/20 before:to-blue-500/20 before:blur-xl before:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}