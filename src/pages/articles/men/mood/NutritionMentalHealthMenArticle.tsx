import { ArticleLayout } from "@/components/shared/ArticleLayout";

const relatedArticles = [
  { title: "Stress Management Techniques", href: "/men/mood/stress-management" },
  { title: "Indian Diet for Weight Loss", href: "/men/weight/indian-diet" },
  { title: "Sleep Deprivation Effects", href: "/men/mood/sleep-deprivation" },
];

export default function NutritionMentalHealthMenArticle() {
  return (
    <ArticleLayout
      title="Nutrition for Mental Health"
      description="Foods and nutrients that support brain function, mood, and stress resilience."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Mood, Stress & Sleep", href: "/men/mood" },
        { label: "Nutrition for Mental Health" },
      ]}
      backLink={{ href: "/men/mood", label: "Mood, Stress & Sleep" }}
      relatedArticles={relatedArticles}
      lastUpdated="January 2025"
    >
      <p className="text-muted-foreground text-lg">
        What you eat directly affects brain function, neurotransmitter production, and stress 
        resilience. Nutrition won't replace therapy for serious conditions, but it's a foundation 
        that supports mental wellbeing.
      </p>

      <h2>How Food Affects Mood</h2>
      <p>
        The connection is direct:
      </p>
      <ul>
        <li>Neurotransmitters (serotonin, dopamine) are made from food</li>
        <li>Blood sugar affects energy and mood stability</li>
        <li>Inflammation from poor diet affects brain function</li>
        <li>Gut bacteria influence mood (gut-brain axis)</li>
        <li>Nutrient deficiencies can mimic depression and anxiety</li>
      </ul>

      <h2>Key Nutrients for Mental Health</h2>
      
      <h3>Omega-3 Fatty Acids</h3>
      <ul>
        <li>Critical for brain structure and function</li>
        <li>Anti-inflammatory effects</li>
        <li>Linked to lower depression rates</li>
        <li><strong>Sources:</strong> Fish (salmon, mackerel), walnuts, flaxseeds</li>
        <li>Supplementation may help if not eating fish regularly</li>
      </ul>

      <h3>B Vitamins</h3>
      <ul>
        <li>Essential for neurotransmitter production</li>
        <li>B6, B12, folate especially important</li>
        <li>Depleted by stress and alcohol</li>
        <li><strong>Sources:</strong> Meat, eggs, legumes, leafy greens</li>
        <li>Vegetarians should consider B12 supplementation</li>
      </ul>

      <h3>Vitamin D</h3>
      <ul>
        <li>Affects serotonin production</li>
        <li>Deficiency linked to depression</li>
        <li>Most people are deficient (especially in urban areas)</li>
        <li><strong>Sources:</strong> Sunlight, fatty fish, fortified foods</li>
        <li>Testing and supplementation often needed</li>
      </ul>

      <h3>Magnesium</h3>
      <ul>
        <li>Involved in stress response and sleep</li>
        <li>Often depleted by stress</li>
        <li>Calming effect on nervous system</li>
        <li><strong>Sources:</strong> Nuts, seeds, leafy greens, dark chocolate</li>
        <li>Supplementation often helpful</li>
      </ul>

      <h3>Zinc</h3>
      <ul>
        <li>Important for neurotransmitter function</li>
        <li>Deficiency associated with depression</li>
        <li><strong>Sources:</strong> Meat, shellfish, pumpkin seeds, legumes</li>
      </ul>

      <h2>Blood Sugar and Mood</h2>
      <p>
        Blood sugar swings directly affect mood:
      </p>
      <ul>
        <li>Spikes and crashes cause irritability and anxiety</li>
        <li>Reactive hypoglycemia can mimic panic attacks</li>
        <li>Stable blood sugar = stable mood</li>
      </ul>
      
      <h3>How to Stabilize Blood Sugar</h3>
      <ul>
        <li>Protein at every meal</li>
        <li>Fiber with carbohydrates</li>
        <li>Avoid refined sugars and processed carbs</li>
        <li>Don't skip meals</li>
        <li>Post-meal walks help</li>
      </ul>

      <h2>Gut Health and Mood</h2>
      <p>
        The gut-brain connection is powerful:
      </p>
      <ul>
        <li>Most serotonin is produced in the gut</li>
        <li>Gut bacteria influence mood and anxiety</li>
        <li>Poor gut health = poor mental health</li>
      </ul>
      
      <h3>Supporting Gut Health</h3>
      <ul>
        <li><strong>Probiotics:</strong> Yogurt, fermented foods</li>
        <li><strong>Prebiotics:</strong> Fiber-rich foods (vegetables, legumes)</li>
        <li><strong>Limit:</strong> Processed foods, excess sugar, artificial sweeteners</li>
      </ul>

      <h2>Foods to Emphasize</h2>
      <ul>
        <li><strong>Fatty fish:</strong> 2-3 times per week</li>
        <li><strong>Leafy greens:</strong> Daily</li>
        <li><strong>Nuts and seeds:</strong> Especially walnuts</li>
        <li><strong>Eggs:</strong> Complete protein with nutrients</li>
        <li><strong>Legumes:</strong> Fiber, protein, B vitamins</li>
        <li><strong>Fermented foods:</strong> For gut health</li>
        <li><strong>Berries:</strong> Antioxidants</li>
      </ul>

      <h2>Foods to Limit</h2>
      <ul>
        <li><strong>Processed foods:</strong> Inflammatory, nutrient-poor</li>
        <li><strong>Refined sugar:</strong> Blood sugar crashes, inflammation</li>
        <li><strong>Excess caffeine:</strong> Can worsen anxiety</li>
        <li><strong>Alcohol:</strong> Depressant, disrupts sleep, depletes nutrients</li>
        <li><strong>Trans fats:</strong> Inflammatory</li>
      </ul>

      <h2>Practical Tips</h2>
      <ul>
        <li>Start with breakfast protein to stabilize morning energy</li>
        <li>Keep healthy snacks available</li>
        <li>Meal prep to avoid poor choices when stressed</li>
        <li>Limit eating when highly stressed (digestion impaired)</li>
        <li>Mindful eating — not in front of screens</li>
      </ul>

      <div className="rounded-lg border border-sage-200 bg-sage-50 p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong>Key takeaway:</strong> Nutrition alone won't fix mental health issues, but it's a 
          foundation that makes everything else work better. Focus on whole foods, blood sugar 
          stability, and key nutrients.
        </p>
      </div>
    </ArticleLayout>
  );
}