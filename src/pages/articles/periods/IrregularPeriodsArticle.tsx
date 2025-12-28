import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Your Cycle Phases", href: "/periods/cycle-phases" },
  { title: "PMS vs Normal Cycle Changes", href: "/periods/pms-basics" },
  { title: "PCOS / PCOD Guide", href: "/pcos" },
];

export default function IrregularPeriodsArticle() {
  return (
    <ArticleLayout
      title="Irregular Periods: Causes & When to Worry"
      description="What counts as irregular, common causes, and when to see a doctor."
      breadcrumbs={[
        { label: "Periods & Cycle", href: "/periods" },
        { label: "Irregular Periods" },
      ]}
      backLink={{ href: "/periods", label: "Periods & Cycle" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        "Am I normal?" is one of the most common questions about periods. The truth is, 
        there's a wide range of normal — but persistent irregularity is worth investigating.
      </p>

      <h2>What's Considered "Regular"?</h2>
      <ul>
        <li><strong>Cycle length:</strong> 21-35 days (from day 1 of one period to day 1 of next)</li>
        <li><strong>Period duration:</strong> 2-7 days</li>
        <li><strong>Variation:</strong> Up to 7-9 days variation cycle-to-cycle is considered normal</li>
      </ul>

      <h2>What's Considered "Irregular"?</h2>
      <ul>
        <li>Cycles consistently shorter than 21 days or longer than 35 days</li>
        <li>Missing periods for 3+ months (without pregnancy)</li>
        <li>Highly unpredictable — can't estimate when next period will come</li>
        <li>Sudden change from your previous pattern</li>
      </ul>

      <h2>Common Causes of Irregular Periods</h2>

      <h3>Lifestyle Factors</h3>
      <ul>
        <li><strong>Stress:</strong> High cortisol can delay or skip ovulation</li>
        <li><strong>Weight changes:</strong> Rapid gain or loss affects hormones</li>
        <li><strong>Over-exercising:</strong> Too much intense exercise can stop periods</li>
        <li><strong>Travel:</strong> Time zone changes can temporarily disrupt cycles</li>
        <li><strong>Diet:</strong> Very low calorie or restrictive eating</li>
      </ul>

      <h3>Medical Conditions</h3>
      <ul>
        <li><strong>PCOS/PCOD:</strong> Most common cause of irregular periods</li>
        <li><strong>Thyroid disorders:</strong> Both hypo and hyperthyroidism</li>
        <li><strong>High prolactin:</strong> Often from pituitary issues</li>
        <li><strong>Premature ovarian insufficiency:</strong> Early decline in ovarian function</li>
        <li><strong>Uterine issues:</strong> Fibroids, polyps</li>
      </ul>

      <h3>Life Stage Factors</h3>
      <ul>
        <li><strong>Teen years:</strong> First 2-3 years after menarche, irregularity is common</li>
        <li><strong>Perimenopause:</strong> Years leading to menopause (usually 40s)</li>
        <li><strong>Post-birth control:</strong> Can take a few months to regulate</li>
        <li><strong>Breastfeeding:</strong> Often suppresses ovulation</li>
      </ul>

      <h2>When to See a Doctor</h2>
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
        <p className="font-medium mb-2">Consult a gynecologist if:</p>
        <ul className="text-sm space-y-1">
          <li>• No period for 3+ months (and not pregnant)</li>
          <li>• Periods suddenly become irregular after being regular</li>
          <li>• Cycles consistently under 21 or over 35 days</li>
          <li>• Bleeding between periods</li>
          <li>• Trying to conceive and having irregular cycles</li>
          <li>• Accompanied by other symptoms (hair growth, acne, weight gain)</li>
        </ul>
      </div>

      <h2>What to Track Before Your Appointment</h2>
      <p>
        Before seeing a doctor, track for 2-3 months:
      </p>
      <ul>
        <li>First day of each period</li>
        <li>How many days of bleeding</li>
        <li>Flow (light/medium/heavy)</li>
        <li>Any symptoms (pain, mood changes)</li>
        <li>Any life changes (stress, weight, exercise, travel)</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> Irregular periods aren't always a problem, but they're 
          worth understanding. Many causes are easily treatable once identified.
        </p>
      </div>
    </ArticleLayout>
  );
}
