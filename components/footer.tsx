'use client';

import { ArrowUpRight, Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: 'Insta',
    href: 'https://www.instagram.com/meisubzzz/',
    isEmail: false,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/urvibhat/',
    isEmail: false,
  },
  {
    name: 'E-mail',
    href: 'mailto:urvibhat.novels@gmail.com',
    isEmail: true,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] dark:border-neutral-900 py-12 mt-20">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-[#6B7280] dark:text-neutral-500 font-mono">
          © {new Date().getFullYear()} Urvi Bhat. All rights reserved.
        </p>

        {/* Social / Direct Links */}
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={!link.isEmail ? '_blank' : undefined}
              rel={!link.isEmail ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1 text-xs font-mono text-[#6B7280] dark:text-neutral-400 hover:text-[#6D28D9] dark:hover:text-[#7C3AED] transition-colors group"
            >
              <span>{link.name}</span>
              {link.isEmail ? (
                <Mail className="w-3 h-3 text-neutral-400 group-hover:text-[#6D28D9] dark:group-hover:text-[#7C3AED] transition-colors" />
              ) : (
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}