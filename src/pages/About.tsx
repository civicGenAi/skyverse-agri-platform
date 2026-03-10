import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, ArrowRight } from "lucide-react";

const timeline = [
  { year: "2023", event: "Skyverse Solutions founded in Arusha, Tanzania" },
  { year: "2024", event: "Won Outstanding Youth in Agribusiness Award" },
  { year: "2024", event: "Joined Westerwelle Startup Haus Arusha" },
  { year: "2025", event: "Reached 155 farmers across Dodoma & Kondoa" },
  { year: "2025", event: "Revenue of TZS 6,058,000 generated" },
];

const team = [
  { name: "Scolla Jonathan", title: "CEO & Founder", initials: "SJ", desc: "Visionary leader driving Skyverse's mission to transform Tanzanian agriculture." },
  { name: "Christine Haule", title: "Operations Manager", initials: "CH", desc: "Oversees daily operations, logistics, and farmer outreach programs." },
  { name: "Nicholaus Tadei", title: "Tech Lead", initials: "NT", desc: "Leads the engineering and innovation behind the Chambua Karanga machine." },
  { name: "Martha Makanja", title: "Finance Manager", initials: "MM", desc: "Manages financial planning, budgeting, and investor relations." },
  { name: "Regina Mlay", title: "Marketing Lead", initials: "RM", desc: "Drives brand awareness and community engagement across Tanzania." },
  { name: "Innocent Cosmas", title: "Support Lead", initials: "IC", desc: "Ensures excellent after-sales service and farmer training programs." },
];

const partners = [
  { title: "UNDP Tanzania", desc: "FUNGUO Innovation Programme — Supporting agritech innovation across East Africa." },
  { title: "Westerwelle Startup Haus", desc: "Arusha — Providing mentorship, workspace, and networking for impact startups." },
  { title: "2024 Agribusiness Award", desc: "Outstanding Youth in Agribusiness — Recognizing excellence in agricultural innovation." },
];

export default function About() {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <HeroBanner
        title="About Skyverse Solutions"
        breadcrumb={[{ label: "Home", path: "/" }, { label: "About", path: "/about" }]}
      />

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="section-label mb-3">Our Journey</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-6">Our Story</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Skyverse Solutions was born from a deep understanding of the challenges facing Tanzanian peanut farmers. Founded in 2023 in Arusha, our team witnessed firsthand how smallholder farmers spent countless hours manually processing their peanut harvest, losing up to 30% of their yield in the process.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Driven by a mission to empower these communities through technology, we developed the Chambua Karanga — a purpose-built peanut root-breaking machine that reduces processing time by 50% and cuts labor costs by 40%. Today, we serve over 155 farmers across Dodoma and Kondoa, and we're just getting started.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl aspect-[4/3] flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-amber/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-amber text-2xl">SS</span>
                </div>
                <p className="font-heading font-bold text-charcoal text-xl">Team Skyverse</p>
                <p className="font-body text-sm text-muted-foreground">Arusha, Tanzania</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-background rounded-xl p-8 border-l-4 border-amber">
              <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-amber" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-charcoal">Our Mission</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To empower Tanzanian smallholder peanut farmers with affordable, innovative technology that reduces post-harvest losses, saves time, and improves livelihoods across rural communities.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-background rounded-xl p-8 border-l-4 border-forest">
              <div className="w-12 h-12 rounded-lg bg-forest/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-charcoal">Our Vision</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                A future where every smallholder farmer in East Africa has access to post-harvest technology that transforms subsistence farming into sustainable, profitable enterprise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <SectionHeading label="Milestones" title="Our Journey So Far" />
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-amber shrink-0" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border" />}
                </div>
                <div className="pb-8">
                  <span className="font-heading font-bold text-amber text-sm">{item.year}</span>
                  <p className="font-body text-charcoal mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container-section">
          <SectionHeading title="Meet Our Team" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background rounded-xl p-6 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:ring-2 group-hover:ring-amber group-hover:ring-offset-2 group-hover:ring-offset-background">
                  <span className="font-heading font-bold text-amber">{member.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-charcoal mb-1">{member.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-2">{member.title}</p>
                <p className="font-body text-xs text-muted-foreground/70 hidden group-hover:block">{member.desc}</p>
                <div className="flex items-center justify-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3 h-3 text-amber" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <SectionHeading label="Recognition" title="Partnerships & Recognition" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 text-center"
              >
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
