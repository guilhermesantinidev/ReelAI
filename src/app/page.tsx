// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-max">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Crie Conteúdo Viral com IA
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transforme sua ideia em conteúdo pronto para postar em Instagram, TikTok, YouTube e LinkedIn em segundos.
            </p>
            <Link href="/gerador" className="btn-primary inline-block">
              Começar Grátis →
            </Link>
            <p className="text-gray-500 mt-4">5 gerações grátis por mês</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📝',
                title: 'Descreva sua Ideia',
                description: 'Conte em poucas linhas do que é seu vídeo/post',
              },
              {
                icon: '✨',
                title: 'IA Gera Conteúdo',
                description: 'Nossa IA cria caption, hashtags, roteiro e hook otimizados',
              },
              {
                icon: '🚀',
                title: 'Poste e Vire Viral',
                description: 'Copy, edit ou regenerar. Pronto para publicar!',
              },
            ].map((feature, i) => (
              <div key={i} className="card text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você ganha */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12 text-center">
            O que você recebe em cada geração
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              '📱 Caption otimizado com emoção e CTA',
              '🏷️ 20-30 hashtags relevantes',
              '🎬 Roteiro minuto a minuto (30-60s)',
              '🎨 Hook para thumbnail viral',
              '💡 3 dicas de produção',
            ].map((item, i) => (
              <div key={i} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <span className="text-xl mr-4">{item.split(' ')[0]}</span>
                <span className="text-gray-800">{item.substring(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-8">
            Pronto para criar conteúdo viral?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Comece grátis. 5 gerações por mês, sem necessidade de cartão.
          </p>
          <Link href="/gerador" className="btn-primary inline-block">
            Acessar Gerador →
          </Link>
        </div>
      </section>
    </div>
  );
}
