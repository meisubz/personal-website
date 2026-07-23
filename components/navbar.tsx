'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Journey', href: '/about' },
  { name: 'Notebook', href: '/writing' },
  { name: 'Connect', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-[#E5E7EB]/50 dark:border-neutral-800/50">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand/Logo */}
        <Link 
          href="/" 
          className="font-bold text-lg text-[#111111] dark:text-[#EDEDED] hover:opacity-80 transition-opacity"
        >
          Urvi<span className="text-[#6D28D9] dark:text-[#7C3AED]">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 md:gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#6D28D9] dark:text-[#7C3AED]'
                    : 'text-[#6B7280] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-[#EDEDED]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}