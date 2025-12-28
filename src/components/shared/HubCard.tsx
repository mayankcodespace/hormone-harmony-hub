import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HubCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  variant?: "default" | "featured";
  className?: string;
}

export function HubCard({ 
  title, 
  description, 
  href, 
  icon: Icon,
  variant = "default",
  className 
}: HubCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group hub-card block transition-all duration-300",
        variant === "featured" && "border-primary/30 bg-sage-50/50",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors",
          variant === "featured" 
            ? "bg-primary text-primary-foreground" 
            : "bg-sage-100 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
        )}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
