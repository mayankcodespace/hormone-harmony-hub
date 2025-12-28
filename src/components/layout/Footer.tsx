import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  topics: [
    { href: "/periods", label: "Periods & Cycle" },
    { href: "/pcos", label: "PCOS / PCOD" },
    { href: "/hormonal-weight", label: "Hormonal Weight" },
    { href: "/mood-pms", label: "Mood & PMS" },
  ],
  resources: [
    { href: "/start-here", label: "Start Here" },
    { href: "/quiz", label: "Find Your Path Quiz" },
    { href: "/find-doctor", label: "Find a Doctor" },
    { href: "/resources", label: "All Resources" },
    { href: "/sources", label: "Our Sources" },
  ],
  about: [
    { href: "/about", label: "About Us" },
    { href: "/editorial-policy", label: "Editorial Policy" },
    { href: "/disclaimer", label: "Medical Disclaimer" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-sage-50/50">
      {/* Persistent Disclaimer */}
      <div className="bg-terracotta-50 border-b border-terracotta-100">
        <div className="container py-3">
          <p className="text-center text-sm text-terracotta-500">
            <strong>Important:</strong> This website provides educational information only. 
            It is not a substitute for professional medical advice, diagnosis, or treatment. 
            Always consult a qualified healthcare provider.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="HormoneClarity" className="h-10 w-10" />
              <span className="font-serif text-xl font-semibold text-foreground">
                HormoneClarity
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering Indian women with clear, evidence-based hormonal health education. 
              No fear-mongering. No miracle claims. Just clarity.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Topics</h3>
            <ul className="space-y-2">
              {footerLinks.topics.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HormoneClarity. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-primary" /> for Indian women's health
          </p>
        </div>
      </div>
    </footer>
  );
}
