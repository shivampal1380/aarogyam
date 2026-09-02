import { cn } from "../../utils/formatters";

const colors = {
  green: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  red: "bg-red-100 text-red-700",
  yellow: "bg-amber-100 text-amber-700",
  gray: "bg-gray-100 text-gray-700",
};

export const Badge = ({ children, color = "green", className = "" }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        colors[color],
        className
      )}
    >
      {children}
    </span>
  );
};
