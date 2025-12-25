import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = "center",
  className 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "space-y-3",
      align === "center" && "text-center",
      align === "right" && "text-right",
      className
    )}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
