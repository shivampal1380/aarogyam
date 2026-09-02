import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const SectionHeading = ({ badge, title, subtitle, center = true, badgeClassName = "" }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`mb-6 transition-all duration-700 sm:mb-12 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className={`mb-2 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-base font-extrabold text-emerald-700 sm:px-7 sm:py-3 sm:text-2xl lg:text-3xl ${badgeClassName}`}>
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mx-auto mt-2 max-w-2xl text-base text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
};
