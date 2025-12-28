import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "PCOS Basics: What You Need to Know", href: "/pcos/pcos-basics" },
  { title: "Understanding Insulin Resistance", href: "/pcos/insulin-resistance-simple" },
  { title: "Managing PCOS Long-Term", href: "/pcos/long-term-management" },
];

export default function AcneHairArticle() {
  return (
    <ArticleLayout
      title="PCOS, Acne & Hair Issues"
      description="Understanding and managing androgen-related symptoms."
      breadcrumbs={[
        { label: "PCOS / PCOD", href: "/pcos" },
        { label: "Acne & Hair" },
      ]}
      backLink={{ href: "/pcos", label: "PCOS / PCOD" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        Acne, excess facial/body hair, and scalp hair thinning are among the most 
        distressing PCOS symptoms. Here's what causes them and what can help.
      </p>

      <h2>Why These Symptoms Happen</h2>
      <p>
        These symptoms are caused by elevated androgens ("male hormones" like testosterone). 
        All women have some androgens, but in PCOS, levels are often higher than normal.
      </p>
      <p>
        High insulin also plays a role — it stimulates the ovaries to produce more androgens.
      </p>

      <h2>PCOS Acne</h2>
      <h3>Characteristics</h3>
      <ul>
        <li>Often appears on jawline, chin, and lower face</li>
        <li>Tends to be deeper, cystic acne</li>
        <li>Often flares before periods</li>
        <li>May not respond well to typical acne treatments</li>
      </ul>

      <h3>What Can Help</h3>
      <ul>
        <li><strong>Address insulin resistance:</strong> Often improves acne from within</li>
        <li><strong>Gentle skincare:</strong> Non-comedogenic products, don't over-wash</li>
        <li><strong>Diet:</strong> Reducing sugar and dairy may help some women</li>
        <li><strong>Dermatologist:</strong> May prescribe topical or oral treatments</li>
      </ul>

      <h2>Excess Hair (Hirsutism)</h2>
      <h3>Common Areas</h3>
      <ul>
        <li>Upper lip</li>
        <li>Chin and jawline</li>
        <li>Chest</li>
        <li>Abdomen</li>
        <li>Back</li>
      </ul>

      <h3>Management Options</h3>
      <ul>
        <li><strong>Address root cause:</strong> Lowering androgens through lifestyle or medication</li>
        <li><strong>Hair removal:</strong> Waxing, threading, shaving (doesn't make hair worse)</li>
        <li><strong>Laser hair removal:</strong> Can provide longer-term reduction</li>
        <li><strong>Prescription creams:</strong> Eflornithine can slow facial hair growth</li>
      </ul>

      <h2>Scalp Hair Thinning</h2>
      <p>
        This is "female pattern hair loss" — hair thins on top of the head while the 
        hairline usually stays intact.
      </p>

      <h3>What Can Help</h3>
      <ul>
        <li><strong>Address hormonal balance:</strong> Managing PCOS often helps</li>
        <li><strong>Check other factors:</strong> Iron, thyroid, vitamin D levels</li>
        <li><strong>Gentle hair care:</strong> Avoid tight hairstyles, heat damage</li>
        <li><strong>Dermatologist options:</strong> Minoxidil, other treatments</li>
      </ul>

      <h2>Important to Know</h2>
      <ul>
        <li>These symptoms take time to improve — often 3-6 months minimum</li>
        <li>Hair already present won't disappear but new growth may slow</li>
        <li>Addressing insulin resistance is often the most impactful first step</li>
        <li>Don't suffer in silence — dermatologists can help</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Be patient:</strong> Androgen-related symptoms are slow to change. 
          Focus on the root causes (insulin, hormones) and give treatments time to work.
        </p>
      </div>
    </ArticleLayout>
  );
}
