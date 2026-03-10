import { motion } from "framer-motion";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, light, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className={`font-heading font-bold text-3xl md:text-4xl tracking-tight mb-4 ${light ? "text-cream" : "text-charcoal"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-base md:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-cream/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
