// src/app/pricing/page.tsx
'use client';

import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Gratuito',
      price: '$0',
      description: 'Para começar',
      features: [
        '✓ 5 gerações/mês',
        '✓ Caption + Hashtags',
        '✓ Plataforma única',
        '✗ Roteiro e Hook',
        '✗ Histórico',
      ],
      cta: 'Começar',
      href: '/gerador',
      popular: false,
    },
    {
      name: 'PRO',
      price: '$9',
      period: '/mês',
      description: 'Para criadores sérios',
      features: [
        '✓ Geração ilimitada',
        '✓ Caption + Hashtags + Roteiro + Hook',
        '✓ Todas as plataformas',
        '✓ Histórico de 100 posts',
        '✓ Editar e regenerar',
      ],
      cta: 'Assinar',
      href: '#',
      popular: true,
    },
    {
      name: 'CREATOR',
      price: '$29',
      period: '/mês',
      description: 'Para crescer rápido',
      features: [
        '✓ Tudo do PRO',
        '✓ Analytics e insights',
        '✓ Agendador de posts',
        '✓ Pesquisa de hashtags',
        '✓ Suporte prioritário',
      ],
      cta: 'Assinar',
      href: '#',
      popular: false,
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold mb-4">
            Planos Simples e Transparentes
          </h1>
          <p className="text-xl text-gray-600">
            Escolha o plano perfeito para seu crescimento
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg border-2 p-8 flex flex-col ${
                  plan.popular
                    ? 'border-blue-600 bg-blue-50 shadow-xl scale-105'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                      Mais Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600">{plan.period}</span>
                  )}
                </div>

                <Link
                  href={plan.href}
                  className={`text-center py-3 rounded-lg font-semibold mb-8 transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, j) => (
                    <p key={j} className="text-sm text-gray-700">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Perguntas Frequentes
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: 'Posso cancelar a qualquer momento?',
                a: 'Sim! Sem contratos de longa duração. Cancele quando quiser.',
              },
              {
                q: 'Há limite de usuários?',
                a: 'Não. Cada assinatura é para um usuário, mas você pode criar múltiplas contas.',
              },
              {
                q: 'Vocês salvam meus posts?',
                a: 'Sim! Histórico completo fica salvo na sua conta para sempre.',
              },
              {
                q: 'Qual a qualidade da IA?',
                a: 'Usamos Groq (baseado em Mixtral) - uma das melhores IAs abertas do mercado.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-8">Comece Grátis Hoje</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Nenhum cartão necessário. Nenhuma surpresa.
          </p>
          <Link href="/gerador" className="btn-primary inline-block">
            Começar Agora →
          </Link>
        </div>
      </section>
    </div>
  );
}
