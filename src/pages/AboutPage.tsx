import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Heart, Target, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "About Us" }]} />
          
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              About HormoneClarity
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              We're on a mission to provide clear, trustworthy, and accessible 
              hormonal health education for Indian women aged 18-35.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Mission */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100 text-primary">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground">
              Hormonal health information online is often confusing, fear-based, or full of miracle claims. 
              We believe Indian women deserve better — clear explanations in simple language, rooted in evidence, 
              without the overwhelm.
            </p>
            <p className="text-muted-foreground mt-4">
              Our goal is to help you understand your body, recognize patterns worth paying attention to, 
              and know when to seek professional care — all without making you panic.
            </p>
          </section>

          {/* Values */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100 text-primary">
                <Heart className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-semibold">What We Stand For</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-semibold mb-2">Trust First</h3>
                <p className="text-sm text-muted-foreground">
                  Every piece of content is reviewed for accuracy and includes citations from 
                  reputable medical sources.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-semibold mb-2">No Fear-Mongering</h3>
                <p className="text-sm text-muted-foreground">
                  We present information calmly and factually. No scare tactics, no "toxin" panic, 
                  no miracle cures.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-semibold mb-2">India-Relevant</h3>
                <p className="text-sm text-muted-foreground">
                  Content written with Indian women in mind — Indian food examples, 
                  local healthcare context, and Hinglish when it helps.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-semibold mb-2">Educational, Not Medical</h3>
                <p className="text-sm text-muted-foreground">
                  We help you understand your body better, but always emphasize working with 
                  qualified healthcare providers.
                </p>
              </div>
            </div>
          </section>

          {/* Safety */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-semibold">Our Commitment to Safety</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                We never provide medical diagnoses or treatment recommendations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                We always include "red flag" symptoms that need medical attention
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                We cite evidence-based sources (WHO, ACOG, NICHD, peer-reviewed research)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                We regularly update content and display "last updated" dates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                We include crisis helpline information where relevant (mental health content)
              </li>
            </ul>
          </section>

          {/* Who We Are */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-semibold">Who We Are</h2>
            </div>
            <p className="text-muted-foreground">
              HormoneClarity was created by a team passionate about women's health education. 
              Our content is researched and written with care, reviewed for medical accuracy, 
              and designed to be accessible to busy Indian women who just want straight answers.
            </p>
            <p className="text-muted-foreground mt-4">
              We're not doctors — and we're clear about that. Our role is education, 
              not diagnosis or treatment. For medical advice, always consult a qualified 
              healthcare professional.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-xl bg-sage-50 border border-sage-200 p-6">
            <h3 className="font-semibold mb-2">Get in Touch</h3>
            <p className="text-muted-foreground mb-4">
              Have feedback, questions, or content suggestions? We'd love to hear from you.
            </p>
            <a 
              href="/contact" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              Contact us →
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
}
