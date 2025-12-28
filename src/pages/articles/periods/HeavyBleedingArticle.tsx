import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "What Causes Severe Cramps?", href: "/periods/cramps-what-helps" },
  { title: "Heavy Periods: What's Normal?", href: "/periods/heavy-bleeding" },
  { title: "Understanding Your Cycle Phases", href: "/periods/cycle-phases" },
];

export default function HeavyBleedingArticle() {
  return (
    <ArticleLayout
      title="Heavy Periods: What's Normal?"
      description="Understanding menorrhagia — when heavy bleeding needs medical attention."
      breadcrumbs={[
        { label: "Periods & Cycle", href: "/periods" },
        { label: "Heavy Bleeding" },
      ]}
      backLink={{ href: "/periods", label: "Periods & Cycle" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        "Heavy" is subjective — what feels heavy to one person may be normal for another. 
        But there are objective signs that your bleeding may need medical evaluation.
      </p>

      <h2>What's Considered Normal?</h2>
      <ul>
        <li>Average total blood loss: 30-40ml (about 2-3 tablespoons)</li>
        <li>Upper normal: Up to 80ml total</li>
        <li>Period lasting 2-7 days</li>
        <li>Manageable with regular pad/tampon changes</li>
      </ul>

      <h2>Signs Your Period May Be Too Heavy</h2>
      <ul>
        <li>Soaking through a pad or tampon every hour for several consecutive hours</li>
        <li>Needing to use double protection (pad + tampon)</li>
        <li>Passing blood clots larger than a ₹10 coin</li>
        <li>Bleeding for more than 7 days</li>
        <li>Flooding through to clothes/bedding</li>
        <li>Restricting activities because of bleeding</li>
        <li>Symptoms of anemia: fatigue, shortness of breath, pale skin</li>
      </ul>

      <h2>Common Causes of Heavy Periods</h2>
      
      <h3>Hormonal</h3>
      <ul>
        <li><strong>Anovulation:</strong> Not ovulating leads to thicker lining buildup</li>
        <li><strong>PCOS:</strong> Irregular ovulation can cause heavy periods</li>
        <li><strong>Thyroid issues:</strong> Both hypo and hyperthyroidism</li>
        <li><strong>Perimenopause:</strong> Hormonal fluctuations in 40s</li>
      </ul>

      <h3>Structural</h3>
      <ul>
        <li><strong>Fibroids:</strong> Non-cancerous growths in uterus</li>
        <li><strong>Polyps:</strong> Small growths on uterine lining</li>
        <li><strong>Adenomyosis:</strong> Lining grows into muscle wall</li>
      </ul>

      <h3>Other</h3>
      <ul>
        <li><strong>IUD side effect:</strong> Copper IUD can increase bleeding</li>
        <li><strong>Bleeding disorders:</strong> Less common but possible</li>
        <li><strong>Medications:</strong> Blood thinners, some supplements</li>
      </ul>

      <h2>When to See a Doctor</h2>
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
        <p className="font-medium mb-2">Seek evaluation if:</p>
        <ul className="text-sm space-y-1">
          <li>• Soaking through protection every hour for several hours</li>
          <li>• Periods lasting more than 7 days regularly</li>
          <li>• Large clots (bigger than ₹10 coin)</li>
          <li>• Feeling weak, tired, or short of breath</li>
          <li>• Bleeding between periods</li>
          <li>• Periods getting progressively heavier</li>
        </ul>
      </div>

      <h2>Managing Heavy Periods</h2>
      <ul>
        <li><strong>Iron-rich foods:</strong> Combat potential anemia</li>
        <li><strong>Hydration:</strong> Replace fluids lost</li>
        <li><strong>Period products:</strong> Consider menstrual cups (hold more), period underwear</li>
        <li><strong>Track carefully:</strong> Note number of products used, clot sizes</li>
        <li><strong>See doctor:</strong> Many treatments available once cause is identified</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> Heavy periods are not something you just have to live with. 
          Many causes are treatable. Track your symptoms and see a gynecologist.
        </p>
      </div>
    </ArticleLayout>
  );
}
