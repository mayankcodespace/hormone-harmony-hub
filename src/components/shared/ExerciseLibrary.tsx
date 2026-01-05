import { Play, Clock, Calendar, ExternalLink } from "lucide-react";

export interface Exercise {
  name: string;
  duration: string;
  cyclePhase?: string;
  description: string;
  youtubeUrl?: string;
  youtubeChannel?: string;
}

export interface ExerciseCategory {
  title: string;
  description: string;
  exercises: Exercise[];
}

interface ExerciseLibraryProps {
  title?: string;
  description?: string;
  categories: ExerciseCategory[];
  image?: string;
}

export function ExerciseLibrary({
  title = "Exercise & Movement",
  description,
  categories,
  image,
}: ExerciseLibraryProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100 text-primary">
          <Play className="h-5 w-5" />
        </div>
        <h2 className="font-serif text-2xl font-semibold">{title}</h2>
      </div>

      {image && (
        <div className="rounded-xl overflow-hidden mb-6">
          <img src={image} alt="Gentle exercise illustration" className="w-full h-48 object-cover" />
        </div>
      )}

      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.title} className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {category.exercises.map((exercise) => (
                <div
                  key={exercise.name}
                  className="rounded-lg border border-border bg-card p-4 hover:border-sage-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">{exercise.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {exercise.duration}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {exercise.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {exercise.cyclePhase && (
                      <span className="inline-flex items-center gap-1 text-xs bg-sage-100 text-sage-700 px-2 py-1 rounded">
                        <Calendar className="h-3 w-3" />
                        {exercise.cyclePhase}
                      </span>
                    )}
                    
                    {exercise.youtubeUrl && (
                      <a
                        href={exercise.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs bg-destructive/10 text-destructive px-2 py-1 rounded hover:bg-destructive/20 transition-colors"
                      >
                        <Play className="h-3 w-3" />
                        {exercise.youtubeChannel || "Watch video"}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-terracotta-200 bg-terracotta-50/50 p-4">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Listen to your body.</strong> Stop if something 
          feels painful or uncomfortable. These are suggestions, not prescriptions. Adjust based 
          on how you feel.
        </p>
      </div>
    </section>
  );
}

// Pre-built exercise data for each hub - Updated with reliable YouTube links
export const periodsExercises: ExerciseCategory[] = [
  {
    title: "Gentle / Recovery (During periods)",
    description: "Light movements to ease cramps and support your body during menstruation.",
    exercises: [
      {
        name: "Child's Pose (Balasana)",
        duration: "5-10 min",
        cyclePhase: "Day 1-5",
        description: "Gentle stretch for lower back. Calming for cramps.",
        youtubeUrl: "https://www.youtube.com/watch?v=eqVMAPM00DM",
        youtubeChannel: "Yoga With Kassandra",
      },
      {
        name: "Reclined Bound Angle",
        duration: "5-10 min",
        cyclePhase: "Day 1-5",
        description: "Opens hips, relaxes pelvis. Good with heating pad.",
        youtubeUrl: "https://www.youtube.com/watch?v=OMZSf7WOB78",
        youtubeChannel: "SarahBethYoga",
      },
      {
        name: "Gentle Walking",
        duration: "15-20 min",
        cyclePhase: "Day 1-5",
        description: "Light movement improves blood flow and mood.",
      },
      {
        name: "Cat-Cow Stretches",
        duration: "5 min",
        cyclePhase: "Day 1-7",
        description: "Gentle spinal movement. Eases back pain.",
        youtubeUrl: "https://www.youtube.com/watch?v=Ai5RehNnZC8",
        youtubeChannel: "Yoga With Kassandra",
      },
    ],
  },
  {
    title: "Active Recovery (Post-period)",
    description: "As energy returns, gradually increase activity.",
    exercises: [
      {
        name: "Brisk Walking",
        duration: "20-30 min",
        cyclePhase: "Day 6-14",
        description: "Great for building back energy. Easy on joints.",
      },
      {
        name: "Yoga Flow",
        duration: "20-30 min",
        cyclePhase: "Day 6-14",
        description: "Full body movement as energy increases.",
        youtubeUrl: "https://www.youtube.com/watch?v=4TLHLNX65-4",
        youtubeChannel: "Yoga With Adriene",
      },
      {
        name: "Light Strength Training",
        duration: "20-30 min",
        cyclePhase: "Day 6-14",
        description: "Bodyweight exercises to rebuild strength.",
      },
      {
        name: "Swimming",
        duration: "20-30 min",
        cyclePhase: "Any phase",
        description: "Low-impact, full-body. Great for any cycle phase.",
      },
    ],
  },
];

export const pcosExercises: ExerciseCategory[] = [
  {
    title: "Strength Training (Highly Recommended)",
    description: "Building muscle improves insulin sensitivity — key for PCOS management.",
    exercises: [
      {
        name: "Bodyweight Squats",
        duration: "10-15 min",
        description: "Builds leg muscles. Great for beginners. Start with 3 sets of 10.",
        youtubeUrl: "https://www.youtube.com/watch?v=xHWEDBCW0dg",
        youtubeChannel: "Charlie Follows",
      },
      {
        name: "Resistance Band Workout",
        duration: "20-30 min",
        description: "Full body strength with minimal equipment.",
        youtubeUrl: "https://www.youtube.com/watch?v=C2RAjUEAoLI",
        youtubeChannel: "Yoga With Kassandra",
      },
      {
        name: "Dumbbell Full Body",
        duration: "30-40 min",
        description: "Progressive strength building. 2-3x per week.",
        youtubeUrl: "https://www.youtube.com/watch?v=oDMh3a11Zg0",
        youtubeChannel: "Charlie Follows",
      },
      {
        name: "Pilates Core",
        duration: "20-30 min",
        description: "Core strength without high impact.",
        youtubeUrl: "https://www.youtube.com/watch?v=0et6I930LaU",
        youtubeChannel: "Yoga With Adriene",
      },
    ],
  },
  {
    title: "Hormone-Friendly Cardio",
    description: "Moderate cardio helps insulin sensitivity without spiking cortisol.",
    exercises: [
      {
        name: "Brisk Walking",
        duration: "30-45 min",
        description: "Most underrated exercise. Daily if possible.",
      },
      {
        name: "Cycling",
        duration: "20-30 min",
        description: "Low impact, good for joints. Indoor or outdoor.",
      },
      {
        name: "Swimming",
        duration: "20-30 min",
        description: "Full body, very low stress on body.",
      },
      {
        name: "Low-Impact Movement",
        duration: "20 min",
        description: "Short bursts, not daily. 2x per week max.",
        youtubeUrl: "https://www.youtube.com/watch?v=Ai5RehNnZC8",
        youtubeChannel: "Yoga With Kassandra",
      },
    ],
  },
];

export const weightExercises: ExerciseCategory[] = [
  {
    title: "Strength Training (Priority)",
    description: "Muscle burns more calories at rest. This is your biggest lever for hormonal weight.",
    exercises: [
      {
        name: "Beginner Full Body",
        duration: "30 min",
        description: "No equipment needed. Start here if new to strength.",
        youtubeUrl: "https://www.youtube.com/watch?v=xHWEDBCW0dg",
        youtubeChannel: "Charlie Follows",
      },
      {
        name: "Dumbbell Strength",
        duration: "30-40 min",
        description: "Progressive overload with weights. 3x per week.",
        youtubeUrl: "https://www.youtube.com/watch?v=oDMh3a11Zg0",
        youtubeChannel: "Charlie Follows",
      },
      {
        name: "Lower Body Focus",
        duration: "30 min",
        description: "Legs and glutes — largest muscle groups.",
        youtubeUrl: "https://www.youtube.com/watch?v=C2RAjUEAoLI",
        youtubeChannel: "Yoga With Kassandra",
      },
      {
        name: "Upper Body Strength",
        duration: "25-30 min",
        description: "Arms, back, shoulders. Balance with lower body.",
        youtubeUrl: "https://www.youtube.com/watch?v=4TLHLNX65-4",
        youtubeChannel: "Yoga With Adriene",
      },
    ],
  },
  {
    title: "Metabolism-Boosting Movement",
    description: "Walking and daily movement matter more than you think.",
    exercises: [
      {
        name: "Post-Meal Walking",
        duration: "10-15 min",
        description: "Walk after meals. Helps blood sugar significantly.",
      },
      {
        name: "Daily Step Goal",
        duration: "Throughout day",
        description: "Aim for 7,000-10,000 steps. More impactful than gym alone.",
      },
      {
        name: "Yoga for Stress",
        duration: "20-30 min",
        description: "High cortisol = belly fat. Yoga helps lower cortisol.",
        youtubeUrl: "https://www.youtube.com/watch?v=OMZSf7WOB78",
        youtubeChannel: "SarahBethYoga",
      },
      {
        name: "NEAT Activities",
        duration: "All day",
        description: "Take stairs, stand more, walk while on calls.",
      },
    ],
  },
];

export const moodExercises: ExerciseCategory[] = [
  {
    title: "Gentle / Calming",
    description: "When anxiety or low mood hits, gentle movement helps more than intense exercise.",
    exercises: [
      {
        name: "Yoga for Anxiety",
        duration: "20-30 min",
        description: "Calming poses with breathwork. Great for PMS.",
        youtubeUrl: "https://www.youtube.com/watch?v=OMZSf7WOB78",
        youtubeChannel: "SarahBethYoga",
      },
      {
        name: "Nature Walk",
        duration: "20-30 min",
        description: "Walking in nature proven to reduce cortisol and improve mood.",
      },
      {
        name: "Restorative Yoga",
        duration: "30-45 min",
        cyclePhase: "Luteal phase",
        description: "Very gentle. Good for days before period.",
        youtubeUrl: "https://www.youtube.com/watch?v=Ai5RehNnZC8",
        youtubeChannel: "Yoga With Kassandra",
      },
      {
        name: "Breathing Exercises",
        duration: "5-10 min",
        description: "Box breathing or 4-7-8 breathing. Instant calm.",
        youtubeUrl: "https://www.youtube.com/watch?v=0et6I930LaU",
        youtubeChannel: "Yoga With Adriene",
      },
    ],
  },
  {
    title: "Mood-Boosting Movement",
    description: "When you have energy, movement releases endorphins that improve mood.",
    exercises: [
      {
        name: "Dance Workout",
        duration: "20-30 min",
        description: "Fun movement releases endorphins. No skill needed.",
        youtubeUrl: "https://www.youtube.com/watch?v=xHWEDBCW0dg",
        youtubeChannel: "Charlie Follows",
      },
      {
        name: "Brisk Walking",
        duration: "20-30 min",
        description: "Simple, effective, proven to help depression.",
      },
      {
        name: "Strength Training",
        duration: "20-30 min",
        description: "Building strength builds confidence. Great for mood long-term.",
        youtubeUrl: "https://www.youtube.com/watch?v=C2RAjUEAoLI",
        youtubeChannel: "Yoga With Kassandra",
      },
      {
        name: "Swimming",
        duration: "20-30 min",
        description: "Water is calming. Full body movement without stress.",
      },
    ],
  },
];

// Men's specific exercise data
export const menTestosteroneExercises: ExerciseCategory[] = [
  {
    title: "Strength Training (Testosterone Boosting)",
    description: "Compound movements that stimulate testosterone production naturally.",
    exercises: [
      {
        name: "Squats",
        duration: "15-20 min",
        description: "King of exercises. Engages largest muscle groups, boosts testosterone.",
        youtubeUrl: "https://www.youtube.com/watch?v=bEv6CCg2BC8",
        youtubeChannel: "Jeff Nippard",
      },
      {
        name: "Deadlifts",
        duration: "15-20 min",
        description: "Full body compound movement. Start light, focus on form.",
        youtubeUrl: "https://www.youtube.com/watch?v=op9kVnSso6Q",
        youtubeChannel: "Alan Thrall",
      },
      {
        name: "Bench Press / Push-ups",
        duration: "15-20 min",
        description: "Chest and triceps. Push-ups if no gym access.",
        youtubeUrl: "https://www.youtube.com/watch?v=4Y2ZdHCOXok",
        youtubeChannel: "Jeff Nippard",
      },
      {
        name: "Pull-ups / Rows",
        duration: "15-20 min",
        description: "Back and biceps. Essential for balanced physique.",
        youtubeUrl: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
        youtubeChannel: "Jeff Nippard",
      },
    ],
  },
  {
    title: "Recovery & Sleep Optimization",
    description: "Rest is when testosterone is produced. Don't overtrain.",
    exercises: [
      {
        name: "Stretching Routine",
        duration: "10-15 min",
        description: "Post-workout stretching aids recovery.",
        youtubeUrl: "https://www.youtube.com/watch?v=g_tea8ZNk5A",
        youtubeChannel: "Tom Merrick",
      },
      {
        name: "Light Walking",
        duration: "20-30 min",
        description: "Active recovery on rest days. Reduces cortisol.",
      },
      {
        name: "Yoga for Men",
        duration: "20-30 min",
        description: "Flexibility and stress reduction. Underrated for men.",
        youtubeUrl: "https://www.youtube.com/watch?v=nAmc9SNciTg",
        youtubeChannel: "Breathe and Flow",
      },
      {
        name: "Sleep Hygiene",
        duration: "7-9 hours",
        description: "Quality sleep is non-negotiable for testosterone.",
      },
    ],
  },
];

export const menWeightExercises: ExerciseCategory[] = [
  {
    title: "Strength Training (Fat Loss Priority)",
    description: "Building muscle increases resting metabolism. This is your biggest lever.",
    exercises: [
      {
        name: "Full Body Strength",
        duration: "45-60 min",
        description: "Compound movements 3x per week. Squats, deadlifts, presses, rows.",
        youtubeUrl: "https://www.youtube.com/watch?v=eMjyvIQbn9M",
        youtubeChannel: "Jeremy Ethier",
      },
      {
        name: "Upper Body Focus",
        duration: "30-40 min",
        description: "Chest, back, shoulders, arms. Alternate with lower body.",
        youtubeUrl: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
        youtubeChannel: "Jeff Nippard",
      },
      {
        name: "Lower Body Focus",
        duration: "30-40 min",
        description: "Legs and glutes. Largest muscle groups = most calorie burn.",
        youtubeUrl: "https://www.youtube.com/watch?v=Aw5BoGaRc0s",
        youtubeChannel: "Jeff Nippard",
      },
      {
        name: "Core Work",
        duration: "15-20 min",
        description: "Planks, leg raises, ab wheel. 2-3x per week.",
        youtubeUrl: "https://www.youtube.com/watch?v=8jyhJ6TiUPA",
        youtubeChannel: "Jeremy Ethier",
      },
    ],
  },
  {
    title: "Metabolic Movement",
    description: "Daily movement matters more than intense gym sessions alone.",
    exercises: [
      {
        name: "Daily Walking",
        duration: "30-60 min",
        description: "7,000-10,000 steps daily. Most underrated fat loss tool.",
      },
      {
        name: "Post-Meal Walks",
        duration: "10-15 min",
        description: "Walk after meals. Significantly helps blood sugar.",
      },
      {
        name: "NEAT Activities",
        duration: "Throughout day",
        description: "Take stairs, stand more, pace during calls.",
      },
      {
        name: "HIIT Cardio",
        duration: "20-30 min",
        description: "High intensity intervals. 2-3x per week max.",
        youtubeUrl: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
        youtubeChannel: "THENX",
      },
    ],
  },
];

export const menMoodExercises: ExerciseCategory[] = [
  {
    title: "Stress-Reducing Movement",
    description: "Exercise that calms the nervous system and reduces cortisol.",
    exercises: [
      {
        name: "Walking in Nature",
        duration: "30-45 min",
        description: "Proven to reduce cortisol and improve mood significantly.",
      },
      {
        name: "Yoga for Stress",
        duration: "20-30 min",
        description: "Breathing-focused yoga. Great for anxiety.",
        youtubeUrl: "https://www.youtube.com/watch?v=nAmc9SNciTg",
        youtubeChannel: "Breathe and Flow",
      },
      {
        name: "Swimming",
        duration: "20-30 min",
        description: "Rhythmic, meditative. Water is naturally calming.",
      },
      {
        name: "Tai Chi / Qigong",
        duration: "20-30 min",
        description: "Slow, flowing movements. Excellent for stress.",
        youtubeUrl: "https://www.youtube.com/watch?v=cEOS2zoyQw4",
        youtubeChannel: "Yoqi Yoga and Qigong",
      },
    ],
  },
  {
    title: "Mood-Boosting Exercise",
    description: "Movement that releases endorphins and improves mental state.",
    exercises: [
      {
        name: "Strength Training",
        duration: "30-45 min",
        description: "Builds confidence and releases endorphins. Proven antidepressant.",
        youtubeUrl: "https://www.youtube.com/watch?v=eMjyvIQbn9M",
        youtubeChannel: "Jeremy Ethier",
      },
      {
        name: "Running / Jogging",
        duration: "20-30 min",
        description: "Runner's high is real. Start slow if new.",
        youtubeUrl: "https://www.youtube.com/watch?v=_kGESn8ArrU",
        youtubeChannel: "Global Triathlon Network",
      },
      {
        name: "Sports / Games",
        duration: "30-60 min",
        description: "Cricket, badminton, football. Social + exercise.",
      },
      {
        name: "Martial Arts",
        duration: "45-60 min",
        description: "Discipline, focus, stress release. Great for mental health.",
        youtubeUrl: "https://www.youtube.com/watch?v=yH0Z4Qwtfws",
        youtubeChannel: "THENX",
      },
    ],
  },
];

export const menSexualHealthExercises: ExerciseCategory[] = [
  {
    title: "Cardiovascular Health",
    description: "Good blood flow is essential for sexual function. Heart health = sexual health.",
    exercises: [
      {
        name: "Brisk Walking",
        duration: "30-45 min",
        description: "Simple, effective. Improves cardiovascular health.",
      },
      {
        name: "Cycling",
        duration: "20-30 min",
        description: "Great cardio. Use proper seat to avoid issues.",
        youtubeUrl: "https://www.youtube.com/watch?v=ouvPpDfXvKc",
        youtubeChannel: "Global Cycling Network",
      },
      {
        name: "Swimming",
        duration: "20-30 min",
        description: "Full body, low impact. Excellent for circulation.",
      },
      {
        name: "Interval Training",
        duration: "20-25 min",
        description: "Short bursts improve heart health. 2x per week max.",
        youtubeUrl: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
        youtubeChannel: "THENX",
      },
    ],
  },
  {
    title: "Strength & Hormone Support",
    description: "Strength training supports testosterone and overall vitality.",
    exercises: [
      {
        name: "Compound Lifts",
        duration: "30-45 min",
        description: "Squats, deadlifts, presses. Boost testosterone naturally.",
        youtubeUrl: "https://www.youtube.com/watch?v=bEv6CCg2BC8",
        youtubeChannel: "Jeff Nippard",
      },
      {
        name: "Pelvic Floor Exercises",
        duration: "5-10 min",
        description: "Kegels for men. Can help with control and function.",
        youtubeUrl: "https://www.youtube.com/watch?v=VmXRz_9pKKk",
        youtubeChannel: "Upright Health",
      },
      {
        name: "Core Strengthening",
        duration: "15-20 min",
        description: "Strong core supports overall physical performance.",
        youtubeUrl: "https://www.youtube.com/watch?v=8jyhJ6TiUPA",
        youtubeChannel: "Jeremy Ethier",
      },
      {
        name: "Hip Mobility",
        duration: "10-15 min",
        description: "Flexibility in hips and pelvis. Often neglected.",
        youtubeUrl: "https://www.youtube.com/watch?v=NG9qbvAN3gQ",
        youtubeChannel: "Tom Merrick",
      },
    ],
  },
];
