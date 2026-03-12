"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ChevronRight, MessageCircle } from "lucide-react";
import SocialIcons from "./ui/SocialIcons";

const usefulLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#quote", label: "Quote & Video" },
  { href: "#courses", label: "Courses" },
  { href: "#hall-of-fame", label: "Hall of Fame" },
  { href: "#blog", label: "Blog" },
  { href: "#resources", label: "Resources" },
  { href: "#biology-made-fun", label: "App" },
];

const staff = [
  { name: "Miss Gehan", phone: "+201286662938", whatsapp: "201286662938" },
  { name: "Miss Aya", phone: "+201277322656", whatsapp: "201277322656" },
];

export default function Footer() {
  return (
    <footer className="relative py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center text-[#FFFFFF] mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="flex flex-col items-center mb-12">
          <div className="bg-white rounded-lg p-2">
            <Image
              src="/images/logo.png"
              alt="Dr. Ragab Biology"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              unoptimized
            />
          </div>
          <p className="text-[#FFFFFF] font-bold text-lg mt-2">Dr. Mohamed Ragab, M.D.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Col 1 - Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[#FFFFFF] font-bold text-lg mb-4">Contact Details</h3>
            <div className="space-y-3 text-[#E2E8F0]">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[var(--accent-orange)] flex-shrink-0" strokeWidth={2} />
                <a href="tel:+201006632048" className="hover:text-[#FFFFFF] transition-colors">+201006632048</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[var(--accent-orange)] flex-shrink-0" strokeWidth={2} />
                <a href="mailto:Mohamedelshehy19@gmail.com" className="hover:text-[#FFFFFF] transition-colors">Mohamedelshehy19@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--accent-orange)] flex-shrink-0" strokeWidth={2} />
                <span><strong>Address:</strong> Alexandria, Egypt</span>
              </p>
            </div>
            <div className="pt-2">
              <SocialIcons variant="dark" />
            </div>
          </motion.div>

          {/* Col 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[#FFFFFF] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#E2E8F0] hover:text-[#FFFFFF] flex items-center gap-2 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-[var(--accent-orange)] flex-shrink-0" strokeWidth={2} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 - Contact Us via WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-[#FFFFFF] font-bold text-lg mb-4">Contact Us via WhatsApp</h3>
            <div className="space-y-3">
              {staff.map((s, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${s.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 w-full p-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 hover:border-[#25D366]/60 transition-all group"
                >
                  <span className="text-[#E2E8F0] font-medium">{s.name}</span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white font-semibold text-sm group-hover:bg-[#20bd5a] transition-colors">
                    <MessageCircle className="w-5 h-5" strokeWidth={2} />
                    Chat
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 4 - Payment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-[#FFFFFF] font-bold text-lg mb-4">Payment</h3>
            <div className="rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 p-4">
              <div className="space-y-2 text-[#E2E8F0] text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Instapay</span>
                  <span>Dr. Ragab</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="font-medium">Phone</span>
                  <a
                    href="tel:+201006632048"
                    className="text-[var(--accent-orange)] hover:underline"
                  >
                    01006632048
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
