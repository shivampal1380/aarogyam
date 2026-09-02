import { Award, TrendingDown, Heart, Clock } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="founder" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Meet the Coach"
          subtitle="Nutritionist and Pre-Diabetes Weight Loss coach / Fat Loss Coach"
        />

        <div
          ref={ref}
          className={`mx-auto w-full transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="overflow-hidden">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative min-h-[320px] md:min-h-[520px]">
                <img
                  src="/pradeep-half-banner.png"
                  alt="Pradip Kadam"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">The Journey</h3>
                  <hr className="my-4 border-gray-200" />
                  <p className="mt-4 text-gray-600 text-justify leading-8" dangerouslySetInnerHTML={{ __html: 'From a Forensic Science student to a transformation coach, Pradip spent years struggling with <b>weight</b> and <b>low confidence</b>. Since childhood, unhealthy eating habits and lack of proper fitness knowledge made it difficult for him to maintain a healthy lifestyle.' }} />
                  <p className="mt-3 text-gray-600 text-justify leading-8" dangerouslySetInnerHTML={{ __html: 'He tried several generic approaches such as random running routines and liquid diets, but nothing worked long term. Everything changed when he discovered the importance of <b>structured nutrition combined with proper exercise</b>.' }} />
                  <p className="mt-3 text-gray-600 text-justify leading-8" dangerouslySetInnerHTML={{ __html: 'By following a disciplined approach to nutrition and fitness, Pradip achieved an incredible transformation — losing <b>28 kg and 7 inches in just 6 months</b>. Along with the physical change, he gained energy, confidence, and a completely new outlook on life.' }} />
                  <p className="mt-3 text-gray-600 text-justify leading-8" dangerouslySetInnerHTML={{ __html: 'Today, he uses his personal experience and logical approach to health to guide others. His mission is to help people move away from confusing fad diets and build <b>sustainable habits</b> that create lifelong wellness.' }} />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-3">
                    <Award className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Certified</div>
                      <div className="text-xs text-gray-500">Nutrition Expert</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-3">
                    <TrendingDown className="h-5 w-5 text-amber-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">28 KG</div>
                      <div className="text-xs text-gray-500">Weight Lost</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-rose-50 p-3">
                    <Heart className="h-5 w-5 text-rose-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">3000+</div>
                      <div className="text-xs text-gray-500">Lives Changed</div>
                    </div>                   
                  </div>
                     <div className="flex items-center gap-3 rounded-xl bg-blue-100 p-3">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">6 Month</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
