import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Your Cycle Phases", href: "/periods/cycle-phases" },
  { title: "Period Pain Management", href: "/periods/pain-management" },
  { title: "Heavy Periods: What's Normal?", href: "/periods/heavy-bleeding" },
];

export default function CrampsArticle() {
  return (
    <ArticleLayout
      title="What Causes Severe Cramps?"
      description="Understanding period pain — when it's normal and when to seek help."
      breadcrumbs={[
        { label: "Periods & Cycle", href: "/periods" },
        { label: "Severe Cramps" },
      ]}
      backLink={{ href: "/periods", label: "Periods & Cycle" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Period cramps (dysmenorrhea) are one of the most common menstrual complaints. 
        But how do you know when cramps are normal and when they're a sign to see a doctor?
      </p>

      <h2>Why Do Cramps Happen?</h2>
      <p>
        During your period, your uterus contracts to shed its lining. These contractions are 
        triggered by prostaglandins — hormone-like chemicals. Higher prostaglandin levels = 
        stronger contractions = more pain.
      </p>

      <h2>Primary vs Secondary Dysmenorrhea</h2>
      
      <h3>Primary Dysmenorrhea</h3>
      <ul>
        <li>The "normal" type of period pain</li>
        <li>Not caused by any underlying condition</li>
        <li>Usually starts 1-2 years after first period</li>
        <li>Often improves with age or after childbirth</li>
        <li>Pain typically starts just before or during period and lasts 1-3 days</li>
      </ul>

      <h3>Secondary Dysmenorrhea</h3>
      <ul>
        <li>Pain caused by an underlying condition</li>
        <li>Common causes: endometriosis, adenomyosis, fibroids, PID</li>
        <li>May start later in life or get worse over time</li>
        <li>Pain may last longer than typical period cramps</li>
      </ul>

      <h2>What Helps with Normal Cramps</h2>
      <ul>
        <li><strong>Heat:</strong> Hot water bottle or heating pad on lower abdomen</li>
        <li><strong>Gentle movement:</strong> Light walking, stretching, yoga</li>
        <li><strong>Anti-inflammatory foods:</strong> Turmeric, ginger, omega-3s</li>
        <li><strong>Hydration:</strong> Warm water, herbal teas</li>
        <li><strong>Reduce caffeine:</strong> Can increase cramping for some</li>
        <li><strong>OTC painkillers:</strong> Ibuprofen works better than paracetamol (take with food)</li>
      </ul>

      <h2>When to See a Doctor</h2>
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
        <p className="font-medium mb-2">Seek medical evaluation if:</p>
        <ul className="text-sm space-y-1">
          <li>• Pain is severe and not helped by OTC medication</li>
          <li>• Pain disrupts your daily life (missing work/school)</li>
          <li>• Cramps have gotten significantly worse over time</li>
          <li>• Pain occurs outside of your period</li>
          <li>• Pain during sex</li>
          <li>• Heavy bleeding along with severe pain</li>
        </ul>
      </div>

      <h2>Conditions That Cause Severe Cramps</h2>
      
      <h3>Endometriosis</h3>
      <p>
        Tissue similar to the uterine lining grows outside the uterus. Affects ~10% of women. 
        Symptoms: severe cramps, pain during sex, heavy periods, sometimes infertility.
      </p>

      <h3>Adenomyosis</h3>
      <p>
        The uterine lining grows into the muscular wall of the uterus. More common in 30s-40s. 
        Symptoms: heavy, painful periods, bloated feeling.
      </p>

      <h3>Fibroids</h3>
      <p>
        Non-cancerous growths in the uterus. Very common. May cause heavy bleeding and cramps 
        depending on size and location.
      </p>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> You don't have to just "bear" severe pain. If cramps 
          significantly impact your life, speak with a gynecologist. There are treatments available.
        </p>
      </div>
    </ArticleLayout>
  );
}
