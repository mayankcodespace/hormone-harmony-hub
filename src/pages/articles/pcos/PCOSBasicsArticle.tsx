import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Insulin Resistance", href: "/pcos/insulin-resistance-simple" },
  { title: "PCOS, Acne & Hair Issues", href: "/pcos/pcos-acne-hair" },
  { title: "Safe Weight Management with PCOS", href: "/pcos/pcos-weight-loss-safe" },
];

export default function PCOSBasicsArticle() {
  return (
    <ArticleLayout
      title="PCOS Basics: What You Need to Know"
      description="A clear, simple guide to understanding polycystic ovary syndrome."
      breadcrumbs={[
        { label: "PCOS / PCOD", href: "/pcos" },
        { label: "PCOS Basics" },
      ]}
      backLink={{ href: "/pcos", label: "PCOS / PCOD" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        PCOS (Polycystic Ovary Syndrome) affects up to 1 in 5 Indian women. Despite being common, 
        it's often misunderstood. Let's break down what PCOS actually is.
      </p>

      <h2>What is PCOS?</h2>
      <p>
        PCOS is a hormonal condition that affects the ovaries and metabolism. The name is 
        misleading — you don't necessarily have "cysts." The "polycystic" appearance on 
        ultrasound is actually multiple small follicles (immature eggs).
      </p>

      <h2>The Three Key Features</h2>
      <p>
        PCOS is diagnosed when you have at least 2 of these 3 features (Rotterdam criteria):
      </p>
      <ul>
        <li><strong>Irregular periods:</strong> Cycles longer than 35 days, fewer than 8 periods/year, or absent periods</li>
        <li><strong>High androgens:</strong> Elevated "male hormones" — shown by acne, excess hair, or blood tests</li>
        <li><strong>Polycystic ovaries:</strong> 12+ follicles on ultrasound (though this alone doesn't mean PCOS)</li>
      </ul>

      <h2>What Causes PCOS?</h2>
      <p>
        The exact cause isn't fully understood, but key factors include:
      </p>
      <ul>
        <li><strong>Genetics:</strong> PCOS often runs in families</li>
        <li><strong>Insulin resistance:</strong> Present in 70-80% of women with PCOS</li>
        <li><strong>Inflammation:</strong> Low-grade chronic inflammation</li>
        <li><strong>Hormonal imbalances:</strong> Higher insulin leads to higher androgens</li>
      </ul>

      <h2>Common Symptoms</h2>
      <ul>
        <li>Irregular or absent periods</li>
        <li>Acne (especially jawline/chin)</li>
        <li>Excess facial/body hair (hirsutism)</li>
        <li>Hair thinning on scalp</li>
        <li>Weight gain, especially around the belly</li>
        <li>Difficulty losing weight</li>
        <li>Dark skin patches (acanthosis nigricans)</li>
        <li>Skin tags</li>
      </ul>

      <h2>PCOS vs PCOD — What's the Difference?</h2>
      <p>
        In India, you'll hear both terms. PCOS (Polycystic Ovary Syndrome) is the medically 
        accurate term. PCOD (Polycystic Ovarian Disease) is an older term sometimes used 
        for milder presentations. They refer to the same condition.
      </p>

      <h2>Can PCOS Be Cured?</h2>
      <p>
        PCOS is a chronic condition — there's no permanent "cure." However, symptoms can be 
        managed very effectively through lifestyle changes and, when needed, medication. 
        Many women see significant improvement with the right approach.
      </p>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> PCOS is common, manageable, and not your fault. 
          Getting a proper diagnosis is the first step. Work with a gynecologist or 
          endocrinologist who understands PCOS.
        </p>
      </div>
    </ArticleLayout>
  );
}
