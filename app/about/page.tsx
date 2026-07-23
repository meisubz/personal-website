'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Chapter {
  year: string;
  title: string;
  paragraphs: string[];
  whatChanged: string;
}

const CHAPTERS: Chapter[] = [
  {
  year: '2004',
  title: 'The Beginning',
  paragraphs: [
    'Bangalore, India.',
    'Very curious from the beginning. I learned to speak early, but I think I learned to observe even earlier.',
  ],
  whatChanged: 'Curiosity became my default way of understanding the world.',
},

{
  year: 'Before 2013',
  title: 'Learning to Imagine',
  paragraphs: [
    'I always wanted to be an artist of some kind. I didn\'t know what that meant yet. I just knew I wanted to create things that didn\'t exist before.',
    'The memories that stay with me aren\'t the endless competitions I won. They\'re evenings listening to music with my parents.',
  ],
  whatChanged: 'I learned that curiosity lasts longer than certainty.',
},

{
  year: '2013',
  title: 'The Joy of Solving Problems',
  paragraphs: [
    'Math quickly became my favorite subject.',
    'Around this time, I built my first real project: ThyroCare. A simple tool that classified hypo, hyper or no risk of thyroid. A doctor even wanted to take it further, but the project never became anything more.',
    'Throughout my years at Whitefield Global School, I loved balancing academics with creativity.',
    'There was more to life than marks. I just hadn\'t figured out what that "more" was yet.',
  ],
  whatChanged: 'Building something for another person felt different from simply getting a good grade.',
},

{
  year: '2018',
  title: 'A Different Version of Me',
  paragraphs: [
    'There was a time when I barely recognized myself.',
    'I was overweight, mentally drained, and struggling academically. Everything felt heavier than it should have.',
    'Looking back, I don\'t remember one moment that fixed everything. I remember slowly choosing to move forward, even when I didn\'t feel like it.',
  ],
  whatChanged: 'I learnt that nothing lasts forever. The good times don\'t, and thankfully, neither do the difficult ones.',
},

{
  year: '2020',
  title: 'On the Hunt',
  paragraphs: [
    'I graduated from Whitefield Global School with 90% in my CBSE boards. School was over, and I had just begun my journey at CMR National PU College.',
    'That summer, I interned at SSERD, where I helped lay the foundation for a space education club that introduced school students to space exploration and science.',
    'I knew I wanted to create. I just didn\'t know where I belonged.',
    'I wrote stories on Wattpad, experimented with WebNovel, explored different ideas, and kept chasing something that felt meaningful.',
    'Nothing really worked. No breakthrough. No overnight success. Just a lot of learning, writing, and wondering if I was on the right path.',
  ],
  whatChanged: 'Not every search ends with an answer. Sometimes it simply teaches you what to keep looking for.',
},

{
  year: '2022',
  title: 'Changing Directions',
  paragraphs: [
    'I graduated from CMR National PU College with 95% in my board exams, was the Biology Topper, and had the honor of being the Science Branch Valedictorian.',
    'For years, I believed medicine was where I was headed. Then NEET happened.',
    'Walking away wasn\'t easy, but it made space for another path. I joined CMR Institute of Technology to study Computer Science with a specialization in Artificial Intelligence & Machine Learning.',
    'Around the same time, I worked as a Writer & IP Content Auditor at GoodNovel. For the first time, thousands of strangers were reading something I had created, showing me that creativity could reach far beyond my own notebook.',
  ],
  whatChanged: 'Success helped me earn confidence. Walking away helped me earn clarity.',
},

{
  year: '2023',
  title: 'An Unexpected Education',
  paragraphs: [
    'I never really believed college was where I\'d find my future. I enrolled anyway.',
    'That year, I interned in Data Analytics & Machine Learning at Rinex. The experience taught me something unexpected: while I enjoyed solving problems, I didn\'t enjoy the work itself as much as I had imagined.',
    'Slowly, I realized the degree wasn\'t the most valuable part of the experience. College gave me room to explore, question, and discover how I learn best.',
    'The biggest lesson wasn\'t technical. It was realizing that my greatest strength isn\'t knowing the answers, it\'s learning whatever comes next.',
  ],
  whatChanged: 'Confidence doesn\'t come from having all the answers. It comes from knowing you can figure them out.',
},

{
  year: '2024',
  title: 'Finding Better Questions',
  paragraphs: [
    'I volunteered at CyBe Global. Cybersecurity and AI fascinated me, but something felt incomplete.',
    'Around the same time, I worked with Pawzz Foundation on fundraising and community outreach. It reminded me that meaningful work is ultimately about helping people.',
    'While everyone around me prepared for placements and internships, I couldn\'t shake the feeling that I wanted to build something of my own. I just didn\'t know what it was yet.',
  ],
  whatChanged: 'Sometimes clarity begins with knowing what you don\'t want.',
},

{
  year: '2025',
  title: 'Leadership Over Titles',
  paragraphs: [
    'I published my first poetry collection, In the Quiet of My Solitude. A few months later, I unpublished it.',
    'I also joined UnlockDiscounts as a Product Management Intern. Together with a team of developers, we built a service marketplace similar to Urban Company in under four months. It never found customers.',
    'Oddly enough, that didn\'t bother me. I discovered I loved solving problems alongside people. I also realized I didn\'t need money to enjoy building.',
  ],
  whatChanged: 'The work itself became the reward. Leadership interested me far more than titles ever could.',
},

{
  year: '2026',
  title: 'Finding My Place',
  paragraphs: [
    'I graduated from college with a 9.4 GPA.',
    'Around the same time, I republished my poetry collection, <a href="https://store.pothi.com/book/urvi-bhat-ub-quiet-my-solitude/" target="_blank" rel="noopener noreferrer" class="text-[#7C3AED] underline underline-offset-4 hover:opacity-80 transition-opacity">In the Quiet of My Solitude</a>. It has sold very few copies. Am I proud that it exists? Still unsure.',
    'I then joined GenSpark through Internshala as an Executive Assistant (Intern) to the Company Head, India. Over the next few months, I worked on workflow automations, organizational processes, internal systems, US sales intelligence, and B2B & B2C initiatives. Five months later, I was converted to a full-time Business Associate in Product & Growth.',
    'More importantly, I found mentors who completely changed the way I think.',
  ],
  whatChanged: 'The right environment doesn\'t just help you grow. It changes the size of your ambitions.',
},

{
  year: 'Today',
  title: 'Still Becoming',
  paragraphs: [
    'I\'m still asking questions. Still writing. Still building. Still fascinated by people.',
    'The best chapters haven\'t been written yet.',
  ],
  whatChanged: 'The journey continues.',
},
];

