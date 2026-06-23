// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Content Generator - Crie conteúdo viral com IA',
  description: 'Gerador de conteúdo para Instagram, TikTok, YouTube e LinkedIn com IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        <nav className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Content AI
                </h1>
              </div>
              <div className="flex gap-6">
                <a href="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </a>
                <a href="/gerador" className="text-gray-700 hover:text-blue-600">
                  Gerador
                </a>
                <a href="/pricing" className="text-gray-700 hover:text-blue-600">
                  Planos
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        <footer className="border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
            <p>© 2024 Content AI. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
