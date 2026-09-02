import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const RegistrationCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="hero-gradient py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your Life?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Join 3000+ people who have already transformed their lives. Register for our workshop at just ₹99.
          </p>

          <div className="mt-10">
            <Link to="/register">
              <Button size="xl" className="animate-pulse-glow animate-shimmer">
                Book Your Seat @ ₹99
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Instant Confirmation", "Secure Payment"].map((text) => (
              <span key={text} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                ✓ {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
