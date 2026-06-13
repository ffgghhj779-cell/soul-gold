export type FallbackProduct = {
  id: number;
  categoryKey: string;
  title_ar: string;
  title_en: string;
  desc_ar: string;
  desc_en: string;
  price: number;
  weight_ar: string;
  weight_en: string;
  badge_ar: string;
  badge_en: string;
  image: string;
  bgColor: string;
};

export const FALLBACK_PRODUCTS: FallbackProduct[] = [
  {
    id: 1,
    categoryKey: 'Tuna',
    title_ar: 'تونة بيضاء فاخرة (قطع صلبة)',
    title_en: 'Premium White Tuna (Solid)',
    desc_ar: 'تونة بيضاء فاخرة بقطع صلبة غنية بالأوميغا 3، مثالية للسلطات والوجبات الصحية.',
    desc_en: 'Premium solid white tuna rich in Omega-3, perfect for salads and healthy meals.',
    price: 35,
    weight_ar: '٢٠٠ غرام',
    weight_en: '200g',
    badge_ar: 'غني بالأوميغا 3',
    badge_en: 'Rich in Omega 3',
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    categoryKey: 'Sauces',
    title_ar: 'صلصة طماطم عضوية',
    title_en: 'Organic Tomato Sauce',
    desc_ar: 'صلصة طماطم عضوية مصنوعة من مكونات طبيعية بدون سكر مضاف.',
    desc_en: 'Organic tomato sauce crafted from natural ingredients with no added sugar.',
    price: 25,
    weight_ar: '٥٠٠ غرام',
    weight_en: '500g',
    badge_ar: 'بدون سكر مضاف',
    badge_en: 'No Added Sugar',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    bgColor: 'bg-red-50',
  },
  {
    id: 3,
    categoryKey: 'Ghee',
    title_ar: 'سمن مزرعة أصيل',
    title_en: 'Authentic Farm Ghee',
    desc_ar: 'سمن طبيعي ١٠٠٪ من مزارع محلية، غني بالنكهة الأصيلة والفوائد الغذائية.',
    desc_en: '100% natural farm ghee with authentic flavor and rich nutritional benefits.',
    price: 120,
    weight_ar: '١ كجم',
    weight_en: '1kg',
    badge_ar: 'طبيعي ١٠٠٪',
    badge_en: '100% Natural',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 4,
    categoryKey: 'Organics',
    title_ar: 'زيت زيتون بكر ممتاز',
    title_en: 'Extra Virgin Olive Oil',
    desc_ar: 'زيت زيتون بكر ممتاز معصور على البارد، مثالي للطهي الفاخر والسلطات.',
    desc_en: 'Cold-pressed extra virgin olive oil, ideal for luxury cooking and salads.',
    price: 85,
    weight_ar: '٥٠٠ مل',
    weight_en: '500ml',
    badge_ar: 'عصرة باردة',
    badge_en: 'Cold Pressed',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
    bgColor: 'bg-green-50',
  },
  {
    id: 5,
    categoryKey: 'Tuna',
    title_ar: 'تونة لحم خفيف (رقائق)',
    title_en: 'Light Meat Tuna (Chunks)',
    desc_ar: 'تونة لحم خفيف بقطع رقيقة، خيار مثالي لمن يبحث عن وجبة قليلة السعرات.',
    desc_en: 'Light meat tuna chunks, the perfect low-calorie choice for mindful eating.',
    price: 20,
    weight_ar: '١٨٥ غرام',
    weight_en: '185g',
    badge_ar: 'قليل السعرات',
    badge_en: 'Low Calorie',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 6,
    categoryKey: 'Organics',
    title_ar: 'عسل جبلي خام',
    title_en: 'Raw Mountain Honey',
    desc_ar: 'عسل جبلي خام غير مصفى، يحتفظ بجميع إنزيماته وفوائده الطبيعية.',
    desc_en: 'Unfiltered raw mountain honey preserving all natural enzymes and benefits.',
    price: 150,
    weight_ar: '٥٠٠ غرام',
    weight_en: '500g',
    badge_ar: 'غير مصفى',
    badge_en: 'Unfiltered',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    bgColor: 'bg-amber-50',
  },
];

export function filterFallbackProducts(category: string | null): FallbackProduct[] {
  if (!category || category === 'All') {
    return FALLBACK_PRODUCTS;
  }
  return FALLBACK_PRODUCTS.filter((p) => p.categoryKey === category);
}
