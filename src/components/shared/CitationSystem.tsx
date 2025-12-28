import { ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface Citation {
  id: number;
  title: string;
  source: string;
  url: string;
  accessDate?: string;
}

interface CitationLinkProps {
  id: number;
}

interface SourcesAccordionProps {
  citations: Citation[];
  lastUpdated?: string;
}

export function CitationLink({ id }: CitationLinkProps) {
  return (
    <sup>
      <a
        href={`#citation-${id}`}
        className="text-primary hover:text-primary/80 font-medium ml-0.5"
        aria-label={`Citation ${id}`}
      >
        [{id}]
      </a>
    </sup>
  );
}

export function SourcesAccordion({ citations, lastUpdated }: SourcesAccordionProps) {
  return (
    <div className="mt-12 border-t border-border pt-8">
      {lastUpdated && (
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Last updated:</strong> {lastUpdated}
        </p>
      )}
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="sources" className="border-sage-200">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            Sources & References
          </AccordionTrigger>
          <AccordionContent>
            <ol className="space-y-3 mt-4">
              {citations.map((citation) => (
                <li 
                  key={citation.id} 
                  id={`citation-${citation.id}`}
                  className="text-sm text-muted-foreground pl-6 relative"
                >
                  <span className="absolute left-0 font-medium text-foreground">
                    [{citation.id}]
                  </span>
                  <span className="font-medium text-foreground">{citation.title}</span>
                  {" — "}
                  <span>{citation.source}</span>
                  {citation.url && (
                    <a
                      href={citation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 ml-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>View source</span>
                    </a>
                  )}
                  {citation.accessDate && (
                    <span className="text-muted-foreground/70 ml-2">
                      (Accessed: {citation.accessDate})
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
