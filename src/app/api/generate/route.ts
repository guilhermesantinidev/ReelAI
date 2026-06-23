// src/app/api/generate/route.ts
import { generateContent, ContentGeneratorInput } from '@/lib/groq';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContentGeneratorInput;

    // Validação básica
    if (!body.description || !body.category || !body.platform) {
      return NextResponse.json(
        { error: 'Descrição, categoria e plataforma são obrigatórios' },
        { status: 400 }
      );
    }

    // Chama Groq para gerar conteúdo
    const content = await generateContent(body);

    return NextResponse.json(content);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Erro ao gerar conteúdo. Tente novamente.' },
      { status: 500 }
    );
  }
}
