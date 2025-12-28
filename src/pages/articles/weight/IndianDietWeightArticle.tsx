import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Insulin Resistance Explained Simply", href: "/hormonal-weight/insulin-resistance" },
  { title: "Sustainable Weight Management", href: "/hormonal-weight/sustainable-approach" },
  { title: "Exercise for Hormonal Weight", href: "/hormonal-weight/exercise-guide" },
];

export default function IndianDietWeightArticle() {
  return (
    <ArticleLayout
      title="Indian Diet for Blood Sugar Balance"
      description="Eating for metabolic health with Indian foods."
      breadcrumbs={[
        { label: "Hormonal Weight", href: "/hormonal-weight" },
        { label: "Indian Diet" },
      ]}
      backLink={{ href: "/hormonal-weight", label: "Hormonal Weight" }}
      relatedArticles={relatedArticles}
      lastUpdated="December 2024"
    >
      <p className="text-muted-foreground text-lg">
        You don't need to abandon Indian food to manage hormonal weight. 
        Here's how to eat for blood sugar balance while enjoying familiar meals.
      </p>

      <h2>The Core Principle</h2>
      <p>
        Focus on blood sugar stability, not extreme restriction. This means:
      </p>
      <ul>
        <li>Protein and fiber at every meal</li>
        <li>Reducing (not eliminating) refined carbs</li>
        <li>Smart meal sequencing</li>
        <li>Regular, balanced meals (no skipping)</li>
      </ul>

      <h2>The Plate Method for Indian Meals</h2>
      <ul>
        <li><strong>½ plate:</strong> Non-starchy vegetables (sabzi, salad)</li>
        <li><strong>¼ plate:</strong> Protein (dal, paneer, eggs, chicken, fish)</li>
        <li><strong>¼ plate:</strong> Complex carbs (roti, brown rice, millets)</li>
      </ul>

      <h2>Meal Sequencing for Blood Sugar</h2>
      <p>The order you eat can reduce blood sugar spikes:</p>
      <ol>
        <li>Start with vegetables/salad</li>
        <li>Then protein (dal, paneer, chicken)</li>
        <li>Carbs last (roti, rice)</li>
      </ol>

      <h2>Indian Foods to Focus On</h2>
      <ul>
        <li><strong>Proteins:</strong> Dal (all varieties), chana, rajma, paneer, eggs, chicken, fish</li>
        <li><strong>Vegetables:</strong> Palak, bhindi, lauki, karela, cauliflower, beans, tomatoes</li>
        <li><strong>Whole grains:</strong> Jowar, bajra, ragi rotis; brown rice; whole wheat</li>
        <li><strong>Healthy fats:</strong> Nuts, seeds, moderate ghee, coconut</li>
        <li><strong>Dairy:</strong> Curd, chaas, paneer</li>
      </ul>

      <h2>Foods to Limit</h2>
      <ul>
        <li>White rice in large quantities (have smaller portions)</li>
        <li>Maida products (white bread, naan, biscuits)</li>
        <li>Sugar and mithai</li>
        <li>Sweetened drinks (cola, packaged juice)</li>
        <li>Fried snacks as daily staples</li>
        <li>Excessive oil in cooking</li>
      </ul>

      <h2>Sample Day</h2>
      
      <h3>Breakfast</h3>
      <p>Vegetable upma with nuts + curd + tea (less sugar)</p>
      <p>OR: Besan chilla with vegetables + mint chutney</p>
      
      <h3>Lunch</h3>
      <p>Salad first → Dal + sabzi + 2 roti + curd</p>
      
      <h3>Snack</h3>
      <p>Handful of nuts OR roasted chana OR fruit with nuts</p>
      
      <h3>Dinner</h3>
      <p>Grilled paneer/chicken + sabzi + 1 roti or small rice portion</p>

      <h2>Practical Tips</h2>
      <ul>
        <li>Don't skip breakfast — sets your blood sugar tone</li>
        <li>Keep dinner lighter and earlier</li>
        <li>Walk 10-15 minutes after main meals</li>
        <li>Stay hydrated with water, not sugary drinks</li>
        <li>Prep meals ahead to avoid reaching for packaged foods</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Remember:</strong> Small, sustainable changes work better than extreme 
          diets. Focus on what you can add (more protein, more vegetables) rather than 
          just what to remove.
        </p>
      </div>
    </ArticleLayout>
  );
}
