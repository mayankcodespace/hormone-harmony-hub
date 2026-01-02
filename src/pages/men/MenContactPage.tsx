import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";

export default function MenContactPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Men's Health", href: "/men" }, { label: "Contact" }]} />
          
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question, feedback, or suggestion? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-primary mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For general inquiries and feedback
              </p>
              <a href="mailto:hello@hormoneclarity.com" className="text-primary hover:underline text-sm">
                hello@hormoneclarity.com
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-primary mx-auto mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Content Feedback</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Spotted an error? Have a content suggestion?
              </p>
              <a href="mailto:content@hormoneclarity.com" className="text-primary hover:underline text-sm">
                content@hormoneclarity.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-serif text-xl font-semibold mb-6">Send us a message</h2>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="What's this about?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..."
                  rows={5}
                />
              </div>

              <Button type="submit" variant="hero" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          {/* Important Note */}
          <div className="mt-8 rounded-lg bg-terracotta-50 border border-terracotta-200 p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Please note:</strong> We cannot provide 
              medical advice or respond to specific health questions. For medical concerns, 
              please consult a qualified healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
