import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { ArrowRight, ArrowLeft, Calendar, Heart, Scale, Brain } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string; points: Record<string, number> }[];
}

const questions: Question[] = [
  {
    id: "periods",
    question: "How would you describe your menstrual cycle?",
    options: [
      { label: "Regular (comes predictably)", value: "regular", points: { periods: 0, pcos: 0, weight: 0, mood: 0 } },
      { label: "Irregular (unpredictable timing)", value: "irregular", points: { periods: 2, pcos: 2, weight: 1, mood: 1 } },
      { label: "Very light or absent", value: "absent", points: { periods: 2, pcos: 3, weight: 2, mood: 1 } },
      { label: "Very heavy or painful", value: "heavy", points: { periods: 3, pcos: 1, weight: 0, mood: 1 } },
    ],
  },
  {
    id: "symptoms",
    question: "Which symptoms bother you the most?",
    options: [
      { label: "Severe cramps or period pain", value: "cramps", points: { periods: 3, pcos: 1, weight: 0, mood: 1 } },
      { label: "Acne, excess hair, or hair thinning", value: "androgens", points: { periods: 1, pcos: 3, weight: 1, mood: 0 } },
      { label: "Weight gain, especially belly", value: "weight", points: { periods: 0, pcos: 2, weight: 3, mood: 1 } },
      { label: "Mood swings, anxiety, or low mood", value: "mood", points: { periods: 1, pcos: 1, weight: 0, mood: 3 } },
    ],
  },
  {
    id: "energy",
    question: "How's your energy level?",
    options: [
      { label: "Generally good", value: "good", points: { periods: 0, pcos: 0, weight: 0, mood: 0 } },
      { label: "Tired often, especially before periods", value: "premenstrual", points: { periods: 2, pcos: 1, weight: 1, mood: 2 } },
      { label: "Constantly fatigued", value: "constant", points: { periods: 1, pcos: 2, weight: 2, mood: 2 } },
      { label: "Up and down throughout the month", value: "variable", points: { periods: 1, pcos: 1, weight: 1, mood: 2 } },
    ],
  },
  {
    id: "cravings",
    question: "Do you experience food cravings?",
    options: [
      { label: "Not really", value: "no", points: { periods: 0, pcos: 0, weight: 0, mood: 0 } },
      { label: "Sugar/carb cravings before period", value: "premenstrual", points: { periods: 1, pcos: 1, weight: 1, mood: 2 } },
      { label: "Constant sugar/carb cravings", value: "constant", points: { periods: 0, pcos: 2, weight: 3, mood: 1 } },
      { label: "Emotional eating", value: "emotional", points: { periods: 0, pcos: 1, weight: 2, mood: 3 } },
    ],
  },
  {
    id: "weight",
    question: "Have you experienced unexplained weight changes?",
    options: [
      { label: "No, weight is stable", value: "stable", points: { periods: 0, pcos: 0, weight: 0, mood: 0 } },
      { label: "Gaining weight despite efforts", value: "gaining", points: { periods: 0, pcos: 2, weight: 3, mood: 1 } },
      { label: "Difficulty losing weight", value: "difficulty", points: { periods: 0, pcos: 2, weight: 3, mood: 0 } },
      { label: "Weight fluctuates with cycle", value: "fluctuates", points: { periods: 2, pcos: 1, weight: 1, mood: 1 } },
    ],
  },
  {
    id: "concern",
    question: "What concerns you most right now?",
    options: [
      { label: "Understanding my cycle better", value: "cycle", points: { periods: 3, pcos: 1, weight: 0, mood: 1 } },
      { label: "PCOS diagnosis or management", value: "pcos", points: { periods: 1, pcos: 3, weight: 1, mood: 1 } },
      { label: "Managing weight sustainably", value: "weight", points: { periods: 0, pcos: 1, weight: 3, mood: 0 } },
      { label: "Mood and emotional wellbeing", value: "mood", points: { periods: 1, pcos: 0, weight: 0, mood: 3 } },
    ],
  },
];

