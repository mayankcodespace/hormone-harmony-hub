import { Utensils } from "lucide-react";

interface MacroInfo {
  name: string;
  description: string;
  indianSources: { budget: string; examples: string[] }[];
}

interface FoodGuideExpandedProps {
  title?: string;
  description?: string;
  macros: MacroInfo[];
  mealTips?: string[];
}

const plateMethodImage = "/placeholder.svg"; // Placeholder for plate method visual

export function FoodGuideExpanded({
  title = "Food made simple (Indian context)",
  description,
  macros,
  mealTips,
}: FoodGuideExpandedProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100 text-primary">
          <Utensils className="h-5 w-5" />
        </div>
        <h2 className="font-serif text-2xl font-semibold">{title}</h2>
      </div>

      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}

      {/* Plate Method Visual */}
      <div className="rounded-xl border border-sage-200 bg-sage-50/50 p-6">
        <h3 className="font-semibold mb-4">The Simple Plate Method</h3>
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-primary" />
              <span className="text-sm"><strong>½ plate:</strong> Vegetables (sabzi, salad)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-terracotta-400" />
              <span className="text-sm"><strong>¼ plate:</strong> Protein (dal, paneer, eggs, chicken)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-sage-300" />
              <span className="text-sm"><strong>¼ plate:</strong> Carbs (roti, rice)</span>
            </div>
          </div>
          <div className="relative mx-auto">
            {/* Visual plate representation */}
            <div className="w-48 h-48 rounded-full border-4 border-sage-300 overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-primary/20" />
                <div className="w-1/2 h-full flex flex-col">
                  <div className="h-1/2 bg-terracotta-100" />
                  <div className="h-1/2 bg-sage-100" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-0.5 h-full bg-sage-300" />
              </div>
              <div className="absolute top-1/2 right-0 w-1/2 h-0.5 bg-sage-300" />
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          This is a simple visual guide. Adjust portions based on your activity level and hunger.
        </p>
      </div>

      {/* Macronutrients */}
      <div className="space-y-4">
        <h3 className="font-semibold">Key nutrients & where to find them</h3>
        <div className="grid gap-4">
          {macros.map((macro) => (
            <div key={macro.name} className="rounded-lg border border-border p-4">
              <h4 className="font-medium text-primary mb-2">{macro.name}</h4>
              <p className="text-sm text-muted-foreground mb-3">{macro.description}</p>
              
              <div className="space-y-2">
                {macro.indianSources.map((source) => (
                  <div key={source.budget} className="text-sm">
                    <span className="inline-block px-2 py-0.5 rounded bg-muted text-muted-foreground text-xs font-medium mr-2">
                      {source.budget}
                    </span>
                    <span className="text-muted-foreground">{source.examples.join(" • ")}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Tips */}
      {mealTips && mealTips.length > 0 && (
        <div className="rounded-lg border border-sage-200 bg-sage-50/30 p-4">
          <h4 className="font-medium mb-3">Quick meal tips</h4>
          <ul className="space-y-2">
            {mealTips.map((tip, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-xs text-muted-foreground italic">
        Note: These are general guidelines, not strict rules. Everyone's body is different. 
        For personalized nutrition advice, consult a registered dietitian.
      </p>
    </section>
  );
}

// Pre-built macro data for each hub
export const periodsMacros: MacroInfo[] = [
  {
    name: "Iron",
    description: "Lost during menstruation. Important for energy and preventing anemia.",
    indianSources: [
      { budget: "Budget", examples: ["Poha", "Chana", "Jaggery (gur)", "Dates (khajoor)"] },
      { budget: "Mid-range", examples: ["Spinach (palak)", "Beetroot", "Pomegranate"] },
      { budget: "Higher", examples: ["Mutton liver", "Eggs", "Fortified cereals"] },
    ],
  },
  {
    name: "Magnesium",
    description: "Helps with cramps, mood, and sleep. Often low before periods.",
    indianSources: [
      { budget: "Budget", examples: ["Peanuts", "Rajma", "Bananas"] },
      { budget: "Mid-range", examples: ["Dark chocolate", "Pumpkin seeds", "Almonds"] },
      { budget: "Higher", examples: ["Cashews", "Avocado"] },
    ],
  },
  {
    name: "B Vitamins",
    description: "Support energy and nervous system. B6 may help with PMS.",
    indianSources: [
      { budget: "Budget", examples: ["Whole wheat roti", "Dalia", "Moong dal"] },
      { budget: "Mid-range", examples: ["Eggs", "Curd", "Paneer"] },
      { budget: "Higher", examples: ["Chicken", "Fish"] },
    ],
  },
  {
    name: "Protein",
    description: "Keeps you full, supports hormone production.",
    indianSources: [
      { budget: "Budget", examples: ["Dal (any)", "Chana", "Rajma", "Soya chunks"] },
      { budget: "Mid-range", examples: ["Eggs", "Paneer", "Curd"] },
      { budget: "Higher", examples: ["Chicken", "Fish", "Greek yogurt"] },
    ],
  },
];

export const pcosMacros: MacroInfo[] = [
  {
    name: "Protein",
    description: "Helps with blood sugar control and satiety. Aim for protein with every meal.",
    indianSources: [
      { budget: "Budget", examples: ["Dal (any)", "Chana", "Soya chunks", "Moong sprouts"] },
      { budget: "Mid-range", examples: ["Eggs", "Paneer", "Curd", "Tofu"] },
      { budget: "Higher", examples: ["Chicken breast", "Fish", "Whey protein"] },
    ],
  },
  {
    name: "Fiber",
    description: "Slows sugar absorption, feeds good gut bacteria, helps insulin sensitivity.",
    indianSources: [
      { budget: "Budget", examples: ["Vegetables (lauki, karela, bhindi)", "Whole dal", "Oats"] },
      { budget: "Mid-range", examples: ["Salads", "Flaxseeds (alsi)", "Chia seeds"] },
      { budget: "Higher", examples: ["Psyllium husk (isabgol)", "Mixed vegetable juices"] },
    ],
  },
  {
    name: "Healthy Fats",
    description: "Support hormone production. Don't fear fats — choose good ones.",
    indianSources: [
      { budget: "Budget", examples: ["Peanuts", "Mustard oil", "Coconut (fresh)"] },
      { budget: "Mid-range", examples: ["Almonds", "Walnuts", "Olive oil"] },
      { budget: "Higher", examples: ["Avocado", "Fatty fish (salmon, mackerel)"] },
    ],
  },
  {
    name: "Complex Carbs",
    description: "Choose whole grains over refined. They release energy slowly.",
    indianSources: [
      { budget: "Budget", examples: ["Jowar roti", "Bajra roti", "Brown rice (small portion)"] },
      { budget: "Mid-range", examples: ["Quinoa", "Oats", "Multigrain atta"] },
      { budget: "Higher", examples: ["Sourdough bread", "Buckwheat"] },
    ],
  },
];

export const weightMacros: MacroInfo[] = [
  {
    name: "Protein",
    description: "Most important for hormonal weight. Keeps you full, preserves muscle, boosts metabolism.",
    indianSources: [
      { budget: "Budget", examples: ["Dal (double portion)", "Chana", "Soya chunks", "Eggs"] },
      { budget: "Mid-range", examples: ["Paneer", "Greek curd", "Chicken"] },
      { budget: "Higher", examples: ["Fish", "Lean meats", "Protein powder"] },
    ],
  },
  {
    name: "Fiber",
    description: "Fills you up with fewer calories. Helps blood sugar and gut health.",
    indianSources: [
      { budget: "Budget", examples: ["Sabzi (any)", "Salad before meals", "Whole moong"] },
      { budget: "Mid-range", examples: ["Flaxseeds", "Chia pudding", "Oat bran"] },
      { budget: "Higher", examples: ["Psyllium supplements", "Vegetable smoothies"] },
    ],
  },
  {
    name: "Healthy Fats",
    description: "Don't skip fats. They help hormones and keep you satisfied.",
    indianSources: [
      { budget: "Budget", examples: ["Peanuts (handful)", "Coconut chutney", "Mustard oil"] },
      { budget: "Mid-range", examples: ["Almonds", "Ghee (small amount)", "Olive oil"] },
      { budget: "Higher", examples: ["Avocado", "Fatty fish", "Nut butters"] },
    ],
  },
  {
    name: "Smart Carbs",
    description: "Not no-carb, but smart carbs. Pair with protein, watch portions.",
    indianSources: [
      { budget: "Budget", examples: ["1-2 rotis (not 4)", "Small portion rice with dal"] },
      { budget: "Mid-range", examples: ["Jowar/bajra rotis", "Sweet potato"] },
      { budget: "Higher", examples: ["Quinoa pulao", "Cauliflower rice"] },
    ],
  },
];

export const moodMacros: MacroInfo[] = [
  {
    name: "Magnesium",
    description: "The 'calm mineral'. Helps with anxiety, sleep, and PMS mood symptoms.",
    indianSources: [
      { budget: "Budget", examples: ["Peanuts", "Bananas", "Rajma"] },
      { budget: "Mid-range", examples: ["Dark chocolate (70%+)", "Pumpkin seeds", "Almonds"] },
      { budget: "Higher", examples: ["Cashews", "Avocado", "Magnesium-rich water"] },
    ],
  },
  {
    name: "B Vitamins",
    description: "Essential for brain chemistry and mood regulation. B6 especially helps PMS.",
    indianSources: [
      { budget: "Budget", examples: ["Whole grains (roti)", "Dalia", "Poha"] },
      { budget: "Mid-range", examples: ["Eggs", "Curd", "Paneer"] },
      { budget: "Higher", examples: ["Chicken", "Fish", "Fortified foods"] },
    ],
  },
  {
    name: "Omega-3 Fats",
    description: "Anti-inflammatory, supports brain health and mood.",
    indianSources: [
      { budget: "Budget", examples: ["Flaxseeds (alsi)", "Walnuts"] },
      { budget: "Mid-range", examples: ["Chia seeds", "Hemp seeds"] },
      { budget: "Higher", examples: ["Fatty fish (salmon, mackerel)", "Fish oil"] },
    ],
  },
  {
    name: "Complex Carbs",
    description: "Help produce serotonin. Don't cut carbs completely if mood is a concern.",
    indianSources: [
      { budget: "Budget", examples: ["Oats", "Whole wheat roti", "Bananas"] },
      { budget: "Mid-range", examples: ["Sweet potato", "Brown rice"] },
      { budget: "Higher", examples: ["Quinoa", "Buckwheat"] },
    ],
  },
];

// Men's specific macro data
export const menTestosteroneMacros: MacroInfo[] = [
  {
    name: "Zinc",
    description: "Essential for testosterone production. Many men are deficient.",
    indianSources: [
      { budget: "Budget", examples: ["Pumpkin seeds", "Chickpeas", "Lentils"] },
      { budget: "Mid-range", examples: ["Eggs", "Paneer", "Cashews"] },
      { budget: "Higher", examples: ["Oysters", "Lamb", "Beef"] },
    ],
  },
  {
    name: "Vitamin D",
    description: "Linked to testosterone levels. Most Indians are deficient.",
    indianSources: [
      { budget: "Budget", examples: ["Sunlight exposure", "Fortified milk"] },
      { budget: "Mid-range", examples: ["Eggs", "Mushrooms", "Fortified cereals"] },
      { budget: "Higher", examples: ["Fatty fish (salmon, mackerel)", "Cod liver oil"] },
    ],
  },
  {
    name: "Healthy Fats",
    description: "Cholesterol is the building block for testosterone. Don't fear fats.",
    indianSources: [
      { budget: "Budget", examples: ["Peanuts", "Coconut", "Mustard oil"] },
      { budget: "Mid-range", examples: ["Ghee", "Almonds", "Olive oil"] },
      { budget: "Higher", examples: ["Avocado", "Fatty fish", "Walnuts"] },
    ],
  },
  {
    name: "Protein",
    description: "Supports muscle mass and hormone production.",
    indianSources: [
      { budget: "Budget", examples: ["Dal (any)", "Eggs", "Soya chunks", "Chana"] },
      { budget: "Mid-range", examples: ["Paneer", "Chicken", "Fish"] },
      { budget: "Higher", examples: ["Whey protein", "Lean meats", "Greek yogurt"] },
    ],
  },
];

export const menWeightMacros: MacroInfo[] = [
  {
    name: "Protein",
    description: "Critical for muscle preservation during fat loss. Aim for 1.6-2g per kg body weight.",
    indianSources: [
      { budget: "Budget", examples: ["Eggs", "Dal (double portion)", "Soya chunks", "Chana"] },
      { budget: "Mid-range", examples: ["Paneer", "Chicken breast", "Fish"] },
      { budget: "Higher", examples: ["Whey protein", "Lean meats", "Cottage cheese"] },
    ],
  },
  {
    name: "Fiber",
    description: "Keeps you full longer and helps blood sugar control.",
    indianSources: [
      { budget: "Budget", examples: ["Vegetables (any)", "Whole dal", "Oats"] },
      { budget: "Mid-range", examples: ["Salads", "Flaxseeds", "Psyllium husk"] },
      { budget: "Higher", examples: ["Chia seeds", "Mixed vegetable smoothies"] },
    ],
  },
  {
    name: "Complex Carbs",
    description: "Don't eliminate carbs — choose smart ones and time them around activity.",
    indianSources: [
      { budget: "Budget", examples: ["Oats", "Brown rice (small portion)", "Ragi"] },
      { budget: "Mid-range", examples: ["Sweet potato", "Jowar roti", "Bajra roti"] },
      { budget: "Higher", examples: ["Quinoa", "Buckwheat"] },
    ],
  },
  {
    name: "Healthy Fats",
    description: "Essential for hormone production. Don't go too low-fat.",
    indianSources: [
      { budget: "Budget", examples: ["Peanuts", "Coconut", "Mustard oil"] },
      { budget: "Mid-range", examples: ["Almonds", "Ghee (moderate)", "Olive oil"] },
      { budget: "Higher", examples: ["Avocado", "Fatty fish", "Nut butters"] },
    ],
  },
];

export const menMoodMacros: MacroInfo[] = [
  {
    name: "Magnesium",
    description: "The 'calm mineral'. Helps with stress, sleep, and anxiety.",
    indianSources: [
      { budget: "Budget", examples: ["Peanuts", "Bananas", "Spinach"] },
      { budget: "Mid-range", examples: ["Dark chocolate (70%+)", "Pumpkin seeds", "Almonds"] },
      { budget: "Higher", examples: ["Cashews", "Avocado"] },
    ],
  },
  {
    name: "Omega-3 Fats",
    description: "Anti-inflammatory, supports brain health and mood regulation.",
    indianSources: [
      { budget: "Budget", examples: ["Flaxseeds (alsi)", "Walnuts"] },
      { budget: "Mid-range", examples: ["Chia seeds", "Hemp seeds"] },
      { budget: "Higher", examples: ["Fatty fish (salmon, mackerel)", "Fish oil supplements"] },
    ],
  },
  {
    name: "B Vitamins",
    description: "Essential for nervous system and energy production.",
    indianSources: [
      { budget: "Budget", examples: ["Whole grains", "Eggs", "Dalia"] },
      { budget: "Mid-range", examples: ["Chicken", "Fish", "Curd"] },
      { budget: "Higher", examples: ["Liver", "Fortified foods"] },
    ],
  },
  {
    name: "Protein",
    description: "Amino acids are precursors for neurotransmitters like dopamine and serotonin.",
    indianSources: [
      { budget: "Budget", examples: ["Dal", "Eggs", "Soya chunks"] },
      { budget: "Mid-range", examples: ["Paneer", "Chicken", "Fish"] },
      { budget: "Higher", examples: ["Whey protein", "Lean meats"] },
    ],
  },
];

export const menSexualHealthMacros: MacroInfo[] = [
  {
    name: "Zinc",
    description: "Critical for testosterone and sperm production.",
    indianSources: [
      { budget: "Budget", examples: ["Pumpkin seeds", "Chickpeas", "Lentils"] },
      { budget: "Mid-range", examples: ["Eggs", "Paneer", "Cashews"] },
      { budget: "Higher", examples: ["Oysters", "Lamb", "Beef"] },
    ],
  },
  {
    name: "L-Arginine (Amino Acid)",
    description: "Supports blood flow. Found naturally in protein-rich foods.",
    indianSources: [
      { budget: "Budget", examples: ["Peanuts", "Lentils", "Chickpeas"] },
      { budget: "Mid-range", examples: ["Chicken", "Fish", "Dairy"] },
      { budget: "Higher", examples: ["Turkey", "Pumpkin seeds", "Soybeans"] },
    ],
  },
  {
    name: "Antioxidants",
    description: "Protect sperm quality and vascular health.",
    indianSources: [
      { budget: "Budget", examples: ["Tomatoes", "Spinach", "Carrots"] },
      { budget: "Mid-range", examples: ["Berries", "Pomegranate", "Green tea"] },
      { budget: "Higher", examples: ["Blueberries", "Dark chocolate", "Acai"] },
    ],
  },
  {
    name: "Healthy Fats",
    description: "Support hormone production and cardiovascular health.",
    indianSources: [
      { budget: "Budget", examples: ["Peanuts", "Coconut", "Mustard oil"] },
      { budget: "Mid-range", examples: ["Almonds", "Olive oil", "Ghee"] },
      { budget: "Higher", examples: ["Avocado", "Fatty fish", "Walnuts"] },
    ],
  },
];
