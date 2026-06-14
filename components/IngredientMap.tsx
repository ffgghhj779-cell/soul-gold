'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Leaf, ShieldCheck, Droplets, CheckCircle2 } from 'lucide-react';

type Lang = 'ar' | 'en';

const INGREDIENTS = [
  {
    id: 'tuna',
    name_en: 'Premium White Tuna',
    name_ar: 'تونة بيضاء فاخرة',
    desc_en: 'Sourced from the deep Atlantic, packed in cold-pressed extra virgin olive oil.',
    desc_ar: 'مستخرجة من أعماق الأطلسي، ومعبأة في زيت زيتون بكر ممتاز معصور على البارد.',
    ingredients_en: ['Atlantic White Tuna (70%)', 'Extra Virgin Olive Oil (28%)', 'Sea Salt (2%)'],
    ingredients_ar: ['تونة بيضاء أطلسية (٧٠٪)', 'زيت زيتون بكر ممتاز (٢٨٪)', 'ملح بحري (٢٪)'],
    certs_en: ['Halal', 'Sustainable', 'SFDA'],
    certs_ar: ['حلال', 'مستدام', 'هيئة الغذاء والدواء'],
    flavors_en: ['Rich', 'Buttery', 'Clean'],
    flavors_ar: ['غني', 'زبداني', 'نقي'],
  },
  {
    id: 'ghee',
    name_en: 'Artisan Golden Ghee',
    name_ar: 'سمن ذهبي حرفي',
    desc_en: 'Clarified over low heat to preserve its nutty aroma and rich nutritional profile.',
    desc_ar: 'مصفى على حرارة هادئة للحفاظ على عبقه الغني وخصائصه الغذائية.',
    ingredients_en: ['100% Grass-fed Cow Milk Fat'],
    ingredients_ar: ['دهن حليب بقر متغذى على العشب ١٠٠٪'],
    certs_en: ['Organic', 'Halal', 'SFDA'],
    certs_ar: ['عضوي', 'حلال', 'هيئة الغذاء والدواء'],
    flavors_en: ['Nutty', 'Caramelized', 'Deep'],
    flavors_ar: ['جوزي', 'مكرمل', 'عميق'],
  },
  {
    id: 'honey',
    name_en: 'Raw Mountain Honey',
    name_ar: 'عسل جبلي خام',
    desc_en: 'Unfiltered, unpasteurized honey harvested from pristine high-altitude apiaries.',
    desc_ar: 'عسل غير مصفى وغير مبستر، محصود من مناحل جبلية نقية.',
    ingredients_en: ['100% Raw Wildflower Honey'],
    ingredients_ar: ['عسل زهور برية خام ١٠٠٪'],
    certs_en: ['Organic', 'Raw', 'SFDA'],
    certs_ar: ['عضوي', 'خام', 'هيئة الغذاء والدواء'],
    flavors_en: ['Floral', 'Complex', 'Sweet'],
    flavors_ar: ['زهري', 'معقد', 'حلو'],
  }
];

export default function IngredientMap({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';
  const [openId, setOpenId] = useState<string | null>('tuna');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-24 md:py-36 bg-[#1A1612] text-[#FEF7ED] relative overflow-hidden" aria-label={isRtl ? 'خريطة المكونات' : 'Ingredient Anatomy'}>
      {/* Texture */}
      <div className="texture-canvas absolute inset-0 pointer-events-none opacity-50" aria-hidden="true" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold tracking-[0.38em] uppercase text-[#C9A03D] mb-4" style={{ fontFamily: 'var(--font-hanken)' }}>
            {isRtl ? 'الشفافية التامة' : 'Total Transparency'}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'var(--font-eb-garamond, Georgia, serif)', letterSpacing: '-0.01em' }}>
            {isRtl ? 'تشريح المكونات' : 'Ingredient Anatomy'}
          </h2>
          <p className="text-[#FEF7ED]/70 max-w-lg mx-auto text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-hanken)' }}>
            {isRtl 
              ? 'نحن لا نخفي شيئاً. اكتشف بالضبط ما يدخل في منتجاتنا الفاخرة، بنسبة مئوية واضحة.'
              : 'We hide nothing. Discover exactly what goes into our premium products, clear and simple.'}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {INGREDIENTS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className="border border-[rgba(201,160,61,0.2)] rounded-lg overflow-hidden bg-[#FEF7ED]/5 backdrop-blur-sm smooth-transition"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group touch-manipulation"
                >
                  <h3 className="text-xl md:text-2xl font-medium text-[#FEF7ED] group-hover:text-[#C9A03D] smooth-transition" style={{ fontFamily: 'var(--font-eb-garamond, Georgia, serif)' }}>
                    {isRtl ? item.name_ar : item.name_en}
                  </h3>
                  <div className={`w-8 h-8 rounded-full border border-[rgba(201,160,61,0.3)] flex items-center justify-center text-[#C9A03D] smooth-transition ${isOpen ? 'rotate-180 bg-[#C9A03D]/10' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <p className="text-[#FEF7ED]/80 text-sm md:text-base leading-relaxed mb-8" style={{ fontFamily: 'var(--font-hanken)' }}>
                          {isRtl ? item.desc_ar : item.desc_en}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                          {/* Ingredients List */}
                          <div>
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7B776E] mb-4" style={{ fontFamily: 'var(--font-hanken)' }}>
                              {isRtl ? 'المكونات' : 'The Elements'}
                            </h4>
                            <ul className="flex flex-col gap-3">
                              {(isRtl ? item.ingredients_ar : item.ingredients_en).map((ing, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <CheckCircle2 size={16} className="text-[#C9A03D] mt-0.5 shrink-0" />
                                  <span className="text-[#FEF7ED] text-sm" style={{ fontFamily: 'var(--font-hanken)' }}>{ing}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Flavor & Certs */}
                          <div className="flex flex-col gap-6">
                            <div>
                              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7B776E] mb-3" style={{ fontFamily: 'var(--font-hanken)' }}>
                                {isRtl ? 'مظهر النكهة' : 'Flavor Profile'}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {(isRtl ? item.flavors_ar : item.flavors_en).map((flavor, i) => (
                                  <span key={i} className="px-3 py-1.5 rounded-full border border-[rgba(201,160,61,0.3)] text-[#C9A03D] text-xs font-medium tracking-wider" style={{ fontFamily: 'var(--font-hanken)' }}>
                                    {flavor}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7B776E] mb-3" style={{ fontFamily: 'var(--font-hanken)' }}>
                                {isRtl ? 'الشهادات' : 'Certifications'}
                              </h4>
                              <div className="flex flex-wrap gap-4">
                                {(isRtl ? item.certs_ar : item.certs_en).map((cert, i) => (
                                  <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-[#FEF7ED]/90" style={{ fontFamily: 'var(--font-hanken)' }}>
                                    {i === 0 && <ShieldCheck size={14} className="text-[#C9A03D]" />}
                                    {i === 1 && <Leaf size={14} className="text-[#C9A03D]" />}
                                    {i === 2 && <Droplets size={14} className="text-[#C9A03D]" />}
                                    {cert}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
