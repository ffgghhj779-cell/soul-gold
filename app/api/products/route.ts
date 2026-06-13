import { NextRequest, NextResponse } from 'next/server';
import { filterFallbackProducts } from '@/lib/fallbackProducts';
import { isSupabaseConfigured, getSupabase } from '@/lib/supabaseClient';

type DbProduct = {
  id: number;
  category: string;
  name_ar: string;
  name_en: string;
  desc_ar?: string;
  desc_en?: string;
  price: number;
  weight_ar?: string;
  weight_en?: string;
  weight?: string;
  badge_ar: string;
  badge_en: string;
  image_url: string;
  bg_color?: string;
};

function formatProduct(p: DbProduct) {
  return {
    id: p.id,
    categoryKey: p.category,
    title_ar: p.name_ar,
    title_en: p.name_en,
    desc_ar: p.desc_ar ?? '',
    desc_en: p.desc_en ?? '',
    price: Number(p.price),
    weight_ar: p.weight_ar ?? p.weight ?? '',
    weight_en: p.weight_en ?? p.weight ?? '',
    badge_ar: p.badge_ar,
    badge_en: p.badge_en,
    image: p.image_url,
    bgColor: p.bg_color ?? 'bg-cream',
  };
}

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get('category');

  if (!isSupabaseConfigured) {
    return NextResponse.json({
      products: filterFallbackProducts(category),
      source: 'fallback',
    });
  }

  try {
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({
        products: filterFallbackProducts(category),
        source: 'fallback',
      });
    }

    let query = supabase.from('products').select('*');

    if (category && category !== 'All') {
      query = query.eq('category', category);
    }

    const { data: products, error } = await query;

    if (error) {
      console.error('Supabase Error fetching products:', error);
      return NextResponse.json({
        products: filterFallbackProducts(category),
        source: 'fallback',
      });
    }

    if (!products?.length) {
      return NextResponse.json({
        products: filterFallbackProducts(category),
        source: 'fallback',
      });
    }

    return NextResponse.json({
      products: (products as DbProduct[]).map(formatProduct),
      source: 'supabase',
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({
      products: filterFallbackProducts(category),
      source: 'fallback',
    });
  }
}
