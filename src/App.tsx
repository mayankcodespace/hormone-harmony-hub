import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PeriodsPage from "./pages/PeriodsPage";
import PCOSPage from "./pages/PCOSPage";
import HormonalWeightPage from "./pages/HormonalWeightPage";
import MoodPMSPage from "./pages/MoodPMSPage";
import AboutPage from "./pages/AboutPage";
import EditorialPolicyPage from "./pages/EditorialPolicyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import PrivacyPage from "./pages/PrivacyPage";
import ContactPage from "./pages/ContactPage";
import SourcesPage from "./pages/SourcesPage";
import ResourcesPage from "./pages/ResourcesPage";
import QuizPage from "./pages/QuizPage";
import StartHerePage from "./pages/StartHerePage";
import FindDoctorPage from "./pages/FindDoctorPage";
import SymptomTrackerPage from "./pages/SymptomTrackerPage";
import NotFound from "./pages/NotFound";

// Period articles
import CyclePhasesArticle from "./pages/articles/periods/CyclePhasesArticle";
import CrampsArticle from "./pages/articles/periods/CrampsArticle";
import IrregularPeriodsArticle from "./pages/articles/periods/IrregularPeriodsArticle";
import PMSBasicsArticle from "./pages/articles/periods/PMSBasicsArticle";
import TrackingGuideArticle from "./pages/articles/periods/TrackingGuideArticle";
import HeavyBleedingArticle from "./pages/articles/periods/HeavyBleedingArticle";
import PainManagementArticle from "./pages/articles/periods/PainManagementArticle";
import ExerciseGuideArticle from "./pages/articles/periods/ExerciseGuideArticle";

// PCOS articles
import PCOSBasicsArticle from "./pages/articles/pcos/PCOSBasicsArticle";
import InsulinResistanceArticle from "./pages/articles/pcos/InsulinResistanceArticle";
import AcneHairArticle from "./pages/articles/pcos/AcneHairArticle";
import WeightLossArticle from "./pages/articles/pcos/WeightLossArticle";
import FertilityArticle from "./pages/articles/pcos/FertilityArticle";
import SupplementsArticle from "./pages/articles/pcos/SupplementsArticle";
import IndianDietArticle from "./pages/articles/pcos/IndianDietArticle";
import LongTermArticle from "./pages/articles/pcos/LongTermArticle";

// Hormonal Weight articles
import WhyWeightChangesArticle from "./pages/articles/weight/WhyWeightChangesArticle";
import InsulinResistanceWeightArticle from "./pages/articles/weight/InsulinResistanceWeightArticle";
import CortisolArticle from "./pages/articles/weight/CortisolArticle";
import ThyroidArticle from "./pages/articles/weight/ThyroidArticle";
import SustainableApproachArticle from "./pages/articles/weight/SustainableApproachArticle";
import ExerciseWeightArticle from "./pages/articles/weight/ExerciseWeightArticle";
import SleepWeightArticle from "./pages/articles/weight/SleepWeightArticle";
import IndianDietWeightArticle from "./pages/articles/weight/IndianDietWeightArticle";

// Mood/PMS articles
import PMSvsPMDDArticle from "./pages/articles/mood/PMSvsPMDDArticle";
import MoodTrackingArticle from "./pages/articles/mood/MoodTrackingArticle";
import SerotoninArticle from "./pages/articles/mood/SerotoninArticle";
import PeriodAnxietyArticle from "./pages/articles/mood/PeriodAnxietyArticle";
import SleepMoodArticle from "./pages/articles/mood/SleepMoodArticle";
import NaturalRemediesArticle from "./pages/articles/mood/NaturalRemediesArticle";
import WhenToSeekHelpArticle from "./pages/articles/mood/WhenToSeekHelpArticle";
import StressManagementArticle from "./pages/articles/mood/StressManagementArticle";

// Men's pages
import MenIndexPage from "./pages/men/MenIndexPage";
import TestosteronePage from "./pages/men/TestosteronePage";
import WeightMetabolismPage from "./pages/men/WeightMetabolismPage";
import MoodStressPage from "./pages/men/MoodStressPage";
import SexualHealthPage from "./pages/men/SexualHealthPage";
import MenStartHerePage from "./pages/men/MenStartHerePage";
import MenResourcesPage from "./pages/men/MenResourcesPage";
import MenQuizPage from "./pages/men/MenQuizPage";
import MenFindDoctorPage from "./pages/men/MenFindDoctorPage";
import MenAboutPage from "./pages/men/MenAboutPage";
import MenContactPage from "./pages/men/MenContactPage";
import MenSymptomTrackerPage from "./pages/men/MenSymptomTrackerPage";

// Men's articles - Testosterone
import TestosteroneBasicsArticle from "./pages/articles/men/testosterone/TestosteroneBasicsArticle";
import LowTSignsArticle from "./pages/articles/men/testosterone/LowTSignsArticle";
import LifestyleTestosteroneArticle from "./pages/articles/men/testosterone/LifestyleTestosteroneArticle";
import TestosteroneTestingArticle from "./pages/articles/men/testosterone/TestosteroneTestingArticle";
import CortisolConnectionArticle from "./pages/articles/men/testosterone/CortisolConnectionArticle";
import SleepTestosteroneArticle from "./pages/articles/men/testosterone/SleepTestosteroneArticle";
import ExerciseTestosteroneArticle from "./pages/articles/men/testosterone/ExerciseTestosteroneArticle";
import TRTFactsArticle from "./pages/articles/men/testosterone/TRTFactsArticle";

