import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FAQS } from "../../utils/constants";

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-sm font-semibold text-gray-900 sm:text-base">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-4 pb-4 text-sm leading-relaxed text-gray-500 sm:px-6 sm:pb-5 sm:text-base">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="bg-gray-50 py-10 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          subtitle="Everything you need to know before registering"
        />

        <div
          ref={ref}
          className={`space-y-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
