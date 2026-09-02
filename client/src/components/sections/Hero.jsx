import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Zap, MessageCircle, CheckCircle, Calendar, Clock, Video } from "lucide-react";
import { Button } from "../ui/Button";
import { useCountdown } from "../../hooks/useCountdown";
import { WORKSHOP, asset } from "../../utils/constants";
import { getWhatsAppLink } from "../../utils/formatters";

const CountdownUnit = ({ value, label }) => (
  <div className="text-center">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-xl font-bold text-emerald-700 shadow-sm sm:h-14 sm:w-14 sm:text-2xl">
      {value}
    </div>
    <span className="mt-1.5 block text-[11px] font-medium text-gray-500 sm:text-xs">{label}</span>
  </div>
);

export const Hero = () => {
  const countdown = useCountdown(WORKSHOP.registrationDeadline);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-200/25 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-100/40 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #059669 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-6 pb-4 sm:px-6 sm:py-18 lg:px-8 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid items-center gap-8 pt-4 pb-4 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >

            <h1
              className="font-extrabold leading-[1.08] text-gray-900"
              style={{ fontSize: "clamp(28px, 5vw, 58px)" }}
            >
              Transform Your Health &<br />
              <span className="text-emerald-600">Lose Weight Naturally</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
               className="mt-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
            >
              {["Lose Weight", "Reverse Pre-Diabetes", "Build Healthy Habits"].map((tag) => (
                <span key={tag} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 sm:text-sm">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 max-w-lg text-sm text-gray-600 sm:text-lg"
              style={{ lineHeight: 1.7 }}
            >
              <strong className="text-gray-900">Get Personalized Nutrition Guidance from a Certified Nutritionist</strong>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 max-w-lg text-sm text-gray-500 sm:text-base"
              style={{ lineHeight: 1.7 }}
            >
              Whether you want to lose weight, control blood sugar, improve your energy, or develop healthy eating habits, I'll help you with a practical, science-based nutrition plan that fits your lifestyle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <Link to="/register">
                <Button size="lg" className="animate-pulse-glow animate-shimmer">
                  <Zap className="h-5 w-5" />
                  Register Now — ₹99
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg">
                  <MessageCircle className="h-5 w-5" />
                  Ask on WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-emerald-200/30 blur-[50px] animate-[pulse_4s_ease-in-out_infinite]" />
              <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-emerald-100/40 to-green-100/30 blur-[70px] animate-[pulse_6s_ease-in-out_infinite_1s]" />

              <div className="relative hidden sm:block">
                <svg className="absolute -inset-7 h-[calc(100%+56px)] w-[calc(100%+56px)]" viewBox="0 0 200 200" style={{ animation: "rotateRing 15s linear infinite" }}>
                  <defs>
                    <linearGradient id="dGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="90" fill="none" stroke="url(#dGrad1)" strokeWidth="2" strokeDasharray="10 6" strokeLinecap="round" />
                </svg>
                <svg className="absolute -inset-10 h-[calc(100%+80px)] w-[calc(100%+80px)]" viewBox="0 0 200 200" style={{ animation: "rotateRingReverse 22s linear infinite" }}>
                  <defs>
                    <linearGradient id="dGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6ee7b7" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#dGrad2)" strokeWidth="1.5" strokeDasharray="18 12" strokeLinecap="round" opacity="0.5" />
                </svg>
                <div
                  className="relative overflow-hidden rounded-full border-[3px] border-emerald-200 shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
                  style={{ animation: "float3d 6s ease-in-out infinite", transformStyle: "preserve-3d", perspective: "800px" }}
                >
                  <img
                    src={asset("/pradeep-half-banner.png")}
                    alt="Pradip Kadam — Nutritionist and Pre-Diabetes Weight Loss Coach"
                    className="w-full max-w-md aspect-square object-cover lg:max-w-lg"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-6 inset-x-0 mx-6 rounded-2xl border border-emerald-100 bg-white/90 px-6 py-5 text-center shadow-xl shadow-emerald-900/5 backdrop-blur-xl sm:-bottom-7 sm:mx-8">
                  <p className="text-xl font-extrabold text-gray-900">Pradip Kadam</p>
                  <p className="mt-1 text-sm font-bold text-emerald-600">Nutritionist & Pre-Diabetes Weight Loss Coach</p>
                </div>
              </div>

              <div className="relative sm:hidden">
                <svg className="absolute -inset-5 h-[calc(100%+40px)] w-[calc(100%+40px)]" viewBox="0 0 200 200" style={{ animation: "rotateRing 15s linear infinite" }}>
                  <defs>
                    <linearGradient id="mGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="92" fill="none" stroke="url(#mGrad1)" strokeWidth="1.5" strokeDasharray="8 5" strokeLinecap="round" />
                </svg>
                <svg className="absolute -inset-7 h-[calc(100%+56px)] w-[calc(100%+56px)]" viewBox="0 0 200 200" style={{ animation: "rotateRingReverse 22s linear infinite" }}>
                  <defs>
                    <linearGradient id="mGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6ee7b7" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="97" fill="none" stroke="url(#mGrad2)" strokeWidth="1" strokeDasharray="14 10" strokeLinecap="round" opacity="0.4" />
                </svg>
                <div className="overflow-hidden rounded-full border-[3px] border-emerald-200 shadow-[0_10px_40px_rgba(16,185,129,0.15)]">
                  <img
                    src={asset("/pradeep-half-banner.png")}
                    alt="Pradip Kadam — Nutritionist and Pre-Diabetes Weight Loss Coach"
                    className="w-full max-w-xs aspect-square object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-6 inset-x-0 mx-4 rounded-2xl border border-emerald-100 bg-white/90 px-5 py-4 text-center shadow-xl shadow-emerald-900/5 backdrop-blur-xl">
                  <p className="text-xl font-extrabold text-gray-900">Pradip Kadam</p>
                  <p className="mt-0.5 text-xs font-bold text-emerald-600">Nutritionist & Pre-Diabetes Weight Loss Coach</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};