// Men's articles - Weight
import BellyFatArticle from "./pages/articles/men/weight/BellyFatArticle";
import InsulinResistanceMenArticle from "./pages/articles/men/weight/InsulinResistanceMenArticle";
import CortisolFatArticle from "./pages/articles/men/weight/CortisolFatArticle";
import SleepWeightMenArticle from "./pages/articles/men/weight/SleepWeightMenArticle";
import SustainableApproachMenArticle from "./pages/articles/men/weight/SustainableApproachMenArticle";
import ExerciseGuideMenArticle from "./pages/articles/men/weight/ExerciseGuideMenArticle";
import IndianDietMenArticle from "./pages/articles/men/weight/IndianDietMenArticle";
import ThyroidMenArticle from "./pages/articles/men/weight/ThyroidMenArticle";

// Men's articles - Mood
import StressHormonesArticle from "./pages/articles/men/mood/StressHormonesArticle";
import AnxietyHormonesArticle from "./pages/articles/men/mood/AnxietyHormonesArticle";
import SleepDeprivationArticle from "./pages/articles/men/mood/SleepDeprivationArticle";
import BurnoutArticle from "./pages/articles/men/mood/BurnoutArticle";
import TestosteroneMoodArticle from "./pages/articles/men/mood/TestosteroneMoodArticle";
import StressManagementMenArticle from "./pages/articles/men/mood/StressManagementMenArticle";
import WhenToSeekHelpMenArticle from "./pages/articles/men/mood/WhenToSeekHelpMenArticle";
import NutritionMentalHealthMenArticle from "./pages/articles/men/mood/NutritionMentalHealthMenArticle";

