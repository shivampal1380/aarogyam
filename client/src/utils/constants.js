export const WORKSHOP = {
  title: "Achieve Weight Loss or Weight Gain up to 50 KG Naturally",
  subtitle: "Scientifically Guided Personalized Wellness Programs",
  date: "23rd & 24th July 2026",
  time: "7 PM IST",
  platform: "Zoom Live",
  languages: ["English", "Hindi", "Marathi"],
  fee: 99,
  registrationDeadline: "2026-07-23T19:00:00+05:30",
};

export const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || "";
export const RAZORPAY_PAYMENT_URL = import.meta.env.VITE_RAZORPAY_PAYMENT_URL || "https://pages.razorpay.com/pl_TDkjJ5JipKcrxH/view";

export const STATS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 3000, suffix: "+", label: "Transformations" },
  { value: 10, suffix: "+", label: "Fitness Coaches" },
  { value: 54, suffix: " KG", label: "Maximum Weight Loss" },
];

export const WHY_CHOOSE_US = [
  { icon: "Crown", title: "Founder Led Coaching", desc: "Personal guidance from Pradip Kadam, Nutritionist & Pre-Diabetes Weight Loss Coach" },
  { icon: "FlaskConical", title: "Scientifically Guided", desc: "Evidence-based nutrition and fitness protocols" },
  { icon: "Salad", title: "Customized Nutrition", desc: "Personalized meal plans based on your body type and goals" },
  { icon: "Ban", title: "No Crash Diet", desc: "Sustainable eating habits, not starving yourself" },
  { icon: "ShieldCheck", title: "Safe Weight Loss", desc: "Lose weight without compromising your health" },
  { icon: "TrendingUp", title: "Healthy Weight Gain", desc: "Gain lean muscle mass naturally and safely" },
  { icon: "Activity", title: "Daily Monitoring", desc: "Regular check-ins and progress tracking" },
  { icon: "Award", title: "Long-Term Results", desc: "Sustainable transformations that last a lifetime" },
];

export const PROGRAMS = [
  {
    id: "weight-loss",
    title: "Weight Loss Program",
    description: "Lose up to 50 KG naturally with scientifically guided nutrition and lifestyle coaching. No crash diets, no supplements — just real results.",
    benefits: [
      "Personalized calorie deficit plan",
      "Customized workout routine",
      "Weekly body composition analysis",
      "Daily motivation and support",
      "Lifestyle modification coaching",
      "Mental wellness guidance",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "weight-gain",
    title: "Weight Gain Program",
    description: "Gain healthy weight and build lean muscle with structured nutrition and progressive training programs.",
    benefits: [
      "Calorie surplus meal plans",
      "Strength training protocols",
      "Progressive overload tracking",
      "Recovery and sleep optimization",
      "Supplement guidance",
      "Regular body measurements",
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
];

export const FAQS = [
  {
    question: "Who is this program for?",
    answer: "Our program is ideal for people who want to lose weight, gain weight, reduce belly fat, improve their lifestyle, manage pre-diabetes, or develop healthy eating habits.",
  },
  {
    question: "Do I need to visit your clinic?",
    answer: "No. We offer both online and offline consultations, so you can join from anywhere in India.",
  },
  {
    question: "Will I have to stop eating my favorite foods?",
    answer: "No. Our approach focuses on balanced nutrition. We help you enjoy your favorite foods in moderation while achieving your health goals.",
  },
  {
    question: "How much weight can I lose?",
    answer: "Weight loss varies from person to person depending on age, health condition, metabolism, and consistency. Our focus is on healthy, sustainable weight loss, not crash dieting.",
  },
  {
    question: "Do you provide customized diet plans?",
    answer: "Yes. Every client receives a personalized nutrition plan based on their medical history, lifestyle, food preferences, and goals.",
  },
  {
    question: "Is your diet plan vegetarian or non-vegetarian?",
    answer: "We provide both vegetarian and non-vegetarian meal plans based on your preferences.",
  },
  {
    question: "Do I need to take nutritional supplements?",
    answer: "Yes, when appropriate. Our programs combine a personalized meal plan with high-quality nutritional supplements, when needed, to help bridge nutritional gaps, support your health goals, and optimize your weight loss/gain journey. Recommendations are always based on your individual health needs, lifestyle, and nutritional requirements.",
  },
  {
    question: "How often will I have follow-up sessions?",
    answer: "Regular follow-up sessions are scheduled to monitor your progress, make adjustments, and keep you motivated.",
  },
  {
    question: "Can your program help with pre-diabetes?",
    answer: "Yes. Our nutrition plans are designed to help manage blood sugar levels through healthy eating habits, lifestyle changes, and weight management.",
  },
  {
    question: "How do I get started?",
    answer: "Simply book a consultation through our website or contact us directly. We'll assess your health and create a personalized plan for you.",
  },
];
