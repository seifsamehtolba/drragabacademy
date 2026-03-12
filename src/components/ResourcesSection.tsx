"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Download } from "lucide-react";

const resources = [
  {
    title: "Worksheet 1 & 2 Marking Scheme",
    category: "O. L. CAMB.",
    date: "1 year ago",
    url: "https://drragabacademy.com/storage/pepares/2024-12-12/WORKSHEET1&2OLMARKINGSCHEME_1734042422.pdf",
  },
  {
    title: "Worksheet 1 & 2",
    category: "O. L. CAMB.",
    date: "1 year ago",
    url: "https://drragabacademy.com/storage/pepares/2024-12-12/Worksheet-Note1&2OL2_1734041579.pdf",
  },
  {
    title: "Test Paper",
    category: "O. L. CAMB.",
    date: "1 year ago",
    url: "https://drragabacademy.com/storage/pepares/2024-11-15/ThreejsEssentials_1731660795.pdf",
  },
];

export default function ResourcesSection() {
  return (
    <section
      id="resources"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#E2E8F0] text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" strokeWidth={2} />
            Study Materials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-4">
            Resources
          </h2>
          <p className="text-[#E2E8F0] text-lg max-w-2xl mx-auto">
            Past papers, worksheets, and mark schemes to support your learning journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {resources.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl hover:bg-white/15 hover:border-white/25 transition-all duration-300 h-full flex flex-col">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-cyan-300" strokeWidth={2} />
                </div>
                <span className="inline-block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="font-semibold text-[#FFFFFF] text-lg">{item.title}</h3>
                <p className="text-[#E2E8F0] text-sm mt-1">{item.date}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-w-[140px] h-11 mt-4 px-4 rounded-lg font-semibold text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all"
                >
                  <Download className="w-4 h-4" strokeWidth={2} />
                  Get Paper
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