// Men's articles - Sexual Health
import TestosteroneLibidoArticle from "./pages/articles/men/sexual/TestosteroneLibidoArticle";
import ErectileFunctionArticle from "./pages/articles/men/sexual/ErectileFunctionArticle";
import StressImpactArticle from "./pages/articles/men/sexual/StressImpactArticle";
import SleepImpactArticle from "./pages/articles/men/sexual/SleepImpactArticle";
import CardiovascularArticle from "./pages/articles/men/sexual/CardiovascularArticle";
import FertilityMenArticle from "./pages/articles/men/sexual/FertilityArticle";
import DopamineArticle from "./pages/articles/men/sexual/DopamineArticle";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/periods" element={<PeriodsPage />} />
          <Route path="/pcos" element={<PCOSPage />} />
          <Route path="/hormonal-weight" element={<HormonalWeightPage />} />
          <Route path="/mood-pms" element={<MoodPMSPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/start-here" element={<StartHerePage />} />
          <Route path="/find-doctor" element={<FindDoctorPage />} />
          <Route path="/symptom-tracker" element={<SymptomTrackerPage />} />
          
          {/* Period articles */}
          <Route path="/periods/cycle-phases" element={<CyclePhasesArticle />} />
          <Route path="/periods/cramps-what-helps" element={<CrampsArticle />} />
          <Route path="/periods/irregular-periods-causes" element={<IrregularPeriodsArticle />} />
          <Route path="/periods/pms-basics" element={<PMSBasicsArticle />} />
          <Route path="/periods/tracking-guide" element={<TrackingGuideArticle />} />
          <Route path="/periods/heavy-bleeding" element={<HeavyBleedingArticle />} />
          <Route path="/periods/pain-management" element={<PainManagementArticle />} />
          <Route path="/periods/exercise-guide" element={<ExerciseGuideArticle />} />

          {/* PCOS articles */}
          <Route path="/pcos/pcos-basics" element={<PCOSBasicsArticle />} />
          <Route path="/pcos/insulin-resistance-simple" element={<InsulinResistanceArticle />} />
          <Route path="/pcos/pcos-acne-hair" element={<AcneHairArticle />} />
          <Route path="/pcos/pcos-weight-loss-safe" element={<WeightLossArticle />} />
          <Route path="/pcos/pcos-fertility" element={<FertilityArticle />} />
          <Route path="/pcos/supplements-review" element={<SupplementsArticle />} />
          <Route path="/pcos/indian-diet-guide" element={<IndianDietArticle />} />
          <Route path="/pcos/long-term-management" element={<LongTermArticle />} />

          {/* Hormonal Weight articles */}
          <Route path="/hormonal-weight/why-weight-changes" element={<WhyWeightChangesArticle />} />
          <Route path="/hormonal-weight/insulin-resistance" element={<InsulinResistanceWeightArticle />} />
          <Route path="/hormonal-weight/cortisol-belly-fat" element={<CortisolArticle />} />
          <Route path="/hormonal-weight/thyroid-weight" element={<ThyroidArticle />} />
          <Route path="/hormonal-weight/sustainable-approach" element={<SustainableApproachArticle />} />
          <Route path="/hormonal-weight/exercise-guide" element={<ExerciseWeightArticle />} />
          <Route path="/hormonal-weight/sleep-weight" element={<SleepWeightArticle />} />
          <Route path="/hormonal-weight/indian-diet" element={<IndianDietWeightArticle />} />

          {/* Mood/PMS articles */}
          <Route path="/mood-pms/pms-vs-pmdd-basics" element={<PMSvsPMDDArticle />} />
          <Route path="/mood-pms/mood-tracking" element={<MoodTrackingArticle />} />
          <Route path="/mood-pms/serotonin-hormones" element={<SerotoninArticle />} />
          <Route path="/mood-pms/period-anxiety" element={<PeriodAnxietyArticle />} />
          <Route path="/mood-pms/sleep-mood" element={<SleepMoodArticle />} />
          <Route path="/mood-pms/natural-remedies" element={<NaturalRemediesArticle />} />
          <Route path="/mood-pms/when-to-seek-help" element={<WhenToSeekHelpArticle />} />
          <Route path="/mood-pms/stress-management" element={<StressManagementArticle />} />

          {/* Men's Hub Pages */}
          <Route path="/men" element={<MenIndexPage />} />
          <Route path="/men/testosterone" element={<TestosteronePage />} />
          <Route path="/men/weight-metabolism" element={<WeightMetabolismPage />} />
          <Route path="/men/mood-stress" element={<MoodStressPage />} />
          <Route path="/men/sexual-health" element={<SexualHealthPage />} />
          <Route path="/men/start-here" element={<MenStartHerePage />} />
          <Route path="/men/resources" element={<MenResourcesPage />} />
          <Route path="/men/quiz" element={<MenQuizPage />} />
          <Route path="/men/find-doctor" element={<MenFindDoctorPage />} />
          <Route path="/men/about" element={<MenAboutPage />} />
          <Route path="/men/contact" element={<MenContactPage />} />
          <Route path="/men/symptom-tracker" element={<MenSymptomTrackerPage />} />

          {/* Men's Testosterone articles */}
          <Route path="/men/testosterone/basics" element={<TestosteroneBasicsArticle />} />
          <Route path="/men/testosterone/low-t-signs" element={<LowTSignsArticle />} />
          <Route path="/men/testosterone/lifestyle" element={<LifestyleTestosteroneArticle />} />
          <Route path="/men/testosterone/testing" element={<TestosteroneTestingArticle />} />
          <Route path="/men/testosterone/cortisol-connection" element={<CortisolConnectionArticle />} />
          <Route path="/men/testosterone/sleep" element={<SleepTestosteroneArticle />} />
          <Route path="/men/testosterone/exercise" element={<ExerciseTestosteroneArticle />} />
          <Route path="/men/testosterone/trt-facts" element={<TRTFactsArticle />} />

          {/* Men's Weight articles */}
          <Route path="/men/weight/belly-fat" element={<BellyFatArticle />} />
          <Route path="/men/weight/insulin-resistance" element={<InsulinResistanceMenArticle />} />
          <Route path="/men/weight/cortisol-fat" element={<CortisolFatArticle />} />
          <Route path="/men/weight/sleep-weight" element={<SleepWeightMenArticle />} />
          <Route path="/men/weight/sustainable-approach" element={<SustainableApproachMenArticle />} />
          <Route path="/men/weight/exercise-guide" element={<ExerciseGuideMenArticle />} />
          <Route path="/men/weight/indian-diet" element={<IndianDietMenArticle />} />
          <Route path="/men/weight/thyroid" element={<ThyroidMenArticle />} />

          {/* Men's Mood articles */}
          <Route path="/men/mood/stress-hormones" element={<StressHormonesArticle />} />
          <Route path="/men/mood/anxiety-hormones" element={<AnxietyHormonesArticle />} />
          <Route path="/men/mood/sleep-deprivation" element={<SleepDeprivationArticle />} />
          <Route path="/men/mood/burnout" element={<BurnoutArticle />} />
          <Route path="/men/mood/testosterone-mood" element={<TestosteroneMoodArticle />} />
          <Route path="/men/mood/stress-management" element={<StressManagementMenArticle />} />
          <Route path="/men/mood/when-to-seek-help" element={<WhenToSeekHelpMenArticle />} />
          <Route path="/men/mood/nutrition-mental-health" element={<NutritionMentalHealthMenArticle />} />

          {/* Men's Sexual Health articles */}
          <Route path="/men/sexual-health/testosterone-libido" element={<TestosteroneLibidoArticle />} />
          <Route path="/men/sexual-health/erectile-function" element={<ErectileFunctionArticle />} />
          <Route path="/men/sexual-health/stress-impact" element={<StressImpactArticle />} />
          <Route path="/men/sexual-health/sleep-impact" element={<SleepImpactArticle />} />
          <Route path="/men/sexual-health/cardiovascular" element={<CardiovascularArticle />} />
          <Route path="/men/sexual-health/fertility" element={<FertilityMenArticle />} />
          <Route path="/men/sexual-health/dopamine-desire" element={<DopamineArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;