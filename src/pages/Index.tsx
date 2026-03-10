import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Clock, GraduationCap, DollarSign, TrendingDown, Check, Trophy, Handshake, Globe, ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import machineImg from "@/assets/machine-hero.jpg";
import PageTransition from "@/components/PageTransition";

// Floating particles
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-amber/30"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, Math.random() * -200 - 50],
            x: [null, (Math.random() - 0.5) * 100],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const challenges = [
  { icon: Clock, title: "Time-Consuming", desc: "6+ hours per sack when processing peanuts manually" },
  { icon: GraduationCap, title: "Education Impact", desc: "Children miss school to help with harvest processing" },
  { icon: DollarSign, title: "High Labor Costs", desc: "Expensive seasonal labor cuts into farmer profits" },
  { icon: TrendingDown, title: "Post-Harvest Losses", desc: "Up to 30% of yield lost due to inefficient methods" },
];

const checkpoints = [
  "Reduces processing time by 50%",
  "Cuts labor costs by 40%",
  "Processes 12–20 sacks per day",
  "Affordable for smallholder farmers",
];

const stats = [
  { value: 155, label: "Farmers Reached", ghost: "155" },
  { value: 50, label: "Farmers Served in 2 Months", ghost: "50" },
  { value: 6058000, label: "TZS Revenue Generated", ghost: "6M+", suffix: "", display: "6,058,000" },
  { value: 30, label: "Post-Harvest Loss Reduction", ghost: "30%", suffix: "%" },
];

const testimonials = [
  { name: "Juma M.", role: "Peanut Farmer", location: "Dodoma", quote: "The Chambua Karanga has completely changed how I process my harvest. What used to take my family all day now takes just a few hours.", initials: "JM" },
  { name: "Fatima S.", role: "Smallholder Farmer", location: "Kondoa", quote: "My children can now attend school during harvest season. This machine has given our family both time and hope for a better future.", initials: "FS" },
  { name: "Rajab A.", role: "Cooperative Leader", location: "Arusha", quote: "We've seen a 30% reduction in post-harvest losses across our cooperative. The impact on our community has been remarkable.", initials: "RA" },
];

const whyUs = [
  { icon: Trophy, title: "Award-Winning Innovation", desc: "Recognized as Outstanding Youth in Agribusiness 2024" },
  { icon: Handshake, title: "UNDP & Westerwelle Backed", desc: "Supported by world-class institutional partners" },
  { icon: Globe, title: "Community-First Approach", desc: "Built by Tanzanians, for Tanzanian farmers" },
];

export default function Home() {
  const navigate = useNavigate();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-forest root-pattern overflow-hidden">
        <Particles />
        <div className="container-section relative z-10 text-center py-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-6"
          >
            Agritech Innovation from Tanzania
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-cream tracking-tight mb-6 text-balance"
          >
            Empowering Tanzanian{" "}
            <span className="text-amber">Peanut Farmers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10"
          >
            Innovative technology to reduce post-harvest losses and increase productivity for smallholder farmers across Tanzania.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="amber" size="xl" onClick={() => navigate("/services")}>
              Explore Solutions
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => navigate("/about")}>
              Our Story
            </Button>
          </motion.div>
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="scroll-indicator" />
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <SectionHeading
            label="The Problem"
            title="The Challenge Facing Peanut Farmers"
            subtitle="Tanzanian peanut farmers face significant obstacles that reduce their productivity and income."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 border-l-4 border-amber flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1 text-charcoal">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src={machineImg} alt="Chambua Karanga peanut processing machine" className="rounded-xl shadow-2xl w-full" />
              <div className="absolute top-4 right-4 bg-forest/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="font-heading font-bold text-amber text-xl">50% FASTER</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-label mb-3">The Solution</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">
                Meet the Chambua Karanga
              </h2>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Our purpose-built peanut root-breaking machine is designed specifically for Tanzanian smallholder farmers. It dramatically reduces processing time, labor costs, and post-harvest losses.
              </p>
              <div className="space-y-4 mb-8">
                {checkpoints.map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-amber" />
                    </div>
                    <span className="font-body text-charcoal">{text}</span>
                  </motion.div>
                ))}
              </div>
              <Button variant="amber" onClick={() => navigate("/services")}>
                See All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 md:py-28 bg-forest root-pattern">
        <div className="container-section">
          <SectionHeading label="Results" title="Our Impact So Far" light />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center p-6"
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="font-heading font-extrabold text-6xl md:text-8xl text-cream/[0.06]">{stat.ghost}</span>
                </div>
                <div className="relative z-10">
                  <div className="font-heading font-extrabold text-3xl md:text-4xl text-amber mb-2">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="font-body text-sm text-cream/70">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <SectionHeading title="What Farmers Say" />
          <div className="max-w-2xl mx-auto relative">
            <div className="overflow-hidden">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-card rounded-xl p-8 text-center"
              >
                <Quote className="w-8 h-8 text-amber/40 mx-auto mb-4" />
                <p className="font-body text-lg text-charcoal mb-6 italic leading-relaxed">
                  "{testimonials[testimonialIdx].quote}"
                </p>
                <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading font-bold text-amber">{testimonials[testimonialIdx].initials}</span>
                </div>
                <p className="font-heading font-bold text-charcoal">{testimonials[testimonialIdx].name}</p>
                <p className="font-body text-sm text-muted-foreground">{testimonials[testimonialIdx].role}, {testimonials[testimonialIdx].location}</p>
              </motion.div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={() => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors">
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIdx(i)} className={`w-2 h-2 rounded-full transition-colors ${i === testimonialIdx ? "bg-amber" : "bg-border"}`} />
                ))}
              </div>
              <button onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors">
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container-section">
          <SectionHeading title="Why Choose Skyverse" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-xl p-8 text-center hover:shadow-lg hover:shadow-amber/10 transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-amber/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-amber" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-charcoal">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-amber relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)"
        }} />
        <div className="container-section relative z-10 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6 tracking-tight">
            Ready to Transform Your Farming?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" onClick={() => navigate("/contact")}>
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-charcoal text-charcoal hover:bg-charcoal/10" onClick={() => navigate("/about")}>
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
