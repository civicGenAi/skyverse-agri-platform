import { useNavigate } from "react-router-dom";
import { Sprout, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-forest text-cream pb-20 md:pb-0">
      <div className="container-section py-16">
        <div className="flex items-center gap-2 mb-10">
          <Sprout className="w-7 h-7 text-amber" />
          <span className="font-heading font-bold text-xl">Skyverse Solutions</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-body text-sm text-cream/70 leading-relaxed">
              Skyverse Solutions is a Tanzanian agritech startup transforming peanut farming through innovative machinery and community-first technology.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="font-body text-sm text-cream/70 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-cream/70">
                <Phone className="w-4 h-4 text-amber" /> +255 760 804 371
              </li>
              <li className="flex items-center gap-2 text-sm text-cream/70">
                <Mail className="w-4 h-4 text-amber" /> info@skyverse.co.tz
              </li>
              <li className="flex items-start gap-2 text-sm text-cream/70">
                <MapPin className="w-4 h-4 text-amber mt-0.5" /> Arusha, Tanzania — Twende Nane Nane Grounds
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/50">© 2026 Skyverse Solutions. All rights reserved.</p>
          <p className="font-body text-xs text-cream/50">Designed & Developed by Skyverse Solutions</p>
        </div>
      </div>
    </footer>
  );
}
