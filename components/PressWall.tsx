'use client';

import React from 'react';
import { motion } from 'motion/react';

type Lang = 'ar' | 'en';

// Press mentions — using SVG text logos (no external images needed)
const PRESS = [
  { name: 'Forbes Arabia', width: 130 },
  { name: 'Gourmet & Travel', width: 148 },
  { name: 'Arab Food Guide', width: 138 },
  { name: 'The National', width: 118 },
  { name: 'Luxury Lifestyle', width: 142 },
  { name: 'Saudi Gazette', width: 128 },
];

function LogoItem({ name, width }: { name: string; width: number }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center opacity-25 hover:opacity-60 smooth-transition px-6"
      style={{ minWidth: width }}
    >
      <span
        className="text-[#FEF7ED] font-bold tracking-[0.06em] whitespace-nowrap select-none"
        style={{
          fontFamily: 'var(--font-eb-garamond, Georgia, serif)',
          fontSize: 'clamp(0.8rem, 1.5vw, 1.05rem)',
          letterSpacing: '0.04em',
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function PressWall({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';
  const label = isRtl ? 'كما ظهرنا في' : 'As Featured In';

  return (
    <section
      aria-label={label}
      className="relative bg-[#1A1612] overflow-hidden py-12 md:py-16"
    >
      {/* Gold foil dividers */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(201,160,61,0.5) 30%, rgba(232,196,104,0.85) 50%, rgba(201,160,61,0.5) 70%, transparent)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(201,160,61,0.3) 30%, rgba(232,196,104,0.6) 50%, rgba(201,160,61,0.3) 70%, transparent)',
        }}
      />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-[10px] font-bold tracking-[0.4em] uppercase text-white/35 mb-8"
        style={{ fontFamily: 'var(--font-hanken)' }}
      >
        {label}
      </motion.p>

      {/* Marquee — CSS-only, no JS scroll handler */}
      <div className="overflow-hidden">
        <div
          className="flex items-center"
          style={{
            animation: 'press-marquee 28s linear infinite',
            width: 'max-content',
          }}
        >
          {/* Duplicate the list for seamless loop */}
          {[...PRESS, ...PRESS].map((item, i) => (
            <LogoItem key={`${item.name}-${i}`} name={item.name} width={item.width} />
          ))}
        </div>
      </div>

      {/* Marquee keyframe — injected inline to avoid globals.css dependency */}
      <style jsx>{`
        @keyframes press-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="press-marquee"] { animation: none; }
        }
      `}</style>
    </section>
  );
}
