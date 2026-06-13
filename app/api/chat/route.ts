import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

let aiClient: GoogleGenAI | null = null;

function getAiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn('GEMINI_API_KEY is not set.');
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: key });
  }
  return aiClient;
}

const SYSTEM_PROMPT = `You are a Luxury Culinary & Nutrition Expert for Soul Gold (صول الذهبية).
You provide premium, Michelin-star level advice, instant recipes, and calorie analysis based on organic, raw, and high-end ingredients like Premium Tuna, Organic Sauces, Authentic Ghee, and Extra Virgin Olive Oil.
Always maintain a refined, elegant, and helpful tone aligned with a luxury Saudi food brand.
Keep responses concise (1-2 short paragraphs).`;

export async function POST(req: NextRequest) {
  try {
    const { message, lang = 'ar' } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const ai = getAiClient();

    if (!ai) {
      return NextResponse.json({
        response:
          lang === 'ar'
            ? 'يرجى إعداد مفتاح GEMINI_API_KEY لتفعيل المستشار الذكي.'
            : 'Please configure GEMINI_API_KEY to enable the AI assistant.',
      });
    }

    const languageInstruction =
      lang === 'ar'
        ? 'Respond entirely in Arabic.'
        : 'Respond entirely in English.';

    const fullPrompt = `${SYSTEM_PROMPT}\n${languageInstruction}\n\nUser: ${message.trim()}\nAssistant:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: fullPrompt,
    });

    const text = response.text?.trim();

    if (!text) {
      return NextResponse.json(
        { error: 'Empty response from AI model' },
        { status: 500 }
      );
    }

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('AI Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
