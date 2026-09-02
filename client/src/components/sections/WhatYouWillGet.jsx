import { Check, Flag } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const benefits = [
  "Personalized Diet Plan",
  "Weight Loss Guidance",
  "Pre-Diabetes Nutrition Support",
  "Weekly Progress Tracking",
  "Lifestyle & Habit Coaching",
  "Ongoing Motivation & Accountability",
];

const whoCanJoin = [
  "People struggling with weight loss",
  "Pre-diabetic individuals",
  "Busy professionals",
  "Homemakers",
  "Students",
  "Anyone wanting a healthier lifestyle",
];

export const WhatYouWillGet = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-white py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What You'll Get"
          subtitle="Everything you need to transform your health and achieve lasting results"
        />

        <div
          ref={ref}
          className={`mx-auto grid max-w-5xl gap-8 md:grid-cols-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="border-emerald-100 bg-emerald-50/50">
            <h3 className="mb-5 text-lg font-bold text-gray-900">What You'll Get</h3>
            <ul className="space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-gray-700 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-rose-100 bg-rose-50/50">
            <h3 className="mb-5 text-lg font-bold text-gray-900">Who Can Join Me?</h3>
            <ul className="space-y-3">
              {whoCanJoin.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Flag className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
