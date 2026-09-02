import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { PROGRAMS } from "../../utils/constants";

export const Programs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="programs" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Programs"
          subtitle="Choose the program that fits your wellness goals"
        />

        <div
          ref={ref}
          className={`grid gap-8 md:grid-cols-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {PROGRAMS.map((program) => (
            <Card key={program.id} hover className="overflow-hidden">
              <div className={`h-2 w-full bg-gradient-to-r ${program.gradient}`} />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                <p className="mt-3 text-gray-500 leading-relaxed">{program.description}</p>

                <div className="mt-6 space-y-3">
                  {program.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-sm text-gray-600 sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link to="/register">
                    <Button className="w-full" size="lg">
                      Book Consultation
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
