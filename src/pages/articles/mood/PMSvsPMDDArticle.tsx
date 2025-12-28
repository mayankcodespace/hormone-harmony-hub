import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Tracking Mood & Your Cycle", href: "/mood-pms/mood-tracking" },
  { title: "When to Seek Professional Help", href: "/mood-pms/when-to-seek-help" },
  { title: "The Serotonin Connection", href: "/mood-pms/serotonin-hormones" },
];

export default function PMSvsPMDDArticle() {
  return (
    <ArticleLayout
      title="PMS vs PMDD: Understanding the Difference"
      description="When are premenstrual symptoms 'normal' and when do they need attention?"
      breadcrumbs={[
        { label: "Mood & PMS", href: "/mood-pms" },
        { label: "PMS vs PMDD" },
      ]}
      backLink={{ href: "/mood-pms", label: "Mood & PMS" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Most women experience some premenstrual symptoms, but for some, these symptoms 
        are severe enough to disrupt daily life. Understanding the difference matters.
      </p>

      <h2>What is PMS?</h2>
      <p>
        Premenstrual Syndrome (PMS) includes physical and emotional symptoms that occur 
        in the 1-2 weeks before your period and resolve when bleeding starts.
      </p>
      
      <h3>Common PMS Symptoms</h3>
      <ul>
        <li>Mood swings and irritability</li>
        <li>Bloating and water retention</li>
        <li>Breast tenderness</li>
        <li>Fatigue</li>
        <li>Food cravings</li>
        <li>Headaches</li>
        <li>Difficulty concentrating</li>
      </ul>

      <h3>Key Characteristics</h3>
      <ul>
        <li>Affects up to 75-90% of menstruating women</li>
        <li>Symptoms are mild to moderate</li>
        <li>You can still function normally (with effort)</li>
        <li>Symptoms are annoying but not disabling</li>
      </ul>

      <h2>What is PMDD?</h2>
      <p>
        Premenstrual Dysphoric Disorder (PMDD) is a severe form of PMS affecting about 
        3-8% of menstruating women. It's a recognized medical condition.
      </p>

      <h3>PMDD Symptoms (More Severe)</h3>
      <ul>
        <li>Severe depression, hopelessness</li>
        <li>Intense anxiety or panic</li>
        <li>Extreme irritability or anger</li>
        <li>Feeling out of control</li>
        <li>Suicidal thoughts (seek help immediately)</li>
        <li>Severe fatigue</li>
        <li>Physical symptoms of PMS (often worse)</li>
      </ul>

      <h3>Key Differences from PMS</h3>
      <ul>
        <li>Symptoms significantly impair daily functioning</li>
        <li>May cause relationship or work problems</li>
        <li>Emotional symptoms are predominant</li>
        <li>Symptoms feel dramatically different from the rest of the cycle</li>
      </ul>

      <h2>How to Know Which You Have</h2>

      <h3>Track for at Least 2 Cycles</h3>
      <ul>
        <li>Note when symptoms start and end</li>
        <li>Rate severity (1-10)</li>
        <li>Record how symptoms affect your daily life</li>
        <li>Observe if you have symptom-free days after your period</li>
      </ul>

      <h3>Key Questions</h3>
      <ul>
        <li>Can you function at work/school?</li>
        <li>Do symptoms cause significant relationship problems?</li>
        <li>Do you feel like a different person during this time?</li>
        <li>Do you have thoughts of harming yourself?</li>
      </ul>

      <h2>Getting Help</h2>
      <p>
        If you suspect PMDD:
      </p>
      <ul>
        <li>Track your symptoms for 2+ cycles</li>
        <li>See a gynecologist or psychiatrist</li>
        <li>Bring your symptom diary</li>
        <li>Discuss treatment options</li>
      </ul>

      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 mb-6">
        <p className="text-sm">
          <strong>Crisis support:</strong> If you're having thoughts of self-harm or suicide, 
          please reach out for help immediately. iCall: 9152987821 | Vandrevala: 1860-2662-345
        </p>
      </div>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> PMDD is treatable. You don't have to suffer through it. 
          Seeking help is a sign of strength, not weakness.
        </p>
      </div>
    </ArticleLayout>
  );
}
