import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Understanding Insulin Resistance", href: "/pcos/insulin-resistance-simple" },
  { title: "Safe Weight Management with PCOS", href: "/pcos/pcos-weight-loss-safe" },
  { title: "Supplements for PCOS", href: "/pcos/supplements-review" },
];

export default function IndianDietArticle() {
  return (
    <ArticleLayout
      title="PCOS Diet Guide for Indians"
      description="Practical, Indian food-focused eating guidance for PCOS."
      breadcrumbs={[
        { label: "PCOS / PCOD", href: "/pcos" },
        { label: "Indian Diet Guide" },
      ]}
      backLink={{ href: "/pcos", label: "PCOS / PCOD" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        You don't need to give up Indian food for PCOS. Here's how to eat in a 
        blood sugar-friendly way while enjoying familiar foods.
      </p>

      <h2>The Core Principle</h2>
      <p>
        Focus on blood sugar stability, not extreme restriction. This means:
      </p>
      <ul>
        <li>Protein and fiber with every meal</li>
        <li>Reducing (not eliminating) refined carbs</li>
        <li>Not skipping meals</li>
        <li>Eating in a balanced way you can sustain</li>
      </ul>

      <h2>Building a PCOS-Friendly Indian Meal</h2>

      <h3>The Plate Method</h3>
      <ul>
        <li><strong>½ plate:</strong> Vegetables (sabzi, salad)</li>
        <li><strong>¼ plate:</strong> Protein (dal, paneer, eggs, chicken, fish)</li>
        <li><strong>¼ plate:</strong> Complex carbs (roti, brown rice, millets)</li>
      </ul>

      <h3>Meal Order Matters</h3>
      <p>
        Eating in this order can help reduce blood sugar spikes:
      </p>
      <ol>
        <li>Start with vegetables/salad</li>
        <li>Then protein (dal, paneer, etc.)</li>
        <li>Then carbs (roti, rice)</li>
      </ol>

      <h2>Foods to Include</h2>
      <ul>
        <li><strong>Proteins:</strong> Dal, chana, rajma, paneer, eggs, chicken, fish</li>
        <li><strong>Vegetables:</strong> All non-starchy vegetables — palak, bhindi, lauki, karela, etc.</li>
        <li><strong>Whole grains:</strong> Jowar, bajra, ragi, oats, whole wheat</li>
        <li><strong>Healthy fats:</strong> Nuts, seeds, moderate ghee, coconut</li>
        <li><strong>Dairy:</strong> Curd, chaas, paneer (in moderation)</li>
      </ul>

      <h2>Foods to Limit</h2>
      <ul>
        <li><strong>Refined carbs:</strong> White rice in large portions, maida products</li>
        <li><strong>Sugar:</strong> Mithai, sweetened chai, packaged foods</li>
        <li><strong>Sugary drinks:</strong> Cold drinks, packaged juices</li>
        <li><strong>Fried snacks:</strong> Samosas, pakoras (occasionally OK)</li>
        <li><strong>Processed foods:</strong> High in hidden sugars and bad fats</li>
      </ul>

      <h2>Sample Day</h2>
      
      <h3>Breakfast</h3>
      <p>Vegetable poha with peanuts + boiled egg + chai (less sugar)</p>
      
      <h3>Lunch</h3>
      <p>2 roti + dal + sabzi + salad + curd</p>
      
      <h3>Snack</h3>
      <p>Handful of nuts + fruit OR sprouts chaat</p>
      
      <h3>Dinner</h3>
      <p>Grilled paneer/chicken + sabzi + 1 roti or small portion brown rice</p>

      <h2>Practical Tips</h2>
      <ul>
        <li>Don't skip breakfast — it sets blood sugar tone for the day</li>
        <li>Keep dinner lighter and earlier</li>
        <li>Take a 10-minute walk after meals</li>
        <li>Stay hydrated with water, not sugary drinks</li>
        <li>Plan ahead to avoid reaching for packaged snacks</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> Perfection isn't the goal — consistency is. 
          Small, sustainable changes work better than extreme diets you can't maintain.
        </p>
      </div>
    </ArticleLayout>
  );
}
