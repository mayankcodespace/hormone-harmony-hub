import { useState, useMemo, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, X, FileText, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Article {
  title: string;
  description: string;
  href: string;
  category: string;
  section: "women" | "men";
}

// All articles data
const allArticles: Article[] = [
  // Women's Periods articles
  { title: "Understanding Your Menstrual Cycle Phases", description: "Learn about the four phases of your menstrual cycle and how hormones change throughout.", href: "/periods/cycle-phases", category: "Periods & Menstrual Cycle", section: "women" },
  { title: "What Actually Helps Period Cramps", description: "Evidence-based remedies and lifestyle changes for menstrual pain relief.", href: "/periods/cramps-what-helps", category: "Periods & Menstrual Cycle", section: "women" },
  { title: "Irregular Periods: What They Might Mean", description: "Common causes of irregular periods and when to consult a doctor.", href: "/periods/irregular-periods-causes", category: "Periods & Menstrual Cycle", section: "women" },
  { title: "PMS Basics: What's Normal, What's Not", description: "Understanding premenstrual syndrome symptoms and when to seek help.", href: "/periods/pms-basics", category: "Periods & Menstrual Cycle", section: "women" },
  { title: "How to Track Your Cycle Effectively", description: "A guide to cycle tracking methods and what to monitor.", href: "/periods/tracking-guide", category: "Periods & Menstrual Cycle", section: "women" },
  { title: "Heavy Bleeding: Causes and Solutions", description: "Understanding menorrhagia and treatment options.", href: "/periods/heavy-bleeding", category: "Periods & Menstrual Cycle", section: "women" },
  { title: "Natural Pain Management for Periods", description: "Drug-free approaches to managing menstrual discomfort.", href: "/periods/pain-management", category: "Periods & Menstrual Cycle", section: "women" },
  { title: "Exercise During Your Period", description: "How to adapt your workouts throughout your cycle.", href: "/periods/exercise-guide", category: "Periods & Menstrual Cycle", section: "women" },

  // Women's PCOS articles
  { title: "PCOS Basics: What You Need to Know", description: "Understanding polycystic ovary syndrome and its symptoms.", href: "/pcos/pcos-basics", category: "PCOS / PCOD", section: "women" },
  { title: "Insulin Resistance and PCOS", description: "How insulin affects PCOS and what you can do about it.", href: "/pcos/insulin-resistance-simple", category: "PCOS / PCOD", section: "women" },
  { title: "PCOS, Acne, and Hair Changes", description: "Managing hormonal acne and hirsutism with PCOS.", href: "/pcos/pcos-acne-hair", category: "PCOS / PCOD", section: "women" },
  { title: "Safe Weight Loss with PCOS", description: "Sustainable approaches to weight management with PCOS.", href: "/pcos/pcos-weight-loss-safe", category: "PCOS / PCOD", section: "women" },
  { title: "PCOS and Fertility", description: "Understanding how PCOS affects fertility and your options.", href: "/pcos/pcos-fertility", category: "PCOS / PCOD", section: "women" },
  { title: "PCOS Supplements: What Works?", description: "Evidence-based review of supplements for PCOS.", href: "/pcos/supplements-review", category: "PCOS / PCOD", section: "women" },
  { title: "Indian Diet Guide for PCOS", description: "PCOS-friendly Indian food choices and meal ideas.", href: "/pcos/indian-diet-guide", category: "PCOS / PCOD", section: "women" },
  { title: "Long-Term PCOS Management", description: "Living well with PCOS over the long term.", href: "/pcos/long-term-management", category: "PCOS / PCOD", section: "women" },

  // Women's Hormonal Weight articles
  { title: "Why Weight Changes with Hormones", description: "Understanding the hormonal factors behind weight changes.", href: "/hormonal-weight/why-weight-changes", category: "Hormonal Weight", section: "women" },
  { title: "Insulin Resistance and Weight", description: "How insulin affects weight and what to do about it.", href: "/hormonal-weight/insulin-resistance", category: "Hormonal Weight", section: "women" },
  { title: "Cortisol and Belly Fat", description: "The stress-weight connection explained.", href: "/hormonal-weight/cortisol-belly-fat", category: "Hormonal Weight", section: "women" },
  { title: "Thyroid and Weight", description: "How thyroid function affects metabolism and weight.", href: "/hormonal-weight/thyroid-weight", category: "Hormonal Weight", section: "women" },
  { title: "Sustainable Weight Approach", description: "Long-term strategies for healthy weight management.", href: "/hormonal-weight/sustainable-approach", category: "Hormonal Weight", section: "women" },
  { title: "Exercise for Hormonal Balance", description: "Best exercises for hormone-friendly weight management.", href: "/hormonal-weight/exercise-guide", category: "Hormonal Weight", section: "women" },
  { title: "Sleep and Weight Connection", description: "How sleep affects hormones and weight.", href: "/hormonal-weight/sleep-weight", category: "Hormonal Weight", section: "women" },
  { title: "Indian Diet for Weight Balance", description: "Traditional Indian foods for hormonal weight management.", href: "/hormonal-weight/indian-diet", category: "Hormonal Weight", section: "women" },

  // Women's Mood articles
  { title: "PMS vs PMDD: Know the Difference", description: "Understanding the spectrum of premenstrual symptoms.", href: "/mood-pms/pms-vs-pmdd-basics", category: "Mood & PMS", section: "women" },
  { title: "Mood Tracking for Patterns", description: "How to track mood changes throughout your cycle.", href: "/mood-pms/mood-tracking", category: "Mood & PMS", section: "women" },
  { title: "Serotonin and Hormones", description: "The hormone-mood connection explained.", href: "/mood-pms/serotonin-hormones", category: "Mood & PMS", section: "women" },
  { title: "Managing Period Anxiety", description: "Coping strategies for hormonal anxiety.", href: "/mood-pms/period-anxiety", category: "Mood & PMS", section: "women" },
  { title: "Sleep and Mood Balance", description: "How sleep affects hormonal mood changes.", href: "/mood-pms/sleep-mood", category: "Mood & PMS", section: "women" },
  { title: "Natural Mood Remedies", description: "Evidence-based natural approaches to mood support.", href: "/mood-pms/natural-remedies", category: "Mood & PMS", section: "women" },
  { title: "When to Seek Professional Help", description: "Signs that it's time to consult a professional.", href: "/mood-pms/when-to-seek-help", category: "Mood & PMS", section: "women" },
  { title: "Stress Management Techniques", description: "Practical strategies for managing stress.", href: "/mood-pms/stress-management", category: "Mood & PMS", section: "women" },

  // Men's Testosterone articles
  { title: "Testosterone Basics", description: "Understanding testosterone and its role in men's health.", href: "/men/testosterone/basics", category: "Testosterone & Energy", section: "men" },
  { title: "Signs of Low Testosterone", description: "Recognizing symptoms of low T and when to get tested.", href: "/men/testosterone/low-t-signs", category: "Testosterone & Energy", section: "men" },
  { title: "Lifestyle & Testosterone", description: "How lifestyle factors affect testosterone levels.", href: "/men/testosterone/lifestyle", category: "Testosterone & Energy", section: "men" },
  { title: "Testosterone Testing Guide", description: "What to know about testosterone testing and results.", href: "/men/testosterone/testing", category: "Testosterone & Energy", section: "men" },
  { title: "Cortisol-Testosterone Connection", description: "How stress affects testosterone levels.", href: "/men/testosterone/cortisol-connection", category: "Testosterone & Energy", section: "men" },
  { title: "Sleep and Testosterone", description: "The crucial role of sleep in testosterone production.", href: "/men/testosterone/sleep", category: "Testosterone & Energy", section: "men" },
  { title: "Exercise for Testosterone", description: "Best exercises for supporting testosterone levels.", href: "/men/testosterone/exercise", category: "Testosterone & Energy", section: "men" },
  { title: "TRT: Facts and Myths", description: "Evidence-based information about testosterone replacement therapy.", href: "/men/testosterone/trt-facts", category: "Testosterone & Energy", section: "men" },

  // Men's Weight articles
  { title: "Understanding Belly Fat", description: "Why men gain belly fat and what drives visceral fat.", href: "/men/weight/belly-fat", category: "Weight & Metabolism", section: "men" },
  { title: "Insulin Resistance in Men", description: "How insulin affects weight and metabolism in men.", href: "/men/weight/insulin-resistance", category: "Weight & Metabolism", section: "men" },
  { title: "Cortisol and Fat Storage", description: "How stress hormones promote fat accumulation.", href: "/men/weight/cortisol-fat", category: "Weight & Metabolism", section: "men" },
  { title: "Sleep and Weight in Men", description: "How poor sleep affects weight and metabolism.", href: "/men/weight/sleep-weight", category: "Weight & Metabolism", section: "men" },
  { title: "Sustainable Fat Loss", description: "Evidence-based approaches to long-term weight management.", href: "/men/weight/sustainable-approach", category: "Weight & Metabolism", section: "men" },
  { title: "Exercise Guide for Fat Loss", description: "Optimal training strategies for men's weight loss.", href: "/men/weight/exercise-guide", category: "Weight & Metabolism", section: "men" },
  { title: "Indian Diet for Men", description: "Traditional Indian foods for weight management.", href: "/men/weight/indian-diet", category: "Weight & Metabolism", section: "men" },
  { title: "Thyroid and Men's Weight", description: "How thyroid function affects metabolism in men.", href: "/men/weight/thyroid", category: "Weight & Metabolism", section: "men" },

  // Men's Mood articles
  { title: "Stress Hormones Explained", description: "Understanding cortisol and adrenaline's impact on health.", href: "/men/mood/stress-hormones", category: "Mood, Stress & Sleep", section: "men" },
  { title: "Anxiety and Hormones", description: "The hormonal factors behind anxiety in men.", href: "/men/mood/anxiety-hormones", category: "Mood, Stress & Sleep", section: "men" },
  { title: "Sleep Deprivation Effects", description: "How lack of sleep affects mood and hormones.", href: "/men/mood/sleep-deprivation", category: "Mood, Stress & Sleep", section: "men" },
  { title: "Burnout: Signs and Recovery", description: "Recognizing and recovering from burnout.", href: "/men/mood/burnout", category: "Mood, Stress & Sleep", section: "men" },
  { title: "Testosterone and Mood", description: "How testosterone affects mental well-being.", href: "/men/mood/testosterone-mood", category: "Mood, Stress & Sleep", section: "men" },
  { title: "Stress Management for Men", description: "Practical stress reduction techniques.", href: "/men/mood/stress-management", category: "Mood, Stress & Sleep", section: "men" },
  { title: "When to Seek Help", description: "Signs that professional support is needed.", href: "/men/mood/when-to-seek-help", category: "Mood, Stress & Sleep", section: "men" },
  { title: "Nutrition for Mental Health", description: "Foods that support mood and brain function.", href: "/men/mood/nutrition-mental-health", category: "Mood, Stress & Sleep", section: "men" },

  // Men's Sexual Health articles
  { title: "Testosterone and Libido", description: "Understanding the hormone-desire connection.", href: "/men/sexual-health/testosterone-libido", category: "Sexual Health & Energy", section: "men" },
  { title: "Erectile Function Basics", description: "What affects erectile function and how to support it.", href: "/men/sexual-health/erectile-function", category: "Sexual Health & Energy", section: "men" },
  { title: "Stress Impact on Sexual Health", description: "How stress affects sexual function and libido.", href: "/men/sexual-health/stress-impact", category: "Sexual Health & Energy", section: "men" },
  { title: "Sleep and Sexual Health", description: "The connection between sleep and sexual function.", href: "/men/sexual-health/sleep-impact", category: "Sexual Health & Energy", section: "men" },
  { title: "Cardiovascular Connection", description: "Heart health and sexual function are linked.", href: "/men/sexual-health/cardiovascular", category: "Sexual Health & Energy", section: "men" },
  { title: "Male Fertility Basics", description: "Understanding sperm health and fertility factors.", href: "/men/sexual-health/fertility", category: "Sexual Health & Energy", section: "men" },
  { title: "Dopamine and Desire", description: "How dopamine affects motivation and libido.", href: "/men/sexual-health/dopamine-desire", category: "Sexual Health & Energy", section: "men" },
];

interface GlobalSearchProps {
  className?: string;
}

export function GlobalSearch({ className }: GlobalSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  // Determine current section
  const isMenSection = location.pathname.startsWith("/men");

  // Filter articles based on search query
  const filteredArticles = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(" ");
    
    return allArticles.filter(article => {
      const searchText = `${article.title} ${article.description} ${article.category}`.toLowerCase();
      return searchTerms.every(term => searchText.includes(term));
    }).slice(0, 10);
  }, [query]);

  // Group by section
  const groupedResults = useMemo(() => {
    const women = filteredArticles.filter(a => a.section === "women");
    const men = filteredArticles.filter(a => a.section === "men");
    return { women, men };
  }, [filteredArticles]);

  // Keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when dialog opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close on navigation
  useEffect(() => {
    setIsOpen(false);
    setQuery("");
  }, [location.pathname]);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-9 w-9 md:h-10 md:w-64 md:justify-start md:px-3 md:py-2",
          className
        )}
        onClick={() => setIsOpen(true)}
      >
        <Search className="h-4 w-4 md:mr-2" />
        <span className="hidden md:inline-flex text-muted-foreground">
          Search articles...
        </span>
        <kbd className="pointer-events-none absolute right-2 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 md:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-xl p-0 gap-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Search Articles</DialogTitle>
          </DialogHeader>
          
          <div className="flex items-center border-b px-4">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <Input
              ref={inputRef}
              placeholder="Search all articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-12"
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => setQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="max-h-[400px] overflow-y-auto p-2">
            {query && filteredArticles.length === 0 && (
              <div className="py-8 text-center text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No articles found for "{query}"</p>
              </div>
            )}

            {!query && (
              <div className="py-8 text-center text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Start typing to search articles</p>
                <p className="text-xs mt-1">
                  Search across both women's and men's health sections
                </p>
              </div>
            )}

            {/* Women's results */}
            {groupedResults.women.length > 0 && (
              <div className="mb-4">
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Women's Health
                </div>
                <div className="space-y-1">
                  {groupedResults.women.map((article) => (
                    <Link
                      key={article.href}
                      to={article.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">
                          {article.title}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {article.category} • {article.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Men's results */}
            {groupedResults.men.length > 0 && (
              <div>
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Men's Health
                </div>
                <div className="space-y-1">
                  {groupedResults.men.map((article) => (
                    <Link
                      key={article.href}
                      to={article.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">
                          {article.title}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {article.category} • {article.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
