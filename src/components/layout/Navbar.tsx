import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { GlobalSearch } from "@/components/shared/GlobalSearch";

const womenNavLinks = [
  { href: "/", label: "Home" },
  { href: "/start-here", label: "Start Here" },
  {
    label: "Topics",
    children: [
      { href: "/periods", label: "Periods & Cycle" },
      { href: "/pcos", label: "PCOS / PCOD" },
      { href: "/hormonal-weight", label: "Hormonal Weight" },
      { href: "/mood-pms", label: "Mood & PMS" },
    ],
  },
  { href: "/symptom-tracker", label: "Symptom Tracker" },
  { href: "/resources", label: "Resources" },
];

const menNavLinks = [
  { href: "/men", label: "Home" },
  { href: "/men/start-here", label: "Start Here" },
  {
    label: "Topics",
    children: [
      { href: "/men/testosterone", label: "Testosterone & Energy" },
      { href: "/men/weight-metabolism", label: "Weight & Metabolism" },
      { href: "/men/mood-stress", label: "Mood & Stress" },
      { href: "/men/sexual-health", label: "Sexual Health" },
    ],
  },
  { href: "/men/symptom-tracker", label: "Symptom Tracker" },
  { href: "/men/resources", label: "Resources" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isMenSection = location.pathname.startsWith("/men");
  const navLinks = isMenSection ? menNavLinks : womenNavLinks;

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to={isMenSection ? "/men" : "/"} className="flex items-center gap-2">
          <img src={logo} alt="HormoneClarity" className="h-10 w-10" />
          <span className="font-serif text-xl font-semibold text-foreground">
            HormoneClarity
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <Link
                        to={child.href}
                        className={cn(
                          "w-full cursor-pointer",
                          isActive(child.href) && "bg-sage-50 text-primary"
                        )}
                      >
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={link.href} to={link.href!}>
                <Button
                  variant="ghost"
                  className={cn(
                    isActive(link.href!) && "bg-sage-50 text-primary"
                  )}
                >
                  {link.label}
                </Button>
              </Link>
            )
          )}
          
          {/* Global Search */}
          <div className="ml-2">
            <GlobalSearch />
          </div>
          
          {/* Gender Switcher */}
          <div className="ml-2 border-l border-border pl-2">
            <Link to={isMenSection ? "/" : "/men"}>
              <Button variant="outline" size="sm" className="text-xs">
                {isMenSection ? "Women's Health" : "Men's Health"}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden animate-slide-up">
          <div className="container py-4 space-y-2">
            {/* Gender Switcher Mobile */}
            <Link
              to={isMenSection ? "/" : "/men"}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium bg-primary/10 text-primary text-center mb-4"
            >
              Switch to {isMenSection ? "Women's" : "Men's"} Health
            </Link>

            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="space-y-1">
                  <p className="px-3 py-2 text-sm font-medium text-muted-foreground">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sage-50",
                        isActive(child.href) && "bg-sage-100 text-primary font-medium"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href!}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-sage-50",
                    isActive(link.href!) && "bg-sage-100 text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Contact Link */}
            <Link
              to={isMenSection ? "/men/contact" : "/contact"}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-sage-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}