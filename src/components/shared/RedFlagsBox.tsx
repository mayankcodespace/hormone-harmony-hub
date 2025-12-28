import { AlertTriangle } from "lucide-react";

interface RedFlagsBoxProps {
  title?: string;
  items: string[];
  urgentNote?: string;
}

export function RedFlagsBox({ 
  title = "When to seek urgent medical care",
  items,
  urgentNote
}: RedFlagsBoxProps) {
  return (
    <div className="red-flag-box">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="h-5 w-5 text-destructive" />
        <h3 className="font-semibold text-destructive">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-destructive mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {urgentNote && (
        <p className="mt-4 text-sm font-medium text-destructive">
          {urgentNote}
        </p>
      )}
    </div>
  );
}
