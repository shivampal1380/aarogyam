import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { asset } from "../../utils/constants";

const stories = [
  {
    src: asset("/Ankita.png"),
    alt: "Ankita",
    loss: "14 kg Lost",
    duration: "6 Months",
    text: "I am 53, transforming my health from <b>fat to fit</b>. By following a <b>balanced diet</b>, avoiding <b>processed foods</b>, and staying consistent with <b>walking and strength training</b>, I lost <b>14 kg in 6 months</b> and reduced significant belly fat. Today, I can run a <b>10 km marathon</b> and hold a <b>4–5 minutes plank hold</b>. This journey taught me that <b>commitment and self-care</b> truly change life.\n— <b>Ankita</b>",
  },
  {
    src: asset("/Sampada.png"),
    alt: "Sampada",
    loss: "11.6 kg Lost",
    duration: "3 Months",
    text: "I was suffering from <b>severe back pain</b>, and my doctor even advised me <b>not to bend</b>. Daily household work had become very difficult.\n\nIn just <b>3 months</b>, I lost <b>11.6 kg</b>, and my <b>back pain improved significantly</b>. Today, I can comfortably do all my <b>household work without fear</b>. This journey gave me not just weight loss, but <b>relief and confidence</b>.\n— <b>Sampada</b>",
  },
  {
    src: asset("/Pinky.png"),
    alt: "Pinky",
    loss: "40 kg Lost",
    duration: "11 Months",
    text: "I joined this community after seeing my brother <b>lose 40 kg</b>. At that time, I weighed <b>98.4 kg</b> and decided to change my life. With the guidance of Coaches <b>Anita and Pradip</b>, I improved my habits and in <b>11 months lost 40 kg</b>, reaching <b>59 kg</b>. Now I feel <b>lighter, confident, and focused</b> on staying healthy for life. 💪\n— <b>Pinky</b>",
  },
  {
    src: asset("/Megha-Patil.png"),
    alt: "Megha Patil",
    loss: "17 kg Lost",
    duration: "5 Months",
    text: "In just <b>5 months</b>, I lost <b>17 kg and 9 inches</b> through consistent efforts and the right guidance. Along with weight loss, my <b>energy levels improved, breathlessness reduced</b>, and I feel <b>more confident and healthy</b>.\n\nThis journey proves that with <b>discipline and consistency</b>, lasting transformation is possible.\n— <b>Megha Patil</b>",
  },
  {
    src: asset("/Maruti-Kaka.png"),
    alt: "Maruti Kaka",
    loss: "23 kg Lost",
    duration: "6 Months",
    text: "At the age of <b>65</b>, I decided to transform my health. In just <b>6 months</b>, I lost <b>23 kg</b> and reduced <b>5–6 inches from my waist</b>, which greatly improved my health and confidence. With my doctor's guidance, I was able to <b>stop insulin injections</b> and switch to oral medication.\n\nThis journey has proved to me that with <b>discipline, consistency, and the right support</b>, healthy transformation is possible at any age.\n— <b>Maruti Kaka</b>",
  },
  {
    src: asset("/Manisha.png"),
    alt: "Manisha",
    loss: "22 kg Lost",
    duration: "Maintained",
    text: "I never imagined I could transform my life like this. I lost <b>22 kg</b>, overcame <b>depression</b>, got rid of <b>constant body pain</b>, and today I can proudly complete <b>100 Surya Namaskars</b> without any pain. <b>NOW I am maintaining this weight from 2024.</b> I feel <b>healthier, stronger, and more confident</b> than ever. Thank you for guiding me towards a new and healthier life!\n— <b>Manisha</b>",
  },
  {
    src: asset("/Anju-Yadav.jpg"),
    alt: "Anju Yadav",
    loss: "29 kg Lost",
    duration: "Journey",
    text: "Before joining the community, I was suffering from <b>knee pain, cervical issues, and constant back pain</b>. Walking and climbing stairs were difficult, and I felt <b>tired most of the time</b>.\n\nAfter becoming a part of the community, my life changed completely. Today, I can easily <b>walk 4–5 km daily</b>, my pain has reduced, and I feel <b>energetic throughout the day</b>.\n\nMy biggest achievement is losing <b>29 kg of weight</b>. Heartfelt thanks to <b>Coach Anita and Pradip</b> from Panvel for their constant guidance and support.\n\nIf I can do it, anyone can. 💛\n— <b>Anju Yadav</b>",
  },
  {
    src: asset("/Anita-Kadam.jpeg"),
    alt: "Anita Kadam",
    loss: "10 kg Gained",
    duration: "8 Months",
    text: "When I started my journey, I was struggling with <b>poor health, low energy, and digestive issues</b>. With the right <b>nutrition, nutritional supplements, and consistent guidance</b>, my body gradually healed. Over the next <b>8 months</b>, I gained <b>10 kg in a healthy way</b>, my <b>digestion improved</b>, and I regained my <b>strength and confidence</b>. Today, I feel <b>healthier, more energetic, and happier</b> than ever. I'm truly grateful for this <b>life-changing transformation</b>.\n— <b>Anita</b>",
  },
  {
    src: asset("/Dakshata-Pawar.jpeg"),
    alt: "Dakshata Pawar",
    loss: "22 kg Lost",
    duration: "13 Years",
    text: "I was diagnosed with <b>PCOD at the age of 13</b> and struggled with it for years. With the right <b>exercise & nutrition, some nutritional supplements, and consistent guidance</b>, I lost <b>22 kg</b>. At the age of <b>26</b>, I got my <b>first natural menstrual cycle</b>—a life-changing milestone for me. Today, I feel <b>energetic, confident</b>, and I'm successfully <b>maintaining my weight</b> even after my first child. This journey has truly <b>transformed my life</b>.\n— <b>Dakshata Pawar</b>",
  },
];

