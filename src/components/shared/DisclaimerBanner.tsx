import { AlertTriangle, Info, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface DisclaimerBannerProps {
  variant?: "info" | "warning" | "inline";
  dismissible?: boolean;
  className?: string;
}

export function DisclaimerBanner({ 
  variant = "info", 
  dismissible = false,
  className 
}: DisclaimerBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  if (variant === "inline") {
    return (
      <div className={cn(
        "flex items-start gap-3 rounded-lg border border-sage-200 bg-sage-50 p-4 text-sm",
        className
      )}>
        <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <p className="text-muted-foreground">
          <strong className="text-foreground">Educational content only.</strong> This information 
          is meant to help you understand your body better. It is not medical advice. Please consult 
          a qualified healthcare provider for diagnosis and treatment.
        </p>
      </div>
    );
  }

  return (
    <div className={cn(
      "relative border-l-4 px-4 py-3 text-sm",
      variant === "info" && "border-primary bg-sage-50 text-muted-foreground",
      variant === "warning" && "border-warning bg-warning/10 text-warning-foreground",
      className
    )}>
      <div className="flex items-start gap-3">
        {variant === "warning" ? (
          <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
        ) : (
          <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        )}
        <p className="flex-1">
          {variant === "warning" ? (
            <>
              <strong>Please note:</strong> If you're experiencing severe symptoms, heavy bleeding, 
              or any concerning changes, please seek medical attention promptly.
            </>
          ) : (
            <>
              <strong>Educational content only.</strong> This website provides general health 
              information for educational purposes. It is not a substitute for professional 
              medical advice, diagnosis, or treatment.
            </>
          )}
        </p>
        {dismissible && (
          <button
            onClick={() => setDismissed(true)}
            className="p-1 hover:bg-background/50 rounded transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
