/**
 * CuratedEssentials — "Curated Essentials" section + 3-column product grid.
 *
 * Design spec (DESIGN.md):
 *  - Background: #FEF7ED (primary-container / cream)
 *  - Section title: EB Garamond, headline-md (32px / 500 weight)
 *  - Cards: borderless, soft ambient shadow on hover, image-first
 *  - Price: Hanken Grotesk, label-md, gold (#C9A03D) tint
 *  - "Quick Add" button: fades in on hover (desktop) / always visible (mobile)
 *  - Touch: zero Framer Motion, pure CSS transitions, touch-action: auto
 */
'use client';

import Image from 'next/image';
import { useState } from 'react';

type Lang = 'ar' | 'en';

type Product = {
  id: string;
  name_en: string;
  name_ar: string;
  origin_en: string;
  origin_ar: string;
  tag_en: string;
  tag_ar: string;
  price: number;
  image: string;
  badge_en?: string;
  badge_ar?: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
};

const PRODUCTS: Product[] = [
  {
    id: 'tuna',
    name_en: 'Gourmet Premium Tuna',
    name_ar: 'تونة فاخرة جورميه',
    origin_en: 'Atlantic Deep Sea · Hand-Selected',
    origin_ar: 'المحيط الأطلسي · مختارة يدوياً',
    tag_en: 'ARTISAN',
    tag_ar: 'حرفي',
    price: 89,
    image:
      'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=800&q=85',
    badge_en: 'Best Seller',
    badge_ar: 'الأكثر مبيعاً',
    rating: 4.9,
    reviews: 2847,
    inStock: true,
  },
  {
    id: 'ghee',
    name_en: 'Artisan Golden Ghee',
    name_ar: 'سمن ذهبي حرفي',
    origin_en: 'Handcrafted · Single Origin',
    origin_ar: 'صناعة يدوية · مصدر واحد',
    tag_en: 'HANDCRAFTED',
    tag_ar: 'يدوي الصنع',
    price: 119,
    image:
      'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=85',
    rating: 4.8,
    reviews: 1293,
    inStock: true,
  },
  {
    id: 'honey',
    name_en: 'Artisan Organic Honey',
    name_ar: 'عسل عضوي حرفي',
    origin_en: 'Wildflower Blend · 340g',
    origin_ar: 'مزيج الأزهار البرية · ٣٤٠ج',
    tag_en: 'ORGANIC',
    tag_ar: 'عضوي',
    price: 149,
    image:
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=85',
    badge_en: 'New Arrival',
    badge_ar: 'وصل حديثاً',
    rating: 4.9,
    reviews: 986,
    inStock: false,
  },
];

function StarRating({ rating, reviews, lang }: { rating: number; reviews: number; lang: Lang }) {
  const full = Math.floor(rating);
  const isRtl = lang === 'ar';

  return (
    <div className="flex items-center gap-2 mb-2">
      {/* Diamond icons — premium alternative to yellow stars */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill={i < full ? '#C9A03D' : 'none'}
            stroke="#C9A03D"
            strokeWidth="1"
            aria-hidden="true"
          >
            <polygon points="5,1 9,5 5,9 1,5" />
          </svg>
        ))}
      </div>
      <span
        className="text-[11px] font-bold text-[#C9A03D]"
        style={{ fontFamily: 'var(--font-hanken)' }}
      >
        {rating.toFixed(1)}
      </span>
      <span
        className="text-[11px] text-[#7B776E]"
        style={{ fontFamily: 'var(--font-hanken)' }}
      >
        ({reviews.toLocaleString(isRtl ? 'ar-SA' : 'en-US')})
      </span>
    </div>
  );
}

