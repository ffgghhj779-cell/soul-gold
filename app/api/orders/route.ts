import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabaseClient';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, address, items, total } = body;

    if (!name?.trim() || !phone?.trim() || !address?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Name, phone, and address are required' },
        { status: 400 }
      );
    }

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Cart items are required' },
        { status: 400 }
      );
    }

    if (typeof total !== 'number' || total <= 0) {
      return NextResponse.json(
        { success: false, message: 'Valid total price is required' },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json(
        {
          success: false,
          message: 'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.',
        },
        { status: 503 }
      );
    }

    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          customer_name: name.trim(),
          customer_phone: phone.trim(),
          customer_address: address.trim(),
          items,
          total_price: total,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase Error creating order:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to place order' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Order placed successfully',
      orderId: data[0].id,
    });
  } catch (error) {
    console.error('Unexpected parsing error:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid order data' },
      { status: 400 }
    );
  }
}
