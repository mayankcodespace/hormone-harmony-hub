import { ArticleLayout } from "@/components/shared/ArticleLayout";
import { SourcesAccordion, Citation } from "@/components/shared/CitationSystem";

const citations: Citation[] = [
  {
    id: 1,
    title: "Erectile dysfunction as cardiovascular disease predictor",
    source: "European Heart Journal, 2019",
    url: "https://academic.oup.com/eurheartj/article/40/1/72/5124203",
    accessDate: "January 2026",
  },
  {
    id: 2,
    title: "Vascular health and erectile function",
    source: "Circulation, 2020",
    url: "https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.120.049631",
    accessDate: "January 2026",
  },
  {
    id: 3,
    title: "Endothelial dysfunction in erectile dysfunction",
    source: "Journal of Sexual Medicine, 2018",
    url: "https://pubmed.ncbi.nlm.nih.gov/30033121/",
    accessDate: "January 2026",
  },
];

export default function CardiovascularArticle() {
  return (
    <ArticleLayout
      title="Heart Health & Sexual Function"
      description="Why cardiovascular health is essential for sexual function, and how erectile dysfunction can be an early warning sign."
      breadcrumbs={[
        { label: "Men's Health", href: "/men" },
        { label: "Sexual Health", href: "/men/sexual-health" },
        { label: "Cardiovascular Connection" },
      ]}
      backLink={{ label: "Sexual Health Hub", href: "/men/sexual-health" }}
      relatedArticles={[
        { title: "Erectile Function Basics", href: "/men/sexual-health/erectile-function" },
        { title: "Exercise Guide", href: "/men/weight/exercise-guide" },
        { title: "Weight & Metabolism", href: "/men/weight-metabolism" },
      ]}
      lastUpdated="January 2026"
    >
      <div className="article-content">
        <section>
          <h2>Heart Health = Sexual Health</h2>
          <p>
            This simple equation captures one of the most important connections in men's health. 
            Erections are fundamentally about blood flow, and the same factors that affect heart 
            health also affect erectile function.
          </p>
          <p>
            The penile arteries are smaller than coronary arteries, which means problems often 
            show up in sexual function before they manifest as heart disease. In fact, erectile 
            dysfunction can be an early warning sign of cardiovascular problems.
          </p>
        </section>

        <section>
          <h2>How Blood Flow Affects Erections</h2>
          <p>An erection requires several things to happen:</p>
          <ul>
            <li>Relaxation of blood vessels (through nitric oxide release)</li>
            <li>Increased blood flow to the penis</li>
            <li>Healthy arterial walls that can expand properly</li>
            <li>Proper valve function to maintain the erection</li>
          </ul>
          <p>
            Any condition that affects blood vessels — atherosclerosis, high blood pressure, 
            diabetes, high cholesterol — can impair this process.
          </p>
        </section>

        <section>
          <h2>ED as an Early Warning Sign</h2>
          <p>
            Research shows that erectile dysfunction can precede cardiovascular events by 3-5 years. 
            This is why doctors now consider ED a potential marker for heart disease, especially in 
            younger men without obvious risk factors.
          </p>
          <p>
            If you're experiencing erectile difficulties, especially if you're under 50, it's worth 
            getting a cardiovascular checkup including:
          </p>
          <ul>
            <li>Blood pressure measurement</li>
            <li>Cholesterol panel (LDL, HDL, triglycerides)</li>
            <li>Fasting blood glucose and HbA1c</li>
            <li>Assessment of cardiovascular risk factors</li>
          </ul>
        </section>

        <section>
          <h2>Risk Factors That Affect Both</h2>
          <p>These factors damage blood vessels throughout the body:</p>
          <ul>
            <li><strong>Smoking:</strong> Damages blood vessel lining, increases atherosclerosis</li>
            <li><strong>High blood pressure:</strong> Damages arterial walls over time</li>
            <li><strong>High cholesterol:</strong> Leads to plaque buildup in arteries</li>
            <li><strong>Diabetes:</strong> Damages blood vessels and nerves</li>
            <li><strong>Obesity:</strong> Associated with all of the above</li>
            <li><strong>Sedentary lifestyle:</strong> Poor cardiovascular fitness</li>
          </ul>
        </section>

        <section>
          <h2>Improving Cardiovascular Health for Better Sexual Function</h2>
          <h3>Exercise</h3>
          <ul>
            <li>Aim for 150 minutes of moderate cardio per week</li>
            <li>Include strength training 2-3 times per week</li>
            <li>Walking counts — 7,000-10,000 steps daily helps</li>
            <li>Cardiovascular fitness directly correlates with erectile function</li>
          </ul>

          <h3>Diet</h3>
          <ul>
            <li>Mediterranean diet pattern is associated with better erectile function</li>
            <li>Limit processed foods and added sugars</li>
            <li>Increase vegetables, fruits, whole grains</li>
            <li>Healthy fats from nuts, olive oil, fatty fish</li>
          </ul>

          <h3>Lifestyle</h3>
          <ul>
            <li><strong>Quit smoking:</strong> One of the biggest improvements you can make</li>
            <li><strong>Limit alcohol:</strong> Moderate drinking only</li>
            <li><strong>Manage weight:</strong> Especially abdominal obesity</li>
            <li><strong>Control blood pressure and blood sugar:</strong> Work with your doctor</li>
          </ul>
        </section>

        <section>
          <h2>The Good News</h2>
          <p>
            The cardiovascular system is responsive to lifestyle changes. Studies show that men who 
            improve their cardiovascular health through diet and exercise often see improvements in 
            erectile function — sometimes significant improvements.
          </p>
          <p>
            This is one area where the investment in your health pays dividends in multiple ways: 
            better heart health, better sexual function, more energy, and longer life.
          </p>
        </section>

        <SourcesAccordion citations={citations} lastUpdated="January 2026" />
      </div>
    </ArticleLayout>
  );
}
