# Content Generator - SaaS de IA para Criadores

Gerador de conteúdo viral com IA (Groq) para Instagram Reels, TikTok, YouTube Shorts e LinkedIn.

## 🚀 Quick Start (15 minutos)

### 1. Pré-requisitos
```bash
# Instale Node.js (LTS): https://nodejs.org/
# Instale Git: https://git-scm.com/

# Verifique se funcionou:
node --version  # v18.17.0 ou superior
npm --version   # 9.6.7 ou superior
git --version   # git version 2.x.x
```

### 2. Clone e Setup Local
```bash
# Clone o repositório
git clone https://github.com/SEUSUSERNAME/content-generator.git
cd content-generator

# Instale dependências
npm install

# Copie o arquivo de variáveis (IMPORTANTE!)
cp .env.example .env.local

# Edite .env.local com suas chaves (veja seção abaixo)
```

### 3. Configure APIs (Grátis)

#### Groq API (IA Grátis)
```
1. Vai em https://console.groq.com
2. Login ou cria conta (grátis)
3. Cria API key
4. Cola em .env.local → NEXT_PUBLIC_GROQ_API_KEY
```

#### Firebase (Banco de Dados Grátis)
```
1. Vai em https://firebase.google.com
2. Clica "Começar" e faz login com Google
3. Cria novo projeto (nome: "content-generator")
4. Seleciona Firestore Database → Modo Test (para desenvolvimento)
5. Em Project Settings → copia as credenciais
6. Cola em .env.local (NEXT_PUBLIC_FIREBASE_*)
```

#### Stripe (Pagamentos - Grátis até vender)
```
1. Vai em https://stripe.com
2. Cria conta (grátis)
3. Dashboard → Developers → API keys
4. Copia Publishable key e Secret key
5. Cola em .env.local (NEXT_PUBLIC_STRIPE_KEY e STRIPE_SECRET_KEY)
```

### 4. Rode Localmente
```bash
npm run dev

# Abre: http://localhost:3000
```

Pronto! Você vê a landing page.

---

## 📁 Estrutura do Projeto

```
content-generator/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout principal (header, footer)
│   │   ├── page.tsx             # Landing page (/)
│   │   ├── gerador/
│   │   │   └── page.tsx         # App de gerador (/gerador)
│   │   ├── pricing/
│   │   │   └── page.tsx         # Página de preços
│   │   ├── api/
│   │   │   └── generate/
│   │   │       └── route.ts     # Backend API (chama Groq)
│   │   └── globals.css
│   ├── components/
│   │   ├── Generator.tsx        # Componente principal do gerador
│   │   ├── Results.tsx          # Exibe resultados
│   │   ├── Navbar.tsx           # Navegação
│   │   └── PricingCard.tsx      # Card de plano
│   ├── lib/
│   │   ├── firebase.ts          # Configuração Firebase
│   │   ├── groq.ts              # Integração Groq
│   │   └── stripe.ts            # Integração Stripe
│   └── types/
│       └── index.ts             # TypeScript types
├── .env.local                   # Variáveis de ambiente (NÃO VERSIONE)
├── .env.example                 # Exemplo do .env
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 🔄 Fluxo de Desenvolvimento

```
1. Edita arquivo no VS Code
2. Salva (Ctrl+S)
3. Browser atualiza automaticamente (hot reload)
4. Quando satisfeito:
   git add .
   git commit -m "Descrição"
   git push origin main
5. Vercel atualiza automaticamente
```

---

## 🌐 Deploy no Vercel (Grátis)

### Passo 1: Envie pro GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Passo 2: Deploy Automático
```
1. Vai em https://vercel.com
2. Sign up com GitHub
3. Autoriza Vercel
4. Dashboard → New Project
5. Seleciona seu repositório
6. Clica Import
7. Preenche .env (mesmo que seu local)
8. Deploy!

Seu site estará online em:
https://content-generator-username.vercel.app
```

### Passo 3: Atualizações Automáticas
Toda vez que você faz `git push`, Vercel redeploy automaticamente. ✨

---

## 💰 Monetização

### Plano Gratuito
- 5 gerações/mês
- Caption + Hashtags apenas
- Sem histórico

### Plano PRO ($9/mês)
- Geração ilimitada
- Caption + Hashtags + Roteiro + Hook
- Histórico completo
- Editar e regenerar

---

## 🐛 Troubleshooting

### Erro: "GROQ_API_KEY is undefined"
```bash
# Verifique se .env.local existe e tem a chave
# Depois reinicie o servidor:
npm run dev
```

### Erro: "Firebase not initialized"
```bash
# Verifique credenciais em .env.local
# Ou vá em firebase.google.com e recrie
```

### Erro: "Cannot find module"
```bash
# Reinstale dependências:
npm install
# Limpe cache:
rm -rf .next node_modules
npm install
npm run dev
```

---

## 📊 Monitoramento

### Firebase Console
https://console.firebase.google.com
- Ver usuários
- Ver dados salvos
- Usar Free Tier

### Stripe Dashboard
https://dashboard.stripe.com
- Ver pagamentos
- Testar cartões
- Modo teste grátis

### Vercel Analytics
https://vercel.com
- Ver acessos
- Performance
- Erros

---

## 🔐 Segurança

⚠️ **NUNCA versione .env.local!**
```bash
# Já está em .gitignore, mas cuidado!
# PRÓXIMO do arquivo:
NEVER push .env.local com suas chaves reais!
```

---

## 📚 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Firebase Docs](https://firebase.google.com/docs)
- [Groq API Docs](https://console.groq.com/docs)
- [Stripe Docs](https://stripe.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

---

## 💡 Próximos Passos

1. ✅ Setup local (você está aqui)
2. Teste a geração de conteúdo
3. Convide alguns criadores para testar (beta)
4. Coleta feedback
5. Refine baseado em feedback
6. Launch no Product Hunt

---

## 📞 Suporte

Problemas? Cria issue no GitHub ou me manda mensagem!

---

**Happy coding! 🚀**
