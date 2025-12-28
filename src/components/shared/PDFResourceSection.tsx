import { FileText, Download, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFResourceSectionProps {
  className?: string;
  variant?: "default" | "compact";
}

export function PDFResourceSection({ className, variant = "default" }: PDFResourceSectionProps) {
  const handleDownload = () => {
    // Open the PDF in a new tab (will be a static file in public folder)
    window.open("/hormone-friendly-framework.pdf", "_blank");
  };

  const frameworkIncludes = [
    "Flexible daily framework (not a rigid routine)",
    "Food category examples (protein, carbs, fats)",
    "Budget-friendly Indian food options",
    "Gentle movement ideas",
    "Sleep & stress basics",
    "When to seek professional help",
  ];

  if (variant === "compact") {
    return (
      <div className={`rounded-xl bg-gradient-to-br from-sage-50 to-terracotta-50 p-6 border border-sage-200 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
            <FileText className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-lg font-semibold mb-1">
              Hormone-Friendly Daily Framework (PDF)
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              A gentle starting point for supporting your hormonal health — not a replacement for professional care.
            </p>
            <Button variant="hero" size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download Free PDF
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl bg-gradient-to-br from-sage-50 to-terracotta-50 p-8 sm:p-12 border border-sage-200 ${className}`}>
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
          <FileText className="h-8 w-8" />
        </div>
        
        <h2 className="font-serif text-2xl font-semibold mb-3">
          A Gentle Hormone-Friendly Daily Framework
        </h2>
        <p className="text-muted-foreground mb-6">
          A calm starting point for supporting your hormonal health — not a replacement for professional care. 
          Simple, practical ideas that are generally safe for most people.
        </p>

        <div className="text-left bg-background/60 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-sm mb-3">This PDF includes:</h3>
          <ul className="space-y-2">
            {frameworkIncludes.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Button variant="hero" size="lg" onClick={handleDownload}>
          <Download className="h-5 w-5 mr-2" />
          Download Free PDF
        </Button>

        <div className="mt-6 flex items-start gap-2 text-left bg-terracotta-50 rounded-lg p-4 border border-terracotta-200">
          <AlertCircle className="h-4 w-4 text-terracotta-500 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-muted-foreground">
            <strong className="text-foreground">Important:</strong> This is educational information only, 
            not medical advice. Individual needs vary. Always consult a qualified healthcare provider 
            for personalized guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
