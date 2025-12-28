import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "PCOS Basics: What You Need to Know", href: "/pcos/pcos-basics" },
  { title: "Understanding Insulin Resistance", href: "/pcos/insulin-resistance-simple" },
  { title: "PCOS Diet Guide for Indians", href: "/pcos/indian-diet-guide" },
];

export default function LongTermArticle() {
  return (
    <ArticleLayout
      title="Managing PCOS Long-Term"
      description="Building sustainable habits for lifelong PCOS management."
      breadcrumbs={[
        { label: "PCOS / PCOD", href: "/pcos" },
        { label: "Long-Term Management" },
      ]}
      backLink={{ href: "/pcos", label: "PCOS / PCOD" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        PCOS is a lifelong condition. The good news? With the right approach, many women 
        manage it well and live fully. Here's how to think long-term.
      </p>

      <h2>The Long-Term Perspective</h2>
      <p>
        PCOS isn't cured — but it can be managed well. Your goals evolve over time:
      </p>
      <ul>
        <li><strong>20s:</strong> Understanding your body, managing symptoms, building habits</li>
        <li><strong>30s:</strong> Often fertility-focused, continued symptom management</li>
        <li><strong>40s+:</strong> Metabolic health focus, perimenopause considerations</li>
      </ul>

      <h2>Key Health Monitoring</h2>
      <p>
        Women with PCOS should regularly monitor:
      </p>
      <ul>
        <li><strong>Blood sugar:</strong> Fasting glucose, HbA1c (every 6-12 months)</li>
        <li><strong>Lipid profile:</strong> Cholesterol levels (annually)</li>
        <li><strong>Blood pressure:</strong> Regular checks</li>
        <li><strong>Weight trends:</strong> Not obsessively, but tracking patterns</li>
        <li><strong>Mental health:</strong> Depression/anxiety are more common with PCOS</li>
      </ul>

      <h2>Building Sustainable Habits</h2>

      <h3>Movement</h3>
      <ul>
        <li>Find activities you enjoy and can maintain</li>
        <li>Prioritize consistency over intensity</li>
        <li>Include strength training for metabolic benefits</li>
      </ul>

      <h3>Nutrition</h3>
      <ul>
        <li>Focus on blood sugar stability, not dieting</li>
        <li>Learn to read your body's signals</li>
        <li>Build meals around protein and vegetables</li>
      </ul>

      <h3>Stress & Sleep</h3>
      <ul>
        <li>Protect your sleep — it affects everything</li>
        <li>Find stress management tools that work for you</li>
        <li>Set boundaries where needed</li>
      </ul>

      <h2>Working with Healthcare Providers</h2>
      <ul>
        <li>Find a doctor who understands PCOS</li>
        <li>Be an active partner in your care</li>
        <li>Track your symptoms and share data</li>
        <li>Don't hesitate to get second opinions</li>
        <li>Consider a care team: gynecologist, endocrinologist, dietitian</li>
      </ul>

      <h2>Mental Health Matters</h2>
      <p>
        PCOS affects mental health in multiple ways:
      </p>
      <ul>
        <li>Hormonal impacts on mood</li>
        <li>Body image concerns</li>
        <li>Fertility stress</li>
        <li>Frustration with symptoms</li>
      </ul>
      <p>
        Seeking support — whether from a therapist, support group, or trusted friends — is 
        not weakness. It's wisdom.
      </p>

      <h2>Life Stage Considerations</h2>

      <h3>If Planning Pregnancy</h3>
      <p>Start optimizing health 3-6 months before trying to conceive.</p>

      <h3>Perimenopause</h3>
      <p>PCOS symptoms sometimes improve, but metabolic risks may increase. Stay vigilant.</p>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> PCOS is part of your story, not your whole story. 
          With good management, you can thrive. Be patient with yourself and focus on 
          progress, not perfection.
        </p>
      </div>
    </ArticleLayout>
  );
}
