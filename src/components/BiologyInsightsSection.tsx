"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

const articles = [
  { title: "Red Blood Cell", excerpt: "There are 150 Billion red blood cells in one ounce of blood. There are 2.4 Trillion red blood cells in one pint of blood. The human body manufactures 17 million red blood cells per second. A red blood cell is around 7 microns in size.", image: "/images/blog/article-1.jpg" },
  { title: "Viruses", excerpt: "The mysterious creatures. Living or non living—this is the dilemma.", image: "/images/blog/article-2.jpeg" },
  { title: "X and Y Chromosomes", excerpt: "X has many genes. The female has 2 X chromosomes so they have two copies of same gene. Y has only one gene called testis maturation gene. The male has 1 X chromosome so they have single copy of the genes.", image: "/images/blog/article-3.png" },
  { title: "Free Planet Earth", excerpt: "Pollution and emission of greenhouse gases lead to global warming and extinction of species.", image: "/images/blog/article-4.jpeg" },
  { title: "Breast Cancer", excerpt: "Breast cancer is the most common cancer amongst females. It's a curable disease if detected early. Combination of surgery, chemotherapy, radiotherapy, hormonal therapy, and targeted monoclonal antibodies therapy give great hope for the patients.", image: "/images/blog/article-5.jpeg" },
  { title: "CRISPR", excerpt: "CRISPR Cas 9—the future for gene editing and gene therapy.", image: "/images/blog/article-6.jpeg" },
  { title: "Fertilization", excerpt: "Sperm penetration into ovum. Digesting zona pellucida by hydrolytic enzyme. Releasing his nucleus into the ovum to fuse with each other.", image: "/images/blog/article-7.jpeg" },
  { title: "Human Heart", excerpt: "Chordae tendineae projecting from papillary muscles of the ventricle to hold atrioventricular valve preventing them from eversion into atria during ventricular systole.", image: "/images/blog/article-8.jpeg" },
  { title: "Interesting Biology Facts", excerpt: "Bacteria are the oldest form of life on Earth. There are more than 1 trillion cells in the human body. The human brain has about 100 billion neurons.", image: "/images/blog/article-9.jpg" },
];

export default function BiologyInsightsSection() {
  return (
    <section
      id="blog"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-400/20 border border-teal-300/40 text-teal-300 text-sm font-medium mb-4">
            <FileText className="w-4 h-4" strokeWidth={2} />
            Articles & Tips
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-4">
            Blog
          </h2>
          <p className="text-[#E2E8F0] text-lg max-w-2xl mx-auto">
            Expert articles and study tips to deepen your understanding of life sciences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href="#"
                className="block rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl hover:bg-white/15 hover:border-white/25 transition-all duration-300 group h-full flex flex-col"
              >
                <div className="p-4 flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <Image
                  src="/images/avatar/herovector.png"
                  alt="Dr. Ragab"
                  width={40}
                  height={40}
                  className="object-cover"
                  sizes="40px"
                />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-[#FFFFFF] text-sm">Dr. Ragab</h5>
                    <p className="text-[#E2E8F0] text-xs">1 year ago</p>
                  </div>
                </div>
                <h3 className="font-semibold text-[#FFFFFF] text-lg px-4 pb-2 text-center group-hover:text-teal-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#E2E8F0] text-sm px-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="relative aspect-video w-full mt-4 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <span className="inline-flex items-center gap-1 text-teal-300 text-sm font-medium p-4 pt-3 group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
