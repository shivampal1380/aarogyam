import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const SectionHeading = ({ badge, title, subtitle, center = true, badgeClassName = "" }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className={`mb-3 inline-block rounded-full bg-emerald-100 px-7 py-3 text-xl font-extrabold text-emerald-700 sm:text-2xl lg:text-3xl ${badgeClassName}`}>
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
};