const testimonialText =
  "I am 53, transforming my health from <b>fat to fit</b>. By following a <b>balanced diet</b>, avoiding <b>processed foods</b>, and staying consistent with <b>walking and strength training</b>, I lost <b>14 kg in 6 months</b> and reduced significant belly fat. Today, I can run a <b>10 km marathon</b> and hold a <b>4–5 minutes plank hold</b>. This journey taught me that <b>commitment and self-care</b> truly change life.\n— <b>Ankita</b>";

export const SuccessStories = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [perView, setPerView] = useState(2);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  const handleResize = () => {
    const newPerView = window.innerWidth < 640 ? 1 : 2;
    setPerView(newPerView);
    const newMax = stories.length - newPerView;
    setCurrent((prev) => Math.min(prev, newMax));
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = stories.length;
  const maxIndex = total - perView;

  const slide = (dir) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next > maxIndex) return 0;
      if (next < 0) return maxIndex;
      return next;
    });
  };

  const goTo = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(Math.min(index, maxIndex));
  };

  useEffect(() => {
    const timer = setInterval(() => slide(1), 4000);
    return () => clearInterval(timer);
  }, [perView, isTransitioning]);

  const handleTransitionEnd = () => setIsTransitioning(false);

  return (
    <section className="bg-gray-50 py-14 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Success Stories"
          subtitle="Real transformations from real people"
        />

        <div
          ref={ref}
            className={`mx-auto mt-6 max-w-4xl transition-all duration-700 sm:mt-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                ref={trackRef}
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{
                  transform: `translateX(-${current * (100 / perView)}%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {stories.map((story, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2.5"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <div className="group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/5">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={story.src}
                          alt={story.alt}
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="px-4 pt-3 flex items-center gap-2">
                        <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                          {story.loss}
                        </span>
                        {story.duration && (
                          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">
                            {story.duration}
                          </span>
                        )}
                      </div>
                      <div className="relative p-4 pt-2">
                        <Quote className="absolute top-2 right-3 h-5 w-5 text-emerald-100" />
                      <p className="relative text-xs leading-relaxed text-gray-500 sm:text-sm whitespace-pre-line" dangerouslySetInnerHTML={{ __html: story.text || testimonialText }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => slide(-1)}
              className="absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition-all hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => slide(1)}
              className="absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition-all hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i
                    ? "w-6 bg-emerald-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
