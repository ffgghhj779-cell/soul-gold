/**
 * SoulGoldHero — Full-width cinematic hero per the Stitch mockup.
 *
 * Layout: Full-viewport background image (honey dripping on bread)
 *         with a multi-stop dark gradient overlay for legibility.
 *         Centred editorial block: display headline (EB Garamond),
 *         subtext (Hanken Grotesk), solid Obsidian CTA button.
 *
 * Performance: single <Image priority> tag, no Framer Motion scroll
 *              listeners, no touch-action mutation, pure CSS transitions.
 */
'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/* ── Honey-on-bread lifestyle photo (LCP image) ──────────────────────── */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1800&q=85';

type SoulGoldHeroProps = {
  lang?: 'ar' | 'en';
  onShopClick?: () => void;
};

export default function SoulGoldHero({ lang = 'en', onShopClick }: SoulGoldHeroProps) {
  const isRtl = lang === 'ar';
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  /* Subtle ken-burns only on desktop — uses CSS transform, zero JS scroll
     listeners, compositor-only property ← safe for 120 fps mobile        */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Add class after mount so the CSS animation starts post-hydration
    el.classList.add('sg-hero-mounted');
  }, []);

  return (
    <section
      ref={heroRef}
      id="sg-hero"
      aria-label={isRtl ? 'القسم الرئيسي' : 'Hero — The Alchemy of Taste'}
      className="relative w-full overflow-hidden"
      style={{ height: 'min(100svh, 780px)', minHeight: '520px' }}
    >
      {/* ── Background image ─────────────────────────────────────── */}
      <Image
        src={HERO_IMAGE}
        alt={isRtl ? 'عسل يسقط على خبز أرتيزاني' : 'Artisan honey dripping on fresh bread'}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className={`object-cover object-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} sg-hero-img`}
        onLoad={() => setLoaded(true)}
      />

      {/* ── Multi-stop gradient overlay — ensures legibility at all
          viewport sizes without CSS backdrop-filter (perf-safe)    ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(26,22,18,0.28) 0%, rgba(26,22,18,0.38) 40%, rgba(26,22,18,0.72) 75%, rgba(26,22,18,0.88) 100%)',
        }}
      />

      {/* ── Grain texture for depth ───────────────────────────────── */}
      <div className="grain-overlay pointer-events-none" aria-hidden="true" />

      {/* ── Centred editorial block ───────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 text-center">

        {/* Eyebrow — label-sm per design spec */}
        <p
          className="mb-5 text-white/60 uppercase tracking-[0.32em] text-xs font-medium"
          style={{ fontFamily: 'var(--font-hanken, var(--font-tajawal), sans-serif)' }}
        >
          {isRtl ? 'مجموعة مختارة بعناية' : 'Soul Gold · Artisan Collection'}
        </p>

        {/* Display headline — EB Garamond 600, -0.02em tracking per spec */}
        <h1
          className="text-white mb-5 leading-[1.1]"
          style={{
            fontFamily: 'var(--font-eb-garamond, Georgia, serif)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            fontSize: 'clamp(2.25rem, 6vw + 0.5rem, 4.5rem)',
          }}
        >
          {isRtl ? 'كيمياء الذوق' : 'The Alchemy of Taste'}
        </h1>

        {/* Subtext — body-lg per spec */}
        <p
          className="text-white/75 max-w-[520px] mb-10 leading-[1.6]"
          style={{
            fontFamily: 'var(--font-hanken, var(--font-tajawal), sans-serif)',
            fontSize: 'clamp(0.9rem, 1.2vw + 0.5rem, 1.125rem)',
          }}
        >
          {isRtl
            ? 'اكتشف مكوّنات حرفية مختارة ترتقي بالطهي اليومي إلى تجربة فائقة الجودة.'
            : 'Discover curated artisanal ingredients that elevate everyday cooking into an extraordinary culinary experience.'}
        </p>

        {/* CTA — solid Obsidian (#1A1612) background, gold text, per spec */}
        <button
          onClick={onShopClick}
          className="group relative inline-flex items-center justify-center gap-2 px-9 min-h-[52px] rounded-sm font-semibold text-sm tracking-[0.12em] uppercase active:scale-95 touch-manipulation"
          style={{
            fontFamily: 'var(--font-hanken, var(--font-tajawal), sans-serif)',
            backgroundColor: '#1A1612',
            color: '#C9A03D',
            border: '1px solid rgba(201,160,61,0.35)',
            transition: 'background-color 0.25s ease, border-color 0.25s ease',
            letterSpacing: '0.12em',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2C2520';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,160,61,0.7)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1A1612';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,160,61,0.35)';
          }}
          aria-label={isRtl ? 'تسوق المجموعة' : 'Shop the collection'}
        >
          {isRtl ? 'تسوق المجموعة' : 'SHOP THE COLLECTION'}
        </button>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 flex flex-col items-center gap-2 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="w-px bg-white/30"
            style={{
              height: '48px',
              animation: 'sg-scroll-hint 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* ── Ken-burns + scroll line keyframes ────────────────────── */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .sg-hero-mounted .sg-hero-img {
            animation: sg-ken-burns 18s ease-in-out infinite alternate;
          }
        }
        @keyframes sg-ken-burns {
          from { transform: scale(1);    }
          to   { transform: scale(1.05); }
        }
        @keyframes sg-scroll-hint {
          0%, 100% { opacity: 0.2; transform: scaleY(1);    }
          50%       { opacity: 0.7; transform: scaleY(1.15); }
        }
      `}</style>
    </section>
  );
}