export default function JourneyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <main className="bg-[#0A0A0A] text-[#EDEDED] min-h-screen pt-32 pb-40 px-6 font-sans antialiased selection:bg-[#7C3AED]/30 selection:text-white">
      {/* 1. HERO */}
      <section className="max-w-2xl mx-auto text-center space-y-6 mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-light tracking-tight text-white"
        >
          The Journey
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-400 font-light text-base md:text-lg leading-relaxed space-y-2"
        >
          <p>Every life is a collection of chapters.</p>
          <p>Some define us. Others quietly prepare us for what&apos;s next.</p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs font-mono tracking-widest text-neutral-500 pt-4"
        >
          Becoming is rarely linear.
        </motion.p>
      </section>

      {/* 2. TIMELINE CONTAINER */}
      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        
        {/* Background track line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-neutral-900 hidden md:block" />

        {/* Animated Central Purple Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-[#7C3AED] shadow-[0_0_12px_#7C3AED] origin-top z-10 hidden md:block"
        />

        {/* Gradient fade at the bottom */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-[#7C3AED] to-transparent z-10 pointer-events-none hidden md:block" />

        {/* CHAPTERS */}
        <div className="space-y-16 md:space-y-24 relative z-20">
          {CHAPTERS.map((chapter, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={chapter.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Left side card (if even) or spacer (if odd) */}
                <div className={`${isEven ? 'block' : 'hidden md:block'}`}>
                  {isEven && <ChapterCard chapter={chapter} />}
                </div>

                {/* Right side card (if odd) or spacer (if even) */}
                <div className={`${!isEven ? 'block' : 'hidden md:block'}`}>
                  {!isEven && <ChapterCard chapter={chapter} />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <div className="group relative bg-[#111111]/80 backdrop-blur-sm border border-neutral-800 hover:border-[#7C3AED]/50 rounded-xl p-6 md:p-8 transition-all duration-500 shadow-lg hover:shadow-[0_0_25px_rgba(124,58,237,0.12)]">
      {/* Header: Year & Title */}
      <div className="space-y-1 mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#7C3AED]">
          {chapter.year}
        </span>
        <h2 className="text-xl md:text-2xl font-light text-white tracking-tight">
          {chapter.title}
        </h2>
      </div>

      {/* Story Paragraphs */}
      <div className="space-y-3 text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-8">
        {chapter.paragraphs.map((p, pIdx) => (
          <p key={pIdx} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>

      {/* What Changed Section */}
      <div className="pt-6 border-t border-neutral-800 space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#7C3AED] block">
          WHAT CHANGED
        </span>
        <p className="text-xs md:text-sm text-neutral-400 font-normal italic leading-relaxed">
          &ldquo;{chapter.whatChanged}&rdquo;
        </p>
      </div>
    </div>
  );
}