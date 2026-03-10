import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import HeroBanner from "@/components/HeroBanner";
import { ArrowRight } from "lucide-react";
import heroBlogImg from "@/assets/hero-blog.jpg";

const categories = ["Technology", "Community", "Innovation", "Farming Tips", "News", "Impact"];

const posts = [
  { title: "How the Chambua Karanga is Changing Peanut Farming", excerpt: "An in-depth look at how our peanut root-breaking machine is transforming the lives of smallholder farmers in Dodoma.", category: "Technology", date: "Feb 15, 2025", author: "Scolla Jonathan", featured: true },
  { title: "5 Tips for Reducing Post-Harvest Losses", excerpt: "Practical advice every peanut farmer should know to maximize their harvest yields.", category: "Farming Tips", date: "Feb 10, 2025", author: "Nicholaus Tadei" },
  { title: "Skyverse Joins Westerwelle Startup Haus", excerpt: "We're excited to announce our partnership with the prestigious Westerwelle Foundation.", category: "News", date: "Jan 28, 2025", author: "Regina Mlay" },
  { title: "The Future of Agritech in East Africa", excerpt: "Exploring the emerging trends and technologies shaping agriculture across the region.", category: "Innovation", date: "Jan 15, 2025", author: "Christine Haule" },
  { title: "Meet the Farmers: Stories from Kondoa", excerpt: "Real stories from the farmers who are using our technology to build better futures.", category: "Community", date: "Jan 5, 2025", author: "Martha Makanja" },
  { title: "Understanding Peanut Processing Economics", excerpt: "A breakdown of the costs, savings, and ROI of mechanized peanut processing.", category: "Impact", date: "Dec 20, 2024", author: "Innocent Cosmas" },
];

const featured = posts[0];
const grid = posts.slice(1);

export default function Blog() {
  return (
    <PageTransition>
      <HeroBanner
        title="From the Field"
        subtitle="Stories, insights, and updates from Skyverse Solutions"
        bgImage={heroBlogImg}
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Blog", path: "/blog" }]}
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl overflow-hidden mb-12 cursor-pointer group"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-forest/10 aspect-[16/10] md:aspect-auto flex items-center justify-center">
                <span className="font-heading font-bold text-forest/20 text-6xl">SS</span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="section-label mb-3">{featured.category}</span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-charcoal mb-4 group-hover:text-forest transition-colors">{featured.title}</h2>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-muted-foreground">{featured.date} · {featured.author}</span>
                  <span className="flex items-center gap-1 text-amber font-body font-medium text-sm group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
              >
                <div className="bg-forest/5 aspect-[16/10] flex items-center justify-center overflow-hidden">
                  <span className="font-heading font-bold text-forest/10 text-4xl group-hover:scale-110 transition-transform">SS</span>
                </div>
                <div className="p-6">
                  <span className="section-label text-[10px] mb-2 block">{post.category}</span>
                  <h3 className="font-heading font-bold text-lg text-charcoal mb-2 group-hover:text-forest transition-colors">{post.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                    <span className="flex items-center gap-1 text-amber font-body font-medium text-xs group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
