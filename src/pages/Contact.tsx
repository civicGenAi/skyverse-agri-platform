import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ChevronDown, Send } from "lucide-react";
import heroContactImg from "@/assets/hero-contact.jpg";

const faqs = [
  { q: "How does the rental work?", a: "Our rental service charges 2,000 TZS per sack processed. We deliver the machine to your location, provide an operator, and collect it after your processing is complete. Flexible rental periods are available for individual farmers and cooperatives." },
  { q: "Can I buy the machine outright?", a: "Yes! The Chambua Karanga is available for purchase at 1,800,000 TZS. This includes a one-year warranty, free installation, setup, and ongoing technical support." },
  { q: "Do you deliver outside Arusha?", a: "Absolutely. We currently serve farmers across Dodoma, Kondoa, and surrounding regions. Contact us to discuss delivery to your specific location — we're expanding our reach every season." },
  { q: "What training is included?", a: "Every rental and purchase includes basic operator training at no additional cost. We also offer comprehensive farmer training programs at 25,000 TZS per farmer, covering machine operation, safety, and post-harvest best practices." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageTransition>
      <HeroBanner
        title="Get In Touch"
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Contact", path: "/contact" }]}
      />

      {/* Contact */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading font-bold text-2xl text-charcoal mb-6">Send Us a Message</h2>
              <div className="space-y-4">
                {[
                  { key: "name", label: "Full Name", type: "text" },
                  { key: "phone", label: "Phone Number", type: "tel" },
                  { key: "email", label: "Email Address", type: "email" },
                  { key: "subject", label: "Subject", type: "text" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="font-body text-sm font-medium text-charcoal mb-1 block">{field.label}</label>
                    <input
                      type={field.type}
                      value={(form as any)[field.key]}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      className="w-full h-12 px-4 rounded-lg bg-card border border-border font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-amber/50 transition-shadow"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-body text-sm font-medium text-charcoal mb-1 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-amber/50 transition-shadow resize-none"
                  />
                </div>
                <Button variant="amber" size="lg" className="w-full" onClick={handleSubmit}>
                  {submitted ? "Message Sent!" : <>Send Message <Send className="w-4 h-4" /></>}
                </Button>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading font-bold text-2xl text-charcoal mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: "Phone", value: "+255 760 804 371" },
                  { icon: Mail, label: "Email", value: "info@skyverse.co.tz" },
                  { icon: MapPin, label: "Address", value: "Arusha, Tanzania — Twende Nane Nane Grounds" },
                  { icon: Clock, label: "Office Hours", value: "Mon–Fri: 8:00 AM – 5:00 PM EAT" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-amber" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-body font-medium text-charcoal">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-card rounded-xl p-8 text-center border border-border">
                <MapPin className="w-10 h-10 text-amber mx-auto mb-3" />
                <h3 className="font-heading font-bold text-lg text-charcoal mb-1">Visit Us in Arusha</h3>
                <p className="font-body text-sm text-muted-foreground">Twende Nane Nane Grounds, Arusha, Tanzania</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container-section max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-heading font-bold text-charcoal">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-5 pb-5 font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
