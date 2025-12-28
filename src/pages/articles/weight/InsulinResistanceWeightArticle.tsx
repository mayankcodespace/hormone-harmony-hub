import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Hormonal Weight Gain", href: "/hormonal-weight/why-weight-changes" },
  { title: "Sustainable Weight Management", href: "/hormonal-weight/sustainable-approach" },
  { title: "Indian Diet for Blood Sugar Balance", href: "/hormonal-weight/indian-diet" },
];

export default function InsulinResistanceWeightArticle() {
  return (
    <ArticleLayout
      title="Insulin Resistance Explained Simply"
      description="How insulin affects weight and what you can do about it."
      breadcrumbs={[
        { label: "Hormonal Weight", href: "/hormonal-weight" },
        { label: "Insulin Resistance" },
      ]}
      backLink={{ href: "/hormonal-weight", label: "Hormonal Weight" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Insulin resistance is one of the most common but least talked about factors 
        in stubborn weight gain. Here's what you need to know.
      </p>

      <h2>What is Insulin?</h2>
      <p>
        Insulin is a hormone that helps move sugar from your blood into your cells for 
        energy. It's like a key that unlocks your cells.
      </p>

      <h2>What is Insulin Resistance?</h2>
      <p>
        When you're insulin resistant, your cells don't respond well to insulin. The 
        "key" doesn't work properly. Your body compensates by producing more insulin.
      </p>

      <h2>How This Causes Weight Gain</h2>
      <ul>
        <li><strong>Insulin is a storage hormone:</strong> High levels signal your body to store fat</li>
        <li><strong>Fat burning is blocked:</strong> When insulin is high, your body can't access stored fat</li>
        <li><strong>Belly fat preference:</strong> Insulin resistance promotes abdominal fat storage</li>
        <li><strong>Increased hunger:</strong> Blood sugar swings create cravings</li>
        <li><strong>Lower energy:</strong> Cells aren't getting fuel efficiently</li>
      </ul>

      <h2>Signs of Insulin Resistance</h2>
      <ul>
        <li>Weight concentrated around the belly</li>
        <li>Intense sugar and carb cravings</li>
        <li>Energy crashes, especially after meals</li>
        <li>Dark patches on skin (neck, armpits)</li>
        <li>Difficulty losing weight despite trying</li>
        <li>Feeling hungry soon after eating</li>
      </ul>

      <h2>What Helps Insulin Resistance?</h2>

      <h3>Dietary Changes</h3>
      <ul>
        <li>Protein with every meal</li>
        <li>Fiber-rich foods (vegetables, whole grains, legumes)</li>
        <li>Reduce refined carbs and sugar</li>
        <li>Don't skip meals (causes compensatory spikes)</li>
        <li>Eat carbs last (after protein and vegetables)</li>
      </ul>

      <h3>Movement</h3>
      <ul>
        <li>Strength training improves insulin sensitivity</li>
        <li>Walking after meals helps glucose uptake</li>
        <li>Regular movement matters more than intense exercise</li>
      </ul>

      <h3>Lifestyle</h3>
      <ul>
        <li>Prioritize sleep (poor sleep worsens insulin resistance)</li>
        <li>Manage stress (cortisol affects insulin)</li>
        <li>Avoid long periods of sitting</li>
      </ul>

      <h2>Testing for Insulin Resistance</h2>
      <p>Ask your doctor about:</p>
      <ul>
        <li>Fasting insulin</li>
        <li>Fasting glucose</li>
        <li>HbA1c</li>
        <li>HOMA-IR calculation</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Important:</strong> Improving insulin sensitivity takes time — typically 
          3-6 months of consistent effort. Be patient and focus on sustainable changes.
        </p>
      </div>
    </ArticleLayout>
  );
}