/* ── Single product card ─────────────────────────────────────────────── */
function ProductCard({
  product,
  lang,
  onAdd,
  index,
}: {
  product: Product;
  lang: Lang;
  onAdd: (p: Product) => void;
  index: number;
}) {
  const isRtl = lang === 'ar';
  const inStock = product.inStock !== false;
  const [hovered, setHovered] = useState(false);
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    setAdding(true);
    onAdd(product);
    setTimeout(() => setAdding(false), 1400);
  };

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col"
      aria-label={isRtl ? product.name_ar : product.name_en}
      style={{
        /* Stagger entrance via CSS custom property set inline */
        animationDelay: `${index * 0.12}s`,
      }}
    >
      {/* ── Image container ──────────────────────────────────────── */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: '4/5',
            borderRadius: '4px',
            backgroundColor: 'var(--sg-surface-container, #F6ECE3)',
            opacity: inStock ? 1 : 0.5,
            /* Shadow: diffused, obsidian-tinted per spec */
          boxShadow: hovered
            ? '0 24px 56px rgba(26,22,18,0.12), 0 6px 16px rgba(26,22,18,0.07)'
            : '0 4px 16px rgba(26,22,18,0.05)',
          transition: 'box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Badge */}
        {(product.badge_en || product.badge_ar) && (
          <div
            className="absolute top-3 start-3 z-10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-hanken, sans-serif)',
              backgroundColor: '#1A1612',
              color: '#C9A03D',
              letterSpacing: '0.1em',
            }}
          >
            {isRtl ? product.badge_ar : product.badge_en}
          </div>
        )}

        {/* Product image */}
        <Image
          src={product.image}
          alt={isRtl ? product.name_ar : product.name_en}
          fill
          loading={index === 0 ? 'eager' : 'lazy'}
          priority={index === 0}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
          className="object-cover object-center"
          style={{
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.75s cubic-bezier(0.22,1,0.36,1)',
          }}
          referrerPolicy="no-referrer"
        />

        {/* ── Quick Add overlay — fades in on hover (desktop)
               always visible on mobile (pointer: coarse)           ── */}
        <div
          className="absolute inset-x-4 bottom-4 pointer-fine:opacity-0 pointer-fine:group-hover:opacity-100"
          style={{
            transition: 'opacity 0.3s ease',
          }}
        >
          {inStock === false ? (
            <div className="w-full text-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,160,61,0.3)] bg-[#1A1612]/80 backdrop-blur-sm text-[#C9A03D] text-xs font-bold tracking-[0.2em] uppercase"
                style={{ fontFamily: 'var(--font-hanken)' }}
              >
                <span>◆</span>
                <span>{lang === 'ar' ? 'نفد المخزون' : 'Sold Out'}</span>
              </div>
              <button
                className="block w-full mt-2 text-[11px] text-[#FEF7ED]/80 hover:text-[#C9A03D] smooth-transition underline underline-offset-2 touch-manipulation drop-shadow-md"
                style={{ fontFamily: 'var(--font-hanken)' }}
                onClick={() => {}}
              >
                {lang === 'ar' ? 'أخبرني عند توفره' : 'Notify me when available'}
              </button>
            </div>
          ) : (
            <button
              onClick={handleAdd}
              disabled={adding}
              className="w-full min-h-[44px] rounded-sm font-semibold text-xs uppercase tracking-widest active:scale-95 touch-manipulation"
              style={{
                fontFamily: 'var(--font-hanken, sans-serif)',
                backgroundColor: adding ? '#C9A03D' : '#1A1612',
                color: adding ? '#1A1612' : '#FEF7ED',
                letterSpacing: '0.1em',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                border: 'none',
              }}
              aria-label={isRtl ? `أضف ${product.name_ar} إلى السلة` : `Add ${product.name_en} to cart`}
            >
              {adding
                ? (isRtl ? '✓ أُضيف' : '✓ Added')
                : (isRtl ? 'أضف إلى السلة' : 'Quick Add')}
            </button>
          )}
        </div>
      </div>

      {/* ── Card body — below the image ──────────────────────────── */}
      <div className="pt-4 pb-2">
        {/* Tag / category label */}
        <p
          className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em]"
          style={{
            fontFamily: 'var(--font-hanken, sans-serif)',
            color: 'var(--sg-outline, #7B776E)',
          }}
        >
          {isRtl ? product.tag_ar : product.tag_en}
        </p>

        {product.rating && product.reviews && (
          <StarRating rating={product.rating} reviews={product.reviews} lang={lang} />
        )}

        {/* Product name — headline-md: EB Garamond 500 */}
        <h3
          className="mb-1 leading-[1.3]"
          style={{
            fontFamily: 'var(--font-eb-garamond, Georgia, serif)',
            fontWeight: 500,
            fontSize: 'clamp(1.05rem, 1.4vw + 0.4rem, 1.35rem)',
            color: 'var(--sg-on-surface, #1F1B15)',
          }}
        >
          {isRtl ? product.name_ar : product.name_en}
        </h3>

        {/* Origin / sub-label */}
        <p
          className="mb-3 text-[13px]"
          style={{
            fontFamily: 'var(--font-hanken, sans-serif)',
            color: 'var(--sg-on-surface-var, #4A463F)',
            lineHeight: 1.5,
          }}
        >
          {isRtl ? product.origin_ar : product.origin_en}
        </p>

        {/* Divider */}
        <div
          className="w-full mb-3"
          aria-hidden="true"
          style={{ height: '0.5px', backgroundColor: 'var(--sg-outline-variant, #CCC6BC)' }}
        />

        {/* Price row */}
        <div className="flex items-center justify-between">
          <span
            className="font-semibold"
            style={{
              fontFamily: 'var(--font-hanken, sans-serif)',
              fontSize: '1rem',
              color: 'var(--sg-on-surface, #1F1B15)',
            }}
          >
            {product.price}
            <span
              className="ms-1 text-xs font-medium"
              style={{ color: 'var(--sg-outline, #7B776E)' }}
            >
              SAR
            </span>
          </span>

          {/* Mobile add button (always visible on touch) */}
          <button
            onClick={handleAdd}
            disabled={adding}
            className="pointer-fine:hidden min-h-[36px] min-w-[36px] rounded-full flex items-center justify-center text-sm font-bold active:scale-95 touch-manipulation"
            style={{
              backgroundColor: adding ? '#C9A03D' : 'var(--sg-inverse-surface, #343029)',
              color: adding ? '#1A1612' : '#FEF7ED',
              transition: 'background-color 0.3s ease',
              border: 'none',
            }}
            aria-label={isRtl ? `أضف ${product.name_ar}` : `Add ${product.name_en}`}
          >
            {adding ? '✓' : '+'}
          </button>
        </div>
      </div>
    </article>
  );
}

