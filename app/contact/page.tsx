'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ContactLink {
  title: string;
  href: string;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    title: 'Email',
    href: 'mailto:urvibhat.novels@gmail.com', // Update with your preferred email
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/urvibhat/', // Update with your LinkedIn URL
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/meisubzzz/', // Update with your Instagram handle
  },
];

export default function ConnectPage() {
  return (
    <main className="bg-[#0A0A0A] text-[#EDEDED] min-h-screen pt-32 pb-40 px-6 font-sans antialiased selection:bg-[#7C3AED]/30 selection:text-white flex flex-col justify-between">
      <div className="max-w-[700px] w-full mx-auto">
        
        {/* 1. HERO */}
        <section className="text-center space-y-4 mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-light tracking-tight text-white lowercase"
          >
            let&apos;s talk
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-400 font-light text-base md:text-lg leading-relaxed"
          >
            Feel free to reach out.
          </motion.p>
        </section>

        {/* 2. CONTACT CARDS */}
        <section className="space-y-5">
          {CONTACT_LINKS.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group block w-full bg-transparent border border-[#7C3AED]/30 hover:border-[#7C3AED] rounded-2xl p-6 md:p-8 flex items-center justify-between transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
            >
              <span className="text-lg md:text-xl font-light text-white tracking-tight group-hover:text-white transition-colors">
                {link.title}
              </span>
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#7C3AED] transition-transform duration-250 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 shrink-0 ml-4" />
            </motion.a>
          ))}
        </section>

      </div>
    </main>
  );
}