import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
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
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
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
        </div>

        {/* Search & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Search Toggle */}
          <div className="relative hidden sm:block">
            {isSearchOpen ? (
              <div className="flex items-center gap-2 animate-fade-in">
                <Input
                  type="search"
                  placeholder="Search topics..."
                  className="w-48 h-9"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
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
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search topics..."
                className="pl-9"
              />
            </div>

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
              to="/contact"
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