/* ── Section component ───────────────────────────────────────────────── */
type CuratedEssentialsProps = {
  lang?: Lang;
  products?: Product[];
  onAddToCart?: (product: Product) => void;
};

export default function CuratedEssentials({
  lang = 'en',
  products = PRODUCTS,
  onAddToCart = () => {},
}: CuratedEssentialsProps) {
  const isRtl = lang === 'ar';

  return (
    <section
      id="curated-essentials"
      aria-label={isRtl ? 'المنتجات المختارة' : 'Curated Essentials'}
      style={{ backgroundColor: '#FEF7ED' }}
      className="pt-20 pb-24 px-5 md:px-10"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── Section header ────────────────────────────────────── */}
        <div className="text-center mb-4">
          <h2
            style={{
              fontFamily: 'var(--font-eb-garamond, Georgia, serif)',
              fontWeight: 500,
              fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 3rem)',
              letterSpacing: '-0.01em',
              color: 'var(--sg-on-surface, #1F1B15)',
              lineHeight: 1.2,
            }}
          >
            {isRtl ? 'المنتجات المختارة' : 'Curated Essentials'}
          </h2>

          {/* Gold accent rule — matches Stitch mockup's underline */}
          <div
            className="mx-auto mt-4 mb-6"
            aria-hidden="true"
            style={{
              width: '40px',
              height: '1.5px',
              backgroundColor: '#C9A03D',
              borderRadius: '9999px',
            }}
          />

          <p
            className="max-w-[480px] mx-auto"
            style={{
              fontFamily: 'var(--font-hanken, sans-serif)',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--sg-on-surface-var, #4A463F)',
            }}
          >
            {isRtl
              ? 'مختارة من أجود المصادر حول العالم — لأن كل وجبة تستحق الأفضل.'
              : 'Sourced from the world\'s finest origins — because every meal deserves the extraordinary.'}
          </p>
        </div>

        {/* ── Product grid ──────────────────────────────────────── */}
        {/*
          Desktop: 3-column fixed grid per DESIGN.md 12-col / 1280px container
          Tablet:  2-column
          Mobile:  1-column, full-width
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              onAdd={onAddToCart}
              index={i}
            />
          ))}
        </div>

        {/* ── View all link ─────────────────────────────────────── */}
        <div className="text-center mt-16">
          <button
            className="inline-flex items-center gap-3 font-medium text-sm uppercase tracking-[0.15em] group active:scale-95 touch-manipulation"
            style={{
              fontFamily: 'var(--font-hanken, sans-serif)',
              color: 'var(--sg-on-surface, #1F1B15)',
              background: 'none',
              border: 'none',
            }}
            aria-label={isRtl ? 'عرض كل المنتجات' : 'View all products'}
          >
            {isRtl ? 'عرض جميع المنتجات' : 'View All Products'}
            <span
              className="inline-block"
              style={{
                width: '40px',
                height: '1px',
                backgroundColor: '#C9A03D',
                transition: 'width 0.3s ease',
              }}
              aria-hidden="true"
            />
          </button>
        </div>

      </div>
    </section>
  );
}
