'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDown } from 'lucide-react';

const beliefs = [
  'Technology should make us more human.',
  'Curiosity is a better compass than certainty.',
  'Great products begin with empathy.',
  'We become the stories we tell ourselves.',
  'Progress means little if it costs our humanity.',
];

const thoughts = [
  {
    text: 'Why is loneliness increasing despite constant digital connection?',
  },
  {
    text: 'What subtle design details make a software product feel fundamentally trustworthy?',
  },
  {
    text: 'Can modern AI make us wiser, or does it only make us more capable?',
  },
  {
    text: 'Why do certain conversations stay with us for years while others vanish instantly?',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function HomePage() {
  const line1 = 'Most people are asking what AI can do.';
  const line2 = "I'm more interested in what it changes about us.";

  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;

    const timer1 = setInterval(() => {
      if (index1 < line1.length) {
        setDisplayedText1(line1.slice(0, index1 + 1));
        index1++;
      } else {
        clearInterval(timer1);
        setTimeout(() => {
          const timer2 = setInterval(() => {
            if (index2 < line2.length) {
              setDisplayedText2(line2.slice(0, index2 + 1));
              index2++;
            } else {
              clearInterval(timer2);
              setTimeout(() => {
                setTypingComplete(true);
              }, 400);
            }
          }, 40);
        }, 500);
      }
    }, 45);

    return () => {
      clearInterval(timer1);
    };
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-6 pt-16 md:pt-24 pb-12 space-y-32">
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center pt-16 space-y-12">
        {/* Section 1: Heading & Typewriter */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111111] dark:text-[#EDEDED] leading-[1.2]">
            The future isn&apos;t just something we build. It&apos;s something we become.
          </h1>

          <div className="text-xl md:text-2xl font-normal text-[#6B7280] dark:text-neutral-400 leading-relaxed min-h-[4rem]">
            <p>{displayedText1}</p>
            <p className="mt-2">
              {displayedText2}
              {!typingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-block w-[2px] h-5 ml-1 bg-[#6D28D9] align-middle"
                />
              )}
            </p>
          </div>

          {/* Mini Purple Arrow Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={typingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6"
          >
            <motion.div
              animate={typingComplete ? { y: [0, 6, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-5 h-5 text-[#6D28D9] dark:text-[#7C3AED]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Section 2: Natural Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={typingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-24 md:pt-40 space-y-6 text-base md:text-lg text-[#111111] dark:text-[#EDEDED] leading-relaxed font-normal"
        >
          <p className="text-2xl font-semibold tracking-tight">Hi, I&apos;m Urvi.</p>
          
          <div className="space-y-4 pt-2">
            <p>I&apos;m endlessly curious about people.</p>
            <p>Today, it shapes the work I do, the ideas I pursue, and the questions I keep returning to.</p>
            <p>Different paths.</p>
            <p className="text-xl md:text-2xl font-bold text-[#6D28D9] dark:text-[#7C3AED] pt-2">
              The same question.
            </p>
          </div>
        </motion.div>

        {/* Section 3: CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={typingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <Button href="/about" variant="primary">
            Explore My Journey
          </Button>
          <Button href="/writing" variant="secondary">
            Browse My Notebook
          </Button>
        </motion.div>
      </section>

      {/* 2. PORTRAIT SECTION */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="relative"
      >
        <div className="relative aspect-[4/5] md:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#E5E7EB] dark:bg-neutral-900 group">
          <Image
            src="/profile.jpeg"
            alt="Urvi Bhat portrait"
            fill
            priority
            className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </div>
        <p className="mt-3 text-xs text-[#6B7280] dark:text-neutral-500 tracking-wide font-mono">
          [ me ]
        </p>
      </motion.section>

      {/* 3. THINGS I BELIEVE */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="space-y-10"
      >
        <h2 className="text-xs uppercase tracking-widest font-mono text-[#6D28D9] dark:text-[#7C3AED]">
          Things I Believe In
        </h2>
        
        <ul className="space-y-8">
          {beliefs.map((belief, idx) => (
            <li 
              key={idx} 
              className="text-xl md:text-2xl font-light text-[#111111] dark:text-[#EDEDED] tracking-tight border-b border-[#E5E7EB]/60 dark:border-neutral-800/80 pb-6 last:border-b-0"
            >
              {belief}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* 4. THE JOURNEY */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="space-y-6 bg-white dark:bg-neutral-900/50 p-8 md:p-12 rounded-2xl border border-[#E5E7EB] dark:border-neutral-800"
      >
        <h2 className="text-xs uppercase tracking-widest font-mono text-[#6D28D9] dark:text-[#7C3AED]">
          The Journey
        </h2>
        
        <p className="text-lg text-[#6B7280] dark:text-neutral-300 leading-relaxed">
          Every decision, project, failure, and detour has shaped how I think. If you&apos;re curious about how I got here, I&apos;d love to share the story.
        </p>

        <div className="pt-2">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-base font-medium text-[#111111] dark:text-[#EDEDED] hover:text-[#6D28D9] dark:hover:text-[#7C3AED] transition-colors group"
          >
            Explore My Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.section>

      {/* 5. LATELY I'VE BEEN THINKING ABOUT... */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="space-y-8"
      >
        <h2 className="text-xs uppercase tracking-widest font-mono text-[#6D28D9] dark:text-[#7C3AED]">
          Lately I&apos;ve Been Thinking About...
        </h2>

        <div className="space-y-6">
          {thoughts.map((thought, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-xl bg-white dark:bg-neutral-900/30 border border-[#E5E7EB] dark:border-neutral-800/60 hover:border-[#6D28D9]/40 transition-colors"
            >
              <p className="text-base md:text-lg text-[#111111] dark:text-[#EDEDED] font-normal leading-snug">
                &ldquo;{thought.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Link 
            href="/writing" 
            className="inline-flex items-center gap-2 text-base font-medium text-[#111111] dark:text-[#EDEDED] hover:text-[#6D28D9] dark:hover:text-[#7C3AED] transition-colors group"
          >
            Browse My Notebook
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.section>

      {/* 6. CLOSING INVITATION */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="pt-12 text-center border-t border-[#E5E7EB] dark:border-neutral-900 space-y-6"
      >
        <p className="text-xl md:text-2xl font-light text-[#111111] dark:text-[#EDEDED] leading-relaxed max-w-xl mx-auto">
          If something here resonated with you, I&apos;d love to hear from you.
        </p>

        <div>
          <Button href="/contact" variant="primary">
            Start a Conversation
          </Button>
        </div>
      </motion.section>
    </article>
  );
}