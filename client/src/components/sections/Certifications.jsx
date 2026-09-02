import { useState } from "react";
import { Award, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { asset } from "../../utils/constants";

const certificates = [
  { src: asset("/cert-1.png"), alt: "Certification 1" },
  { src: asset("/cert-2.jpg"), alt: "Certification 2" },
  { src: asset("/cert-3.jpg"), alt: "Certification 3" },
  { src: asset("/cert-4.jpg"), alt: "Certification 4" },
];

export const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [preview, setPreview] = useState(null);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Certifications"
          subtitle="Recognized qualifications that reflect our commitment to excellence"
        />

        <div
          ref={ref}
          className={`mx-auto mt-12 max-w-5xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/5"
                onClick={() => setPreview(cert)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm">
                  <Award className="h-3 w-3" />
                  Certified
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-h-[85vh] max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={preview.src}
                alt={preview.alt}
                className="max-h-[85vh] max-w-[85vw] rounded-2xl object-contain shadow-2xl"
              />
              <button
                onClick={() => setPreview(null)}
                className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
