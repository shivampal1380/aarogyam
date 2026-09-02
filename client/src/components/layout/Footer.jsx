import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { getWhatsAppLink } from "../../utils/formatters";

const footerLinks = {};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Heart className="h-5 w-5" fill="white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Aarogyam</span>
                <span className="block text-xs text-gray-400">Wellness Centre</span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Making India Healthier, Fitter & Happier through scientifically guided nutrition and lifestyle coaching.
            </p>
            <div className="space-y-2">
              <a href="mailto:aarogyamwellness@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4" />
                aarogyamwellness@gmail.com
              </a>
              <a href="tel:+919076003571" className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                <Phone className="h-4 w-4" />
                +91 90760 03571
              </a>
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                Navi Mumbai, Maharashtra 410206
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Aarogyam Wellness Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
