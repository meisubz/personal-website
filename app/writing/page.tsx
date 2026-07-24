'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ArrowLeft } from 'lucide-react';

interface Note {
  slug: string;
  title: string;
  content: string[];
}

const NOTES: Note[] = [
  {
    slug: 'loneliness-in-hyperconnection',
    title: 'Why is loneliness increasing despite constant digital connection?',
    content: [
      'Digital connection gives us the illusion of intimacy without the vulnerability it requires. We trade deep presence for low-friction updates, broadcasted milestones, and asynchronous messages.',
      'True human connection requires shared context, real-time friction, and the quiet spaces between spoken words. When every interaction is mediated by a glass screen, we stay infinitely visible yet fundamentally unseen.',
      'We are constantly in touch with everyone, but rarely present with anyone. Until software encourages depth over frequency, connectivity will remain a poor substitute for community.',
    ],
  },
  {
    slug: 'subtle-details-of-trustworthy-software',
    title: 'What subtle design details make a software product feel fundamentally trustworthy?',
    content: [
      'Trust in software is rarely built through bold marketing claims; it is earned in milliseconds through restraint and predictability.',
      'It lives in predictable visual hierarchy, state persistence, instant feedback loops, and respecting a user’s agency, never forcing unnecessary modals, deceptive patterns, or manipulative urgency.',
      'When an application respects your attention, handles errors gracefully without blaming you, and feels calm under pressure, it stops feeling like a transactional vendor and starts feeling like a reliable tool.',
    ],
  },
  {
    slug: 'ai-capability-vs-wisdom',
    title: 'Can modern AI make us wiser, or does it only make us more capable?',
    content: [
      'Capability is the capacity to process information and execute tasks at speed. Wisdom is knowing which tasks are actually worth pursuing and understanding the consequences of doing so.',
      'AI grants us unprecedented leverage, allowing us to generate, calculate, and synthesize in seconds what once took weeks. Yet leverage without reflection simply accelerates mistake making.',
      'Technology can provide instant answers, but wisdom requires sitting with ambiguity, experiencing failure, and weighing trade-offs. AI will expand what we can do, but choosing what we *should* do remains a uniquely human burden.',
    ],
  },
  {
    slug: 'why-certain-conversations-stay-with-us',
    title: 'Why do certain conversations stay with us for years while others vanish instantly?',
    content: [
      'Most daily exchanges are transactional exchanges of information. They serve an immediate purpose, leave no emotional resonance, and quietly dissolve from memory.',
      'The conversations that stay with us for decades are those that fundamentally shift our internal narrative. They occur when someone articulates an unstated truth, validates an unspoken fear, or gently challenges how we see ourselves.',
      'We rarely remember the exact words spoken years later. What remains is the lingering resonance of feeling understood, recalibrated, or forever altered in a single moment.',
    ],
  },
  {
    slug: 'best-questions-dont-have-answers',
    title: "The Best Questions Don't Have Answers",
    content: [
      'We are conditioned to seek answers quickly. Modern interfaces reward instant resolution, search results, and immediate clarity.',
      'Yet the most valuable questions we encounter in life and work are those that cannot be resolved in a single session. They require sitting with ambiguity.',
      'Living with unanswered questions opens up space for iteration. It prevents premature optimization and allows richer ideas to form in the quiet margins.',
    ],
  },
];

export default function NotebookPage() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (selectedNote) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedNote]);

  // Handle escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedNote(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="bg-[#0A0A0A] text-[#EDEDED] min-h-screen pt-32 pb-40 px-6 font-sans antialiased selection:bg-[#7C3AED]/30 selection:text-white">
      {/* 1. HERO */}
      <section className="max-w-2xl mx-auto text-center space-y-4 mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-light tracking-tight text-white lowercase"
        >
          my notebook
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-400 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto"
        >
          Some thoughts stayed with me long enough to deserve a place here.
        </motion.p>
      </section>

      {/* 2. NOTEBOOK LIST */}
      <section className="max-w-2xl mx-auto space-y-4">
        {NOTES.map((note, index) => (
          <motion.button
            key={note.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() => setSelectedNote(note)}
            className="group w-full text-left bg-transparent border border-[#7C3AED]/30 hover:border-[#7C3AED] rounded-2xl p-6 md:p-7 flex items-center justify-between transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
          >
            <span className="text-base md:text-lg font-light text-white tracking-tight group-hover:text-white transition-colors">
              {note.title}
            </span>
            <ArrowUpRight className="w-5 h-5 text-[#7C3AED] transition-transform duration-250 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 shrink-0 ml-4" />
          </motion.button>
        ))}
      </section>

      {/* 3. READING MODAL */}
      <AnimatePresence>
        {selectedNote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedNote(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[700px] max-h-[85vh] bg-[#111111] border border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto z-10 p-8 md:p-12 scrollbar-thin scrollbar-thumb-neutral-800"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNote(null)}
                aria-label="Close note"
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-8 pr-8 leading-snug">
                {selectedNote.title}
              </h2>

              {/* Content */}
              <div className="space-y-6 text-neutral-300 font-light text-base md:text-lg leading-relaxed mb-12">
                {selectedNote.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Back to notebook link */}
              <div className="pt-8 border-t border-neutral-800/80">
                <button
                  onClick={() => setSelectedNote(null)}
                  className="inline-flex items-center gap-2 text-sm text-[#7C3AED] hover:text-[#7C3AED]/80 transition-colors font-mono uppercase tracking-wider"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to notebook
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}