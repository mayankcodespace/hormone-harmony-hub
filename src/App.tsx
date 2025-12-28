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
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
