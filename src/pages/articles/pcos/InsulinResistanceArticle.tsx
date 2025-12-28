import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "PCOS Basics: What You Need to Know", href: "/pcos/pcos-basics" },
  { title: "Safe Weight Management with PCOS", href: "/pcos/pcos-weight-loss-safe" },
  { title: "PCOS Diet Guide for Indians", href: "/pcos/indian-diet-guide" },
];

export default function InsulinResistanceArticle() {
  return (
    <ArticleLayout
      title="Understanding Insulin Resistance"
      description="How insulin affects PCOS and what you can do about it."
      breadcrumbs={[
        { label: "PCOS / PCOD", href: "/pcos" },
        { label: "Insulin Resistance" },
      ]}
      backLink={{ href: "/pcos", label: "PCOS / PCOD" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Insulin resistance is present in 70-80% of women with PCOS. Understanding this 
        connection is key to managing your symptoms effectively.
      </p>

      <h2>What is Insulin?</h2>
      <p>
        Insulin is a hormone made by your pancreas. Its main job is to help glucose (sugar) 
        from your blood enter your cells for energy. Think of it as a "key" that unlocks 
        your cells.
      </p>

      <h2>What is Insulin Resistance?</h2>
      <p>
        When you have insulin resistance, your cells don't respond well to insulin. The 
        "key" doesn't work as well. Your body compensates by making more insulin — leading 
        to higher insulin levels in your blood.
      </p>

      <h2>How Does This Affect PCOS?</h2>
      <p>
        High insulin levels cause problems:
      </p>
      <ul>
        <li><strong>More androgens:</strong> Insulin stimulates the ovaries to produce more "male hormones"</li>
        <li><strong>Weight gain:</strong> Insulin is a storage hormone — high levels promote fat storage</li>
        <li><strong>Harder to lose weight:</strong> Your body holds onto fat more stubbornly</li>
        <li><strong>Irregular ovulation:</strong> Hormonal imbalance disrupts your cycle</li>
        <li><strong>Cravings:</strong> Blood sugar swings cause intense hunger and carb cravings</li>
      </ul>

      <h2>Signs You Might Have Insulin Resistance</h2>
      <ul>
        <li>Weight concentrated around your belly</li>
        <li>Intense sugar/carb cravings</li>
        <li>Fatigue after meals</li>
        <li>Dark patches on skin (neck, armpits, groin)</li>
        <li>Skin tags</li>
        <li>Difficulty losing weight despite effort</li>
        <li>Feeling hungry soon after eating</li>
      </ul>

      <h2>Testing for Insulin Resistance</h2>
      <p>
        Common tests include:
      </p>
      <ul>
        <li><strong>Fasting insulin:</strong> Measures insulin when you haven't eaten</li>
        <li><strong>Fasting glucose:</strong> Blood sugar after fasting</li>
        <li><strong>HOMA-IR:</strong> Calculated from fasting insulin and glucose</li>
        <li><strong>HbA1c:</strong> Average blood sugar over 3 months</li>
      </ul>

      <h2>What Helps Insulin Resistance?</h2>
      
      <h3>Lifestyle Changes (First Line)</h3>
      <ul>
        <li><strong>Movement:</strong> Especially strength training and walking after meals</li>
        <li><strong>Protein with meals:</strong> Helps stabilize blood sugar</li>
        <li><strong>Fiber-rich foods:</strong> Slows sugar absorption</li>
        <li><strong>Reduce refined carbs:</strong> White rice, maida, sugar</li>
        <li><strong>Sleep:</strong> Poor sleep worsens insulin resistance</li>
        <li><strong>Stress management:</strong> Cortisol affects insulin</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> Improving insulin sensitivity takes time — usually 
          3-6 months of consistent effort. Focus on sustainable changes, not quick fixes.
        </p>
      </div>
    </ArticleLayout>
  );
}
