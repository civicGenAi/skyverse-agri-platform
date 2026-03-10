import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Wrench, ShoppingCart, Settings, BookOpen, Phone, Truck, Cog, Check, Star } from "lucide-react";
import heroServicesImg from "@/assets/hero-services.jpg";

const tabs = [
  {
    id: "rental", label: "Machine Rental", icon: Wrench,
    title: "Machine Rental Service",
    desc: "Rent our Chambua Karanga machine for your harvest season without the upfront cost of purchasing.",
    points: ["Pay per sack processed — only 2,000 TZS/sack", "Machine delivered to your location", "Operator training included", "Flexible rental periods"],
  },
  {
    id: "sales", label: "Machine Sales", icon: ShoppingCart,
    title: "Purchase Your Machine",
    desc: "Own a Chambua Karanga machine outright and benefit from unlimited processing throughout every season.",
    points: ["Full ownership at 1,800,000 TZS", "One-year warranty included", "Free installation and setup", "Ongoing technical support"],
  },
  {
    id: "maintenance", label: "Maintenance", icon: Settings,
    title: "Maintenance & Support",
    desc: "Keep your machine running at peak performance with our annual maintenance and repair service.",
    points: ["Annual service for 100,000 TZS/year", "Genuine replacement parts", "On-site repair within 48 hours", "Preventive maintenance schedule"],
  },
  {
    id: "training", label: "Farmer Training", icon: BookOpen,
    title: "Farmer Training Programs",
    desc: "Comprehensive training programs to ensure farmers can operate the machine safely and efficiently.",
    points: ["Hands-on machine operation training", "Safety and maintenance best practices", "Post-harvest handling techniques", "Group and individual sessions available"],
  },
];

const steps = [
  { icon: Phone, title: "Contact Us", desc: "Reach out via phone, email, or our contact form" },
  { icon: Truck, title: "Schedule Delivery", desc: "We'll arrange delivery to your farm location" },
  { icon: Cog, title: "Start Processing", desc: "Begin processing peanuts immediately" },
];

const pricing = [
  { name: "Rental", price: "2,000 TZS", unit: "/sack", features: ["Pay per use", "Operator included", "Delivered to location", "Flexible periods"], popular: true, highlight: false },
  { name: "Purchase", price: "1,800,000 TZS", unit: "", features: ["Full ownership", "1-year warranty", "Free installation", "Technical support"], popular: false, highlight: true },
  { name: "Maintenance", price: "100,000 TZS", unit: "/year", features: ["Annual service", "Genuine parts", "48hr response", "Preventive care"], popular: false, highlight: false },
  { name: "Training", price: "25,000 TZS", unit: "/farmer", features: ["Hands-on training", "Safety protocols", "Best practices", "Certification"], popular: false, highlight: false },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <PageTransition>
      <HeroBanner
        title="Our Services"
        subtitle="Innovative solutions designed to empower Tanzanian peanut farmers"
        variant="amber"
        bgImage={heroServicesImg}
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]}
      />

      {/* Tabs */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <SectionHeading label="What We Offer" title="Innovative Solutions for Farmers" />
          <div className="relative flex overflow-x-auto gap-2 mb-10 pb-2">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-full font-body font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === i ? "bg-forest text-cream" : "bg-card text-muted-foreground hover:text-charcoal"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-forest/10 flex items-center justify-center mb-4">
                    {(() => { const Icon = tabs[activeTab].icon; return <Icon className="w-7 h-7 text-forest" />; })()}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-charcoal mb-3">{tabs[activeTab].title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">{tabs[activeTab].desc}</p>
                  <Button variant="amber" onClick={() => navigate("/contact")}>
                    Inquire Now
                  </Button>
                </div>
                <div className="space-y-3">
                  {tabs[activeTab].points.map((point, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-amber" />
                      </div>
                      <span className="font-body text-charcoal">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container-section">
          <SectionHeading label="Process" title="How It Works" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-amber/30" />
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="w-7 h-7 text-amber" />
                </div>
                <span className="font-heading font-bold text-amber text-sm">Step {i + 1}</span>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <SectionHeading label="Investment" title="Our Pricing" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl p-6 border transition-shadow ${
                  plan.highlight
                    ? "bg-forest text-cream border-amber shadow-lg shadow-amber/20 relative -translate-y-2"
                    : "bg-card border-border"
                }`}
              >
                {plan.popular && (
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-3 h-3 text-amber fill-amber" />
                    <span className="section-label text-[10px]">Most Popular</span>
                  </div>
                )}
                <h3 className={`font-heading font-bold text-lg mb-2 ${plan.highlight ? "text-cream" : "text-charcoal"}`}>{plan.name}</h3>
                <div className="mb-4">
                  <span className={`font-heading font-extrabold text-2xl ${plan.highlight ? "text-amber" : "text-charcoal"}`}>{plan.price}</span>
                  <span className={`font-body text-sm ${plan.highlight ? "text-cream/60" : "text-muted-foreground"}`}>{plan.unit}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Check className={`w-4 h-4 ${plan.highlight ? "text-amber" : "text-amber"}`} />
                      <span className={`font-body text-sm ${plan.highlight ? "text-cream/80" : "text-muted-foreground"}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant={plan.highlight ? "amber" : "outline"}
                  className="w-full"
                  onClick={() => navigate("/contact")}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)" }} />
        <div className="container-section relative z-10 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">Ready to Get Started?</h2>
          <Button variant="default" size="lg" onClick={() => navigate("/contact")}>Contact Us Today</Button>
        </div>
      </section>
    </PageTransition>
  );
}
