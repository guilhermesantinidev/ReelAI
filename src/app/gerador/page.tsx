// src/app/gerador/page.tsx
'use client';

import { useState } from 'react';
import { GeneratedContent } from '@/lib/groq';

const CATEGORIES = [
  'Lifestyle',
  'Tech/Dev',
  'Food',
  'Fitness',
  'Educação',
  'Beleza',
  'Viagem',
  'Outro',
];

const PLATFORMS = [
  'Instagram Reels',
  'TikTok',
  'YouTube Shorts',
  'LinkedIn',
];

export default function GeneradorPage() {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Lifestyle');
  const [platform, setPlatform] = useState('Instagram Reels');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedContent | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!description.trim()) {
      setError('Descreva seu conteúdo para gerar!');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description,
          category,
          platform,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao gerar conteúdo');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copiado!');
  };

  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="container-max max-w-5xl">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Gerador de Conteúdo
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Descreva sua ideia e deixe a IA fazer a magia
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Side */}
          <div className="card">
            <h2 className="text-xl font-bold mb-6">Sua Ideia</h2>

            {/* Textarea */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Descreva seu vídeo/post
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex: Fiz um bolo caseiro em 2 horas com receita vegana..."
                className="input h-32"
              />
            </div>

            {/* Category Select */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Categoria
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Platform Select */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Plataforma
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="input"
              >
                {PLATFORMS.map((plat) => (
                  <option key={plat} value={plat}>
                    {plat}
                  </option>
                ))}
              </select>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50"
            >
              {loading ? '⏳ Gerando...' : '✨ Gerar Conteúdo'}
            </button>
          </div>

          {/* Result Side */}
          <div>
            {result ? (
              <div className="space-y-6">
                {/* Caption */}
                <div className="card">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold">📝 Caption</h3>
                    <button
                      onClick={() => copyToClipboard(result.caption)}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Copiar
                    </button>
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    {result.caption}
                  </p>
                </div>

                {/* Hashtags */}
                <div className="card">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold">🏷️ Hashtags</h3>
                    <button
                      onClick={() =>
                        copyToClipboard(result.hashtags.join(' '))
                      }
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Copiar
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.hashtags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Roteiro */}
                <div className="card">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold">🎬 Roteiro</h3>
                    <button
                      onClick={() => copyToClipboard(result.roteiro)}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Copiar
                    </button>
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {result.roteiro}
                  </p>
                </div>

                {/* Hook */}
                <div className="card">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold">🎨 Hook para Thumbnail</h3>
                    <button
                      onClick={() => copyToClipboard(result.hook)}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Copiar
                    </button>
                  </div>
                  <p className="text-gray-800 font-semibold text-lg">
                    {result.hook}
                  </p>
                </div>

                {/* Dicas */}
                <div className="card">
                  <h3 className="font-bold mb-3">💡 Dicas</h3>
                  <ul className="space-y-2">
                    {result.dicas.map((dica, i) => (
                      <li key={i} className="text-gray-800 text-sm flex">
                        <span className="mr-2">•</span>
                        <span>{dica}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Regenerate Button */}
                <button
                  onClick={handleGenerate}
                  className="w-full btn-secondary"
                >
                  🔄 Gerar Novamente
                </button>
              </div>
            ) : (
              <div className="card text-center py-12 bg-white">
                <p className="text-gray-500">
                  Preencha os campos e clique em "Gerar Conteúdo"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Free Tier Info */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <p className="text-blue-900">
            📊 <strong>Plano Gratuito:</strong> 5 gerações por mês
          </p>
          <p className="text-blue-700 text-sm mt-2">
            Gere ilimitado com{' '}
            <a href="/pricing" className="font-bold hover:underline">
              plano PRO →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
