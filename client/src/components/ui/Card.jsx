import { cn } from "../../utils/formatters";

export const Card = ({ children, className = "", hover = false, glass = false, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm",
        hover && "card-hover cursor-pointer",
        glass && "glass",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
