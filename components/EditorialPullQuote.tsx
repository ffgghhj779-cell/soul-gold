'use client';

import React from 'react';
import { motion } from 'motion/react';

type Lang = 'ar' | 'en';

export default function EditorialPullQuote({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';

  const quote = isRtl
    ? 'من تراب الأرض إلى مائدتك — كل قطرة تحكي قصة.'
    : 'From the terroir of the earth to your table — every drop tells a story.';

  const attribution = isRtl ? '— فلسفة صول الذهبية' : '— The Soul Gold Philosophy';

  return (
    <section
      aria-label={isRtl ? 'فلسفتنا' : 'Our Philosophy'}
      className="relative bg-[#343029] overflow-hidden py-24 md:py-36"
    >
      {/* Grain overlay */}
      <div className="grain-overlay pointer-events-none" aria-hidden="true" style={{ opacity: 0.07 }} />

      {/* Atmospheric gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,160,61,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Oversized opening quote mark */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          className="text-[#C9A03D]/30 leading-none select-none mb-2"
          style={{
            fontFamily: 'var(--font-eb-garamond, Georgia, serif)',
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            lineHeight: 0.7,
            fontWeight: 400,
            fontStyle: 'italic',
          }}
        >
          &ldquo;
        </motion.div>

        {/* The quote */}
        <div className="overflow-hidden">
          <motion.blockquote
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#FEF7ED] font-medium"
            style={{
              fontFamily: 'var(--font-eb-garamond, Georgia, serif)',
              fontSize: 'clamp(1.6rem, 4vw, 3.6rem)',
              lineHeight: 1.25,
              letterSpacing: isRtl ? '0' : '-0.015em',
              fontStyle: 'italic',
              fontOpticalSizing: 'auto',
            } as React.CSSProperties}
          >
            {quote}
          </motion.blockquote>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="divider-gold-foil my-8 max-w-xs mx-auto"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,160,61,0.6) 35%, rgba(232,196,104,0.9) 50%, rgba(201,160,61,0.6) 65%, transparent)',
          }}
        />

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-[#C9A03D]/70 text-xs md:text-sm tracking-[0.3em] uppercase"
          style={{ fontFamily: 'var(--font-hanken, sans-serif)' }}
        >
          {attribution}
        </motion.p>
      </div>
    </section>
  );
}
