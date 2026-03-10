import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
  breadcrumb?: { label: string; path: string }[];
  variant?: "green" | "amber";
}

export default function HeroBanner({ title, breadcrumb, variant = "green" }: Props) {
  const navigate = useNavigate();
  const bg = variant === "amber"
    ? "bg-gradient-to-br from-amber to-amber-dark"
    : "bg-forest root-pattern";

  return (
    <section className={`${bg} pt-32 pb-20 md:pt-40 md:pb-28`}>
      <div className="container-section">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`font-heading font-bold text-4xl md:text-5xl tracking-tight ${variant === "amber" ? "text-charcoal" : "text-cream"}`}
        >
          {title}
        </motion.h1>
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1 mt-4"
          >
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className={`w-3 h-3 ${variant === "amber" ? "text-charcoal/50" : "text-cream/50"}`} />}
                <button
                  onClick={() => navigate(item.path)}
                  className={`font-body text-sm ${
                    i === breadcrumb.length - 1
                      ? variant === "amber" ? "text-charcoal/70" : "text-cream/70"
                      : "text-amber hover:underline"
                  }`}
                >
                  {item.label}
                </button>
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
