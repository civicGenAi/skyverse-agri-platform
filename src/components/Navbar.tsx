import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHeroPage = ["/", "/about", "/services", "/blog", "/contact"].includes(location.pathname);
  const navBg = scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : isHeroPage ? "bg-transparent" : "bg-background";
  const textColor = scrolled ? "text-charcoal" : isHeroPage ? "text-cream" : "text-charcoal";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${scrolled ? "h-16" : "h-20"}`}>
        <div className="container-section h-full flex items-center justify-between">
          <div className={`flex items-center gap-2 cursor-pointer ${textColor}`} onClick={() => navigate("/")}>
            <Sprout className="w-7 h-7 text-amber" />
            <span className="font-heading font-bold text-lg tracking-tight">Skyverse Solutions</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const active = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`relative font-body font-medium text-sm transition-colors ${textColor} hover:text-amber`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button variant="amber" size="default" onClick={() => navigate("/contact")}>
              Get Started
            </Button>
          </div>

          <button className={`md:hidden ${textColor}`} onClick={() => setMobileOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-forest flex flex-col"
          >
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-2 text-cream">
                <Sprout className="w-7 h-7 text-amber" />
                <span className="font-heading font-bold text-lg">Skyverse Solutions</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-cream">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {links.map((link, i) => (
                <motion.button
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => navigate(link.path)}
                  className={`text-left font-heading text-3xl font-bold ${
                    location.pathname === link.path ? "text-amber" : "text-cream"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <div className="p-8">
              <Button variant="amber" size="lg" className="w-full" onClick={() => navigate("/contact")}>
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
