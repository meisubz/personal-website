import Link from 'next/link';
import React, { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center text-sm font-medium transition-all duration-200 rounded-full px-6 py-3 tracking-tight focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/40';

  const variants = {
    primary: 'bg-[#111111] text-white hover:bg-[#6D28D9] dark:bg-white dark:text-[#111111] dark:hover:bg-[#7C3AED] dark:hover:text-white',
    secondary:
      'bg-transparent text-[#111111] border border-[#E5E7EB] hover:border-[#6D28D9] hover:text-[#6D28D9] dark:text-[#EDEDED] dark:border-neutral-800 dark:hover:border-[#7C3AED] dark:hover:text-[#7C3AED]',
    ghost:
      'bg-transparent text-[#111111] hover:text-[#6D28D9] dark:text-[#EDEDED] dark:hover:text-[#7C3AED] px-0 py-0',
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}