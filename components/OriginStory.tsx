'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

type Lang = 'ar' | 'en';

export default function OriginStory({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';

  const content = {
    eyebrow: isRtl ? 'المصدر' : 'THE SOURCE',
    headline: isRtl
      ? 'حيث تبدأ كل رحلة مكوّن'
      : 'Where every ingredient begins its journey',
    body1: isRtl
      ? 'نؤمن بأن الجودة الحقيقية تبدأ من الجذور. لهذا نسافر عبر القارات — من مزارع زيتون البحر المتوسط، إلى بحار التونة الفضية، إلى مناحل الجبال العربية — لنجلب لك فقط ما يستحق مائدتك.'
      : 'We believe true quality begins at the roots. That is why we travel across continents — from the olive groves of the Mediterranean, to the silver tuna seas, to Arab mountain apiaries — to bring you only what deserves your table.',
    body2: isRtl
      ? 'كل منتج في صول الذهبية يمر بمسار رقابة صارم. نعرف اسم المزارع، وموسم الحصاد، وكل تفصيلة في رحلة المكوّن قبل أن يصل إليك.'
      : 'Every Soul Gold product passes through rigorous oversight. We know the farmer\'s name, the harvest season, and every detail of the ingredient\'s journey before it reaches you.',
    stat1: isRtl ? '١٢ دولة' : '12 Countries',
    stat1sub: isRtl ? 'مصادر حول العالم' : 'Sourced globally',
    stat2: isRtl ? '٨ سنوات' : '8 Years',
    stat2sub: isRtl ? 'من الخبرة المتراكمة' : 'Of curated expertise',
    stat3: isRtl ? '١٠٠٪ قابل للتتبع' : '100% Traceable',
    stat3sub: isRtl ? 'من المصدر إليك' : 'From source to you',
    cta: isRtl ? 'اكتشف قصتنا' : 'Discover Our Story',
  };

  return (
    <section
      aria-label={isRtl ? 'قصة المصدر' : 'Our Origin Story'}
      className="relative bg-[#FFF8F3] overflow-hidden py-24 md:py-36"
    >
      <div className="grain-overlay pointer-events-none" aria-hidden="true" style={{ opacity: 0.04 }} />

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid md:grid-cols-[58%_42%] gap-0 items-start">

          {/* ── LEFT: Image block ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] md:aspect-auto md:h-[640px] rounded-[4px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85"
              alt={isRtl ? 'مزرعة فاخرة' : 'Premium farm source'}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/60 via-transparent to-transparent" />

            {/* Floating badge on image */}
            <div className="absolute bottom-8 start-8 bg-[#1A1612]/90 backdrop-blur-sm border border-[rgba(201,160,61,0.2)] rounded-[6px] px-5 py-4">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C9A03D] mb-1" style={{ fontFamily: 'var(--font-hanken)' }}>
                {isRtl ? 'معتمد' : 'Certified'}
              </p>
              <p className="text-white font-medium text-sm" style={{ fontFamily: 'var(--font-hanken)' }}>
                {isRtl ? 'حلال · عضوي · SFDA' : 'Halal · Organic · SFDA'}
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: Text block — overlaps image on desktop ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative md:-ms-12 md:mt-20 bg-[#FFF8F3] md:rounded-[4px] px-8 py-10 md:px-10 md:py-14 md:shadow-[0_24px_60px_rgba(0,0,0,0.08)] z-10"
          >
            {/* Eyebrow */}
            <p
              className="text-[11px] font-bold tracking-[0.38em] uppercase text-[#C9A03D] mb-5"
              style={{ fontFamily: 'var(--font-hanken)' }}
            >
              {content.eyebrow}
            </p>

            {/* Headline */}
            <h2
              className="text-[#1F1B15] mb-6"
              style={{
                fontFamily: 'var(--font-eb-garamond, Georgia, serif)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: isRtl ? 0 : '-0.015em',
              }}
            >
              {content.headline}
            </h2>

            {/* Body */}
            <p className="text-[#4A463F] leading-relaxed mb-4 text-base md:text-[17px]" style={{ fontFamily: 'var(--font-hanken)' }}>
              {content.body1}
            </p>
            <p className="text-[#7B776E] leading-relaxed mb-10 text-sm md:text-base" style={{ fontFamily: 'var(--font-hanken)' }}>
              {content.body2}
            </p>

            {/* 3 sourcing stats */}
            <div className="grid grid-cols-3 gap-4 mb-10 border-t border-b border-[rgba(201,160,61,0.15)] py-7">
              {[
                { val: content.stat1, sub: content.stat1sub },
                { val: content.stat2, sub: content.stat2sub },
                { val: content.stat3, sub: content.stat3sub },
              ].map(({ val, sub }, i) => (
                <div key={i} className="text-center">
                  <p
                    className="text-[#C9A03D] font-semibold mb-1"
                    style={{
                      fontFamily: 'var(--font-eb-garamond)',
                      fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {val}
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7B776E]" style={{ fontFamily: 'var(--font-hanken)' }}>
                    {sub}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#quality"
              className="group inline-flex items-center gap-2 border border-[rgba(201,160,61,0.4)] text-[#1F1B15] px-6 py-3 rounded-full text-sm font-semibold hover:border-[#C9A03D] hover:text-[#C9A03D] smooth-transition touch-manipulation min-h-[48px]"
              style={{ fontFamily: 'var(--font-hanken)' }}
            >
              {content.cta}
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 smooth-transition" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
