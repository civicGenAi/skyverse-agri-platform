import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Clock, GraduationCap, DollarSign, TrendingDown, Check, Trophy, Handshake, Globe, ArrowRight, ChevronLeft, ChevronRight, Quote, Leaf, Zap, Users, BarChart3 } from "lucide-react";
import machineImg from "@/assets/machine-hero.jpg";
import heroHomeImg from "@/assets/hero-home.jpg";
import PageTransition from "@/components/PageTransition";

// Floating particles
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + Math.random() * 5,
            height: 3 + Math.random() * 5,
            background: `radial-gradient(circle, hsl(37 90% 55% / 0.5), transparent)`,
          }}
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
          }}
          animate={{
            y: [null, Math.random() * -300 - 50],
            x: [null, (Math.random() - 0.5) * 150],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 6,
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

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const challenges = [
  { icon: Clock, title: "Time-Consuming", desc: "6+ hours per sack when processing peanuts manually", stat: "6+ hrs" },
  { icon: GraduationCap, title: "Education Impact", desc: "Children miss school to help with harvest processing", stat: "Lost Days" },
  { icon: DollarSign, title: "High Labor Costs", desc: "Expensive seasonal labor cuts into farmer profits", stat: "40%+" },
  { icon: TrendingDown, title: "Post-Harvest Losses", desc: "Up to 30% of yield lost due to inefficient methods", stat: "30%" },
];

const checkpoints = [
  "Reduces processing time by 50%",
  "Cuts labor costs by 40%",
  "Processes 12–20 sacks per day",
  "Affordable for smallholder farmers",
];

const stats = [
  { value: 155, label: "Farmers Reached", ghost: "155", icon: Users },
  { value: 50, label: "Farmers Served in 2 Months", ghost: "50", icon: Zap },
  { value: 6058000, label: "TZS Revenue Generated", ghost: "6M+", suffix: "", icon: BarChart3 },
  { value: 30, label: "Post-Harvest Loss Reduction", ghost: "30%", suffix: "%", icon: Leaf },
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img src={heroHomeImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/75 to-forest/90" />
        </div>
        <Particles />
        <div className="container-section relative z-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
                className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight mb-6 leading-[1.1]"
              >
                Empowering Tanzanian{" "}
                <span className="relative inline-block">
                  <span className="text-amber">Peanut Farmers</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-amber/40 rounded-full origin-left"
                  />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-body text-lg text-cream/70 max-w-lg mb-8 leading-relaxed"
              >
                Innovative technology to reduce post-harvest losses and increase productivity for smallholder farmers across Tanzania.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="amber" size="xl" onClick={() => navigate("/services")}>
                  Explore Solutions
                </Button>
                <Button variant="heroOutline" size="xl" onClick={() => navigate("/about")}>
                  Our Story
                </Button>
              </motion.div>

              {/* Mini stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-8 mt-12 pt-8 border-t border-cream/10"
              >
                {[
                  { num: "155+", label: "Farmers" },
                  { num: "50%", label: "Faster" },
                  { num: "6M+", label: "TZS Revenue" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-heading font-extrabold text-2xl text-amber">{s.num}</div>
                    <div className="font-body text-xs text-cream/50">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right side: Machine image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img src={machineImg} alt="Chambua Karanga Machine" className="w-full rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-forest/80 backdrop-blur-sm rounded-xl p-4 border border-cream/10">
                    <div className="font-heading font-bold text-amber text-lg">Chambua Karanga</div>
                    <div className="font-body text-sm text-cream/70">Peanut Root-Breaker Machine</div>
                  </div>
                </div>
              </div>
              {/* Floating accent */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-amber rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="font-heading font-bold text-charcoal text-sm">50% FASTER</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
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
                className="group bg-card rounded-xl p-6 border-l-4 border-amber flex gap-4 hover:shadow-lg hover:shadow-amber/5 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-forest/10 flex flex-col items-center justify-center shrink-0 group-hover:bg-forest/15 transition-colors">
                  <item.icon className="w-6 h-6 text-forest" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-heading font-bold text-lg text-charcoal">{item.title}</h3>
                    <span className="font-heading font-extrabold text-amber text-sm">{item.stat}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 md:py-28 bg-card relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
        <div className="container-section relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img src={machineImg} alt="Chambua Karanga peanut processing machine" className="rounded-xl shadow-2xl w-full" />
                {/* Overlapping stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-4 md:right-8 bg-forest rounded-xl p-5 shadow-xl shadow-forest/30"
                >
                  <div className="font-heading font-extrabold text-3xl text-amber">50%</div>
                  <div className="font-body text-xs text-cream/70">Faster Processing</div>
                </motion.div>
              </div>
              {/* Trust indicators */}
              <div className="flex gap-3 mt-10">
                {["UNDP Backed", "Award-Winning", "155+ Farmers"].map((tag, i) => (
                  <span key={i} className="font-body text-xs font-medium text-muted-foreground bg-background px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-label mb-3">The Solution</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">
                Meet the <span className="text-amber">Chambua Karanga</span>
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
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-amber/20 flex items-center justify-center group-hover:bg-amber/30 transition-colors">
                      <Check className="w-4 h-4 text-amber" />
                    </div>
                    <span className="font-body text-charcoal">{text}</span>
                  </motion.div>
                ))}
              </div>
              <Button variant="amber" size="lg" onClick={() => navigate("/services")}>
                See All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 root-pattern" />
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-cream/5" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-cream/5" />
        <div className="container-section relative z-10">
          <SectionHeading label="Results" title="Our Impact So Far" light />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative text-center p-6 rounded-xl bg-cream/5 backdrop-blur-sm border border-cream/5"
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-xl">
                  <span className="font-heading font-extrabold text-5xl md:text-7xl text-cream/[0.04]">{stat.ghost}</span>
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-amber" />
                  </div>
                  <div className="font-heading font-extrabold text-3xl md:text-4xl text-amber mb-2">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="font-body text-sm text-cream/60">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <SectionHeading title="What Farmers Say" subtitle="Real stories from the communities we serve" />
          <div className="max-w-2xl mx-auto relative">
            <div className="overflow-hidden">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-card rounded-2xl p-8 md:p-10 text-center relative"
              >
                <div className="absolute top-6 left-8">
                  <Quote className="w-10 h-10 text-amber/15" />
                </div>
                <p className="font-body text-lg text-charcoal mb-8 italic leading-relaxed relative z-10 pt-4">
                  "{testimonials[testimonialIdx].quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber/30 to-amber/10 flex items-center justify-center border-2 border-amber/20">
                    <span className="font-heading font-bold text-amber text-lg">{testimonials[testimonialIdx].initials}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-bold text-charcoal">{testimonials[testimonialIdx].name}</p>
                    <p className="font-body text-sm text-muted-foreground">{testimonials[testimonialIdx].role}, {testimonials[testimonialIdx].location}</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={() => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card hover:border-amber/30 transition-all">
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIdx(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === testimonialIdx ? "bg-amber w-6" : "bg-border"}`} />
                ))}
              </div>
              <button onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card hover:border-amber/30 transition-all">
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container-section">
          <SectionHeading title="Why Choose Skyverse" subtitle="We're not just building machines — we're building futures" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-background rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-amber/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-amber/20 group-hover:scale-110 transition-all">
                  <item.icon className="w-8 h-8 text-amber" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-charcoal">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-amber relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)"
        }} />
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-dark/20" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-amber-dark/20" />
        <div className="container-section relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal mb-4 tracking-tight">
              Ready to Transform Your Farming?
            </h2>
            <p className="font-body text-charcoal/60 mb-8 max-w-lg mx-auto">
              Join 155+ farmers already benefiting from the Chambua Karanga machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" onClick={() => navigate("/contact")}>
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-charcoal/30 text-charcoal hover:bg-charcoal/10" onClick={() => navigate("/about")}>
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
