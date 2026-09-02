import { Crown, FlaskConical, Salad, Ban, ShieldCheck, TrendingUp, Activity, Award } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { WHY_CHOOSE_US } from "../../utils/constants";

const iconMap = {
  Crown,
  FlaskConical,
  Salad,
  Ban,
  ShieldCheck,
  TrendingUp,
  Activity,
  Award,
};

export const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Us"
          subtitle="What makes our programs different from everything else out there"
        />

        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Card
                key={item.title}
                hover
                className="text-center"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                  <Icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed sm:text-base">{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
