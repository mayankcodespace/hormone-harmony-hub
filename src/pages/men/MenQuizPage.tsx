import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { DisclaimerBanner } from "@/components/shared/DisclaimerBanner";
import { ArrowRight, ArrowLeft, Zap, Scale, Brain, Heart } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string; points: Record<string, number> }[];
}

const questions: Question[] = [
  {
    id: "energy",
    question: "How would you describe your energy levels?",
    options: [
      { label: "Generally good throughout the day", value: "good", points: { testosterone: 0, weight: 0, mood: 0, sexual: 0 } },
      { label: "Low energy, especially in the afternoon", value: "afternoon", points: { testosterone: 2, weight: 2, mood: 1, sexual: 1 } },
      { label: "Constantly fatigued despite enough sleep", value: "constant", points: { testosterone: 3, weight: 2, mood: 2, sexual: 2 } },
      { label: "Good energy but crashes after meals", value: "crashes", points: { testosterone: 1, weight: 3, mood: 1, sexual: 0 } },
    ],
  },
  {
    id: "weight",
    question: "What's your experience with weight?",
    options: [
      { label: "Weight is stable and healthy", value: "stable", points: { testosterone: 0, weight: 0, mood: 0, sexual: 0 } },
      { label: "Gaining belly fat despite efforts", value: "belly", points: { testosterone: 2, weight: 3, mood: 1, sexual: 1 } },
      { label: "Difficulty building or maintaining muscle", value: "muscle", points: { testosterone: 3, weight: 1, mood: 0, sexual: 1 } },
      { label: "Weight fluctuates with stress", value: "stress", points: { testosterone: 1, weight: 2, mood: 2, sexual: 0 } },
    ],
  },
  {
    id: "mood",
    question: "How's your mood and mental state?",
    options: [
      { label: "Generally positive and stable", value: "good", points: { testosterone: 0, weight: 0, mood: 0, sexual: 0 } },
      { label: "Irritable or easily frustrated", value: "irritable", points: { testosterone: 2, weight: 0, mood: 2, sexual: 1 } },
      { label: "Anxious or stressed often", value: "anxious", points: { testosterone: 1, weight: 2, mood: 3, sexual: 1 } },
      { label: "Low motivation or feeling flat", value: "flat", points: { testosterone: 3, weight: 1, mood: 2, sexual: 2 } },
    ],
  },
  {
    id: "sleep",
    question: "How's your sleep quality?",
    options: [
      { label: "Sleep well, wake refreshed", value: "good", points: { testosterone: 0, weight: 0, mood: 0, sexual: 0 } },
      { label: "Trouble falling asleep", value: "falling", points: { testosterone: 1, weight: 1, mood: 2, sexual: 1 } },
      { label: "Wake up often during the night", value: "waking", points: { testosterone: 2, weight: 2, mood: 2, sexual: 1 } },
      { label: "Never feel rested despite enough hours", value: "unrefreshed", points: { testosterone: 2, weight: 2, mood: 2, sexual: 2 } },
    ],
  },
  {
    id: "libido",
    question: "How would you describe your libido/drive?",
    options: [
      { label: "Normal and healthy", value: "normal", points: { testosterone: 0, weight: 0, mood: 0, sexual: 0 } },
      { label: "Lower than it used to be", value: "lower", points: { testosterone: 2, weight: 1, mood: 1, sexual: 3 } },
      { label: "Significantly reduced or absent", value: "absent", points: { testosterone: 3, weight: 1, mood: 2, sexual: 3 } },
      { label: "Variable depending on stress", value: "variable", points: { testosterone: 1, weight: 0, mood: 2, sexual: 2 } },
    ],
  },
  {
    id: "concern",
    question: "What concerns you most right now?",
    options: [
      { label: "Low energy and motivation", value: "energy", points: { testosterone: 3, weight: 1, mood: 1, sexual: 1 } },
      { label: "Weight gain or belly fat", value: "weight", points: { testosterone: 1, weight: 3, mood: 0, sexual: 0 } },
      { label: "Stress, anxiety, or burnout", value: "stress", points: { testosterone: 0, weight: 1, mood: 3, sexual: 1 } },
      { label: "Sexual health or libido", value: "sexual", points: { testosterone: 2, weight: 0, mood: 0, sexual: 3 } },
    ],
  },
];

const topicInfo = {
  testosterone: {
    title: "Testosterone & Energy",
    description: "Based on your answers, understanding testosterone and energy seems most relevant for you right now.",
    icon: Zap,
    href: "/men/testosterone",
  },
  weight: {
    title: "Weight & Metabolism",
    description: "Your responses suggest exploring the hormonal factors behind weight management might be helpful.",
    icon: Scale,
    href: "/men/weight-metabolism",
  },
  mood: {
    title: "Mood, Stress & Sleep",
    description: "Your answers indicate that stress, mood, and sleep connections might be worth understanding better.",
    icon: Brain,
    href: "/men/mood-stress",
  },
  sexual: {
    title: "Sexual Health & Energy",
    description: "Your responses suggest exploring the factors affecting sexual health and vitality.",
    icon: Heart,
    href: "/men/sexual-health",
  },
};

export default function MenQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [scores, setScores] = useState({ testosterone: 0, weight: 0, mood: 0, sexual: 0 });
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string, points: Record<string, number>) => {
    setAnswers({ ...answers, [questionId]: value });
    setScores({
      testosterone: scores.testosterone + points.testosterone,
      weight: scores.weight + points.weight,
      mood: scores.mood + points.mood,
      sexual: scores.sexual + points.sexual,
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
    setScores({ testosterone: 0, weight: 0, mood: 0, sexual: 0 });
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
            <Breadcrumb items={[{ label: "Men's Health", href: "/men" }, { label: "Quiz", href: "/men/quiz" }, { label: "Results" }]} />
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
                <li>• Persistent fatigue despite lifestyle changes</li>
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
          <Breadcrumb items={[{ label: "Men's Health", href: "/men" }, { label: "Find Your Path" }]} />
          
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
