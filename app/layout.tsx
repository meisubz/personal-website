import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono', 
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Urvi Bhat | Portfolio',
  description: 'Personal portfolio and notebook.',
  verification: {
    google: 'googlecb5f136b84a57351', // <--- Add this line
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="bg-[#FAFAFA] text-[#111111] dark:bg-[#0A0A0A] dark:text-[#EDEDED] min-h-screen flex flex-col selection:bg-[#6D28D9]/20 selection:text-[#6D28D9]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}