import type { CSSProperties } from 'react';

type Lang = 'ar' | 'en';

type HeroLifestyleProps = {
  lang?: Lang;
};

/** Brand lifestyle asset — premium fresh beef, Farm to Fine Table */
const HERO_IMAGE =
  '/products/WhatsApp%20Image%202026-06-14%20at%2011.06.56%20AM%20(4).jpeg';

const bgStyle: CSSProperties = {
  backgroundImage: `url('${HERO_IMAGE}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

export default function HeroLifestyle({ lang = 'en' }: HeroLifestyleProps) {
  const rtl = lang === 'ar';

  return (
    <section
      id="lifestyle-hero"
      aria-label={rtl ? 'أسلوب الحياة الفاخر' : 'Luxury lifestyle'}
      className="sg-lifestyle-banner"
    >
      <div className="sg-lifestyle-banner__stage">
        {/* High-res lifestyle background — CSS cover avoids aggressive <img> crop */}
        <div
          className="sg-lifestyle-banner__bg"
          style={bgStyle}
          role="img"
          aria-label={
            rtl
              ? 'لحم بقري طازج فاخر من صول الذهبية'
              : 'Soul Gold premium fresh beef — farm to fine table'
          }
        />

        {/* Cinematic luxury gradient — image stays visible, text pops */}
        <div className="sg-lifestyle-banner__gradient" aria-hidden="true" />

        <div className="sg-lifestyle-banner__content">
          <p
            className="text-[10px] uppercase tracking-[0.42em] text-[#C9A03D] mb-4 font-semibold"
            style={{ fontFamily: 'var(--font-hanken, sans-serif)' }}
          >
            {rtl ? 'من المزرعة إلى المائدة' : 'Farm to Fine Table'}
          </p>
          <h2
            className="text-white leading-[1.08]"
            style={{
              fontFamily: 'var(--font-eb-garamond, Georgia, serif)',
              fontSize: 'clamp(1.875rem, 4vw + 0.5rem, 3.25rem)',
              fontWeight: 500,
              letterSpacing: rtl ? 0 : '-0.02em',
            }}
          >
            {rtl ? 'حيث تلتقي الحرفة بالفخامة' : 'Where Craft Meets Luxury'}
          </h2>
          <p
            className="mt-4 text-white/90 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-hanken, sans-serif)' }}
          >
            {rtl
              ? 'منتجات سعودية فاخرة مختارة بعناية — لأصحاب الذوق الرفيع'
              : 'Curated Saudi premium essentials — for the refined palate'}
          </p>
        </div>
      </div>
    </section>
  );
}
