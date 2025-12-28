import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Insulin Resistance", href: "/pcos/insulin-resistance-simple" },
  { title: "PCOS Diet Guide for Indians", href: "/pcos/indian-diet-guide" },
  { title: "Managing PCOS Long-Term", href: "/pcos/long-term-management" },
];

export default function WeightLossArticle() {
  return (
    <ArticleLayout
      title="Safe Weight Management with PCOS"
      description="A sustainable, non-extreme approach to managing weight with PCOS."
      breadcrumbs={[
        { label: "PCOS / PCOD", href: "/pcos" },
        { label: "Weight Management" },
      ]}
      backLink={{ href: "/pcos", label: "PCOS / PCOD" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Weight management with PCOS can feel frustrating. Your body genuinely works 
        differently. Here's a sustainable, evidence-based approach.
      </p>

      <h2>Why Weight Loss is Harder with PCOS</h2>
      <ul>
        <li><strong>Insulin resistance:</strong> High insulin promotes fat storage and blocks fat burning</li>
        <li><strong>Slower metabolism:</strong> Studies show women with PCOS may burn fewer calories at rest</li>
        <li><strong>Increased hunger:</strong> Hormonal imbalances affect appetite signals</li>
        <li><strong>Cravings:</strong> Blood sugar swings drive carb cravings</li>
      </ul>
      <p>
        This isn't about willpower — it's biology. And the good news is, you can work with 
        your biology once you understand it.
      </p>

      <h2>The PCOS-Friendly Approach</h2>

      <h3>1. Focus on Insulin, Not Just Calories</h3>
      <p>
        Traditional "eat less, move more" often doesn't work for PCOS. Instead:
      </p>
      <ul>
        <li>Prioritize blood sugar stability</li>
        <li>Eat protein with every meal</li>
        <li>Choose complex carbs over refined</li>
        <li>Don't skip meals (causes insulin spikes later)</li>
      </ul>

      <h3>2. Strength Training Over Cardio</h3>
      <p>
        Muscle is metabolically active — it helps with insulin sensitivity. Prioritize:
      </p>
      <ul>
        <li>Strength training 2-3x per week</li>
        <li>Walking (especially after meals)</li>
        <li>Avoid excessive cardio (can raise cortisol)</li>
      </ul>

      <h3>3. Sleep is Non-Negotiable</h3>
      <p>
        Poor sleep worsens insulin resistance, increases hunger hormones, and makes 
        cravings worse. Aim for 7-8 hours.
      </p>

      <h3>4. Manage Stress</h3>
      <p>
        High cortisol promotes belly fat storage and worsens insulin resistance. 
        Find stress management that works for you.
      </p>

      <h2>What NOT to Do</h2>
      <ul>
        <li><strong>Very low calorie diets:</strong> Can worsen hormonal balance</li>
        <li><strong>Extreme keto:</strong> May affect thyroid in some women</li>
        <li><strong>Over-exercising:</strong> Raises cortisol, can backfire</li>
        <li><strong>Skipping meals:</strong> Leads to bigger insulin spikes later</li>
      </ul>

      <h2>Realistic Expectations</h2>
      <ul>
        <li>Weight loss may be slower than for women without PCOS</li>
        <li>Even 5-10% weight loss can significantly improve symptoms</li>
        <li>Focus on how you feel, not just the scale</li>
        <li>Consistency matters more than perfection</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key insight:</strong> With PCOS, the goal isn't just weight loss — it's 
          metabolic health. Sometimes the scale doesn't move but your symptoms improve 
          because insulin and hormones are balancing out.
        </p>
      </div>
    </ArticleLayout>
  );
}
