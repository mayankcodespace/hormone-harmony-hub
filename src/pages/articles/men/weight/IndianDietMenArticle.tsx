import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Sustainable Fat Loss", href: "/men/weight/sustainable-approach" },
  { title: "Insulin Resistance Explained", href: "/men/weight/insulin-resistance" },
  { title: "Exercise for Fat Loss", href: "/men/weight/exercise-guide" },
];

export default function IndianDietMenArticle() {
  return (
    <ArticleLayout
      title="Indian Diet for Weight Loss"
      description="Practical nutrition guidance with Indian food examples for sustainable fat loss."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Weight & Metabolism", href: "/men/weight" },
        { label: "Indian Diet Guide" },
      ]}
      backLink={{ href: "/men/weight", label: "Weight & Metabolism" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        Indian food is delicious and nutritious, but traditional eating patterns can be carb-heavy 
        and protein-light. Here's how to modify your diet for fat loss while keeping Indian flavors.
      </p>

      <h2>The Protein Problem</h2>
      <p>
        The biggest issue with typical Indian diets:
      </p>
      <ul>
        <li>Traditional meals are 60-70% carbohydrates</li>
        <li>Protein is often inadequate, especially for vegetarians</li>
        <li>Rice and roti dominate, with small amounts of dal/sabzi</li>
        <li>This promotes blood sugar spikes and hunger</li>
      </ul>

      <h2>The Protein-First Approach</h2>
      <p>
        Make protein the center of your meals:
      </p>
      
      <h3>Non-Vegetarian Options</h3>
      <ul>
        <li><strong>Eggs:</strong> Cheap, convenient, versatile (anda bhurji, omelette, boiled)</li>
        <li><strong>Chicken:</strong> Lean protein (tandoori, grilled, curry with less oil)</li>
        <li><strong>Fish:</strong> Excellent protein and omega-3s</li>
        <li><strong>Mutton:</strong> Good but fattier — eat in moderation</li>
      </ul>

      <h3>Vegetarian Options</h3>
      <ul>
        <li><strong>Paneer:</strong> High protein, but also high fat — moderate portions</li>
        <li><strong>Dal:</strong> Good protein but needs larger portions (1.5-2 bowls)</li>
        <li><strong>Chole/Rajma:</strong> Good protein and fiber</li>
        <li><strong>Soya chunks:</strong> Very high protein, economical</li>
        <li><strong>Greek yogurt/curd:</strong> Higher protein than regular curd</li>
        <li><strong>Tofu:</strong> Complete protein, versatile</li>
        <li><strong>Whey protein:</strong> Convenient supplement</li>
      </ul>

      <h2>Sample Meal Structure</h2>
      
      <h3>Breakfast</h3>
      <ul>
        <li>3-4 eggs (anda bhurji or omelette) with vegetables</li>
        <li>OR: Greek yogurt/curd with nuts and seeds</li>
        <li>OR: Besan chilla (2-3) with curd</li>
        <li>Optional: 1 roti or small portion of poha</li>
      </ul>

      <h3>Lunch</h3>
      <ul>
        <li>Chicken/fish/paneer as the main dish (palm-sized portion)</li>
        <li>Large portion of sabzi (vegetables)</li>
        <li>1-2 small roti or half cup rice</li>
        <li>Dal (1 bowl)</li>
        <li>Salad/raita</li>
      </ul>

      <h3>Dinner</h3>
      <ul>
        <li>Protein-focused (similar to lunch)</li>
        <li>Reduce carbs if sedentary in the evening</li>
        <li>More vegetables, less roti/rice</li>
      </ul>

      <h3>Snacks</h3>
      <ul>
        <li>Roasted chana (protein + fiber)</li>
        <li>Paneer cubes or grilled chicken</li>
        <li>Greek yogurt</li>
        <li>Boiled eggs</li>
        <li>Nuts (handful — calorie-dense)</li>
      </ul>

      <h2>What to Limit</h2>
      <ul>
        <li><strong>Sugary chai:</strong> Switch to less sugar or unsweetened</li>
        <li><strong>Fried snacks:</strong> Samosa, pakora, bhujia — calorie bombs</li>
        <li><strong>Sweet treats:</strong> Mithai, biscuits — save for occasions</li>
        <li><strong>Excessive ghee/oil:</strong> Use sparingly</li>
        <li><strong>Large portions of rice/roti:</strong> Reduce, don't eliminate</li>
        <li><strong>Fruit juice:</strong> Eat whole fruit instead</li>
        <li><strong>Alcohol:</strong> Major source of empty calories</li>
      </ul>

      <h2>Eating Out Tips</h2>
      <ul>
        <li>Order tandoori/grilled items over fried</li>
        <li>Ask for less oil in preparation</li>
        <li>Order extra salad</li>
        <li>Skip the naan, have 1 roti if needed</li>
        <li>Avoid creamy gravies (makhani, korma)</li>
        <li>Skip dessert or share one</li>
      </ul>

      <h2>Budget-Friendly Protein</h2>
      <p>
        You don't need expensive food to get enough protein:
      </p>
      <ul>
        <li><strong>Eggs:</strong> Cheapest complete protein</li>
        <li><strong>Soya chunks:</strong> Extremely economical</li>
        <li><strong>Dal and chole:</strong> Affordable and nutritious</li>
        <li><strong>Curd/buttermilk:</strong> Inexpensive dairy protein</li>
        <li><strong>Chicken (with bone):</strong> Cheaper than boneless</li>
      </ul>

      <h2>The Post-Meal Walk</h2>
      <p>
        A traditional Indian habit that's scientifically validated:
      </p>
      <ul>
        <li>10-15 minute walk after meals improves blood sugar</li>
        <li>"100 steps after eating" is wise advice</li>
        <li>Especially helpful after carb-heavy meals</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> You don't need to abandon Indian food — just restructure your 
          plate. Make protein the star, vegetables the supporting cast, and carbs a smaller role. 
          This simple shift can transform your results.
        </p>
      </div>
    </ArticleLayout>
  );
}