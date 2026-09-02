import { CheckCircle } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const reasons = [
  "You've tried multiple diets but still can't lose weight.",
  "Your weight keeps increasing even though you eat less.",
  "You have stubborn belly fat that won't go away.",
  "You feel tired, low on energy, or experience frequent cravings.",
  "You are pre-diabetic or have high blood sugar and want to improve your health naturally.",
  "You want a personalized diet plan instead of following random internet advice.",
  "You struggle to stay consistent with healthy eating and exercise.",
  "You want expert guidance, accountability, and regular progress tracking.",
  "You're ready to transform your lifestyle and become healthier, fitter, and more confident.",
];

export const ThisIsForYou = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-gray-50 py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="This Is For You If"
          subtitle="If any of these sound familiar, this workshop is exactly what you need"
        />

        <div
          ref={ref}
          className={`mx-auto max-w-5xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="border-emerald-100 bg-emerald-50/30">
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-white p-5">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" strokeWidth={2} />
                  <span className="text-sm text-gray-700 leading-relaxed sm:text-base sm:font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