const topicInfo = {
  periods: {
    title: "Periods & Menstrual Cycle",
    description: "Based on your answers, understanding your menstrual cycle seems most relevant for you right now.",
    icon: Calendar,
    href: "/periods",
    color: "rose",
  },
  pcos: {
    title: "PCOS / PCOD",
    description: "Your responses suggest exploring PCOS information might be helpful. Consider getting properly evaluated if you haven't already.",
    icon: Heart,
    href: "/pcos",
    color: "sage",
  },
  weight: {
    title: "Hormonal Weight",
    description: "Your answers indicate that hormonal factors might be affecting your weight. Let's explore this connection.",
    icon: Scale,
    href: "/hormonal-weight",
    color: "terracotta",
  },
  mood: {
    title: "Mood & PMS",
    description: "Your responses suggest hormonal mood patterns might be worth understanding better.",
    icon: Brain,
    href: "/mood-pms",
    color: "accent",
  },
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [scores, setScores] = useState({ periods: 0, pcos: 0, weight: 0, mood: 0 });
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string, points: Record<string, number>) => {
    setAnswers({ ...answers, [questionId]: value });
    setScores({
      periods: scores.periods + points.periods,
      pcos: scores.pcos + points.pcos,
      weight: scores.weight + points.weight,
      mood: scores.mood + points.mood,
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getTopResult = () => {
    const entries = Object.entries(scores) as [keyof typeof topicInfo, number][];
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScores({ periods: 0, pcos: 0, weight: 0, mood: 0 });
    setShowResults(false);
  };

  if (showResults) {
    const topResult = getTopResult();
    const result = topicInfo[topResult];
    const Icon = result.icon;

    return (
      <Layout>
        <section className="bg-gradient-to-b from-sage-50 to-background py-12">
          <div className="container">
            <Breadcrumb items={[{ label: "Find Your Path", href: "/quiz" }, { label: "Results" }]} />
          </div>
        </section>

        <div className="container py-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mx-auto mb-4">
                <Icon className="h-8 w-8" />
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                Your Starting Point
              </h1>
              <p className="text-lg text-muted-foreground">
                {result.description}
              </p>
            </div>

            <div className="rounded-xl border border-primary/30 bg-sage-50/50 p-6 mb-8">
              <h2 className="font-semibold text-lg mb-4">Start here:</h2>
              <Link
                to={result.href}
                className="block rounded-lg border border-border bg-card p-4 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{result.title}</h3>
                    <p className="text-sm text-muted-foreground">Explore this topic →</p>
                  </div>
                </div>
              </Link>
            </div>

            <DisclaimerBanner variant="inline" className="mb-8" />

            <div className="rounded-xl border border-border bg-card p-6 mb-8">
              <h3 className="font-semibold mb-3">When to see a doctor:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Symptoms are severe or getting worse</li>
                <li>• You haven't had a period in 3+ months</li>
                <li>• Symptoms significantly affect daily life</li>
                <li>• You want proper testing and diagnosis</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={resetQuiz}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retake quiz
              </Button>
              <Button variant="hero" asChild>
                <Link to={result.href}>
                  Go to {result.title}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-sage-50 to-background py-12">
        <div className="container">
          <Breadcrumb items={[{ label: "Find Your Path" }]} />
          
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
              Find Your Path
            </h1>
            <p className="text-muted-foreground">
              Answer a few questions to find the most relevant starting point for you.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="max-w-2xl mx-auto">
          <DisclaimerBanner 
            variant="inline" 
            className="mb-8"
          />

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion) / questions.length) * 100)}% complete</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div 
                className="h-2 rounded-full bg-primary transition-all duration-300"
                style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-serif text-xl font-semibold mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(question.id, option.value, option.points)}
                  className="w-full text-left rounded-lg border border-border p-4 hover:border-primary hover:bg-sage-50/50 transition-all group"
                >
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {currentQuestion > 0 && (
            <div className="mt-6">
              <Button 
                variant="ghost" 
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous question
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
