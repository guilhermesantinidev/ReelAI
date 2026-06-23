// src/lib/groq.ts

export interface ContentGeneratorInput {
  description: string;
  category: string;
  platform: string;
}

export interface GeneratedContent {
  caption: string;
  hashtags: string[];
  roteiro: string;
  hook: string;
  dicas: string[];
}

export async function generateContent(input: ContentGeneratorInput): Promise<GeneratedContent> {
  const { description, category, platform } = input;

  const prompt = `Você é especialista em conteúdo viral para redes sociais.

Descrição do conteúdo: "${description}"
Categoria: "${category}"
Plataforma: "${platform}"
Idioma: PT-BR

Gere EXATAMENTE isso em JSON (sem markdown, sem explicações):
{
  "caption": "Caption otimizada com emoção e CTA no final (máx 150 chars)",
  "hashtags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "roteiro": "Roteiro minuto a minuto de 30-60 segundos",
  "hook": "Texto provocante para thumbnail (máx 50 chars)",
  "dicas": ["Dica 1", "Dica 2", "Dica 3"]
}

Responda APENAS com JSON válido, nada mais.`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Groq API error: ${error.error?.message}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Parse JSON response
    const parsed = JSON.parse(content) as GeneratedContent;
    return parsed;
  } catch (error) {
    console.error('Error generating content:', error);
    throw new Error('Falha ao gerar conteúdo. Tente novamente.');
  }
}
