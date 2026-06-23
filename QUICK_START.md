# ⚡ Quick Start - 30 Minutos para Rodar

## 1️⃣ Setup Inicial (5 min)

```bash
# Instale Node.js (se não tiver)
# https://nodejs.org/ → LTS version

# Verifique instalação
node --version
npm --version

# Crie pasta do projeto
mkdir content-generator
cd content-generator

# Crie projeto Next.js
npx create-next-app@latest . --typescript --tailwind --eslint
# (Aperta ENTER em tudo, usa defaults)
```

## 2️⃣ Substitua/Crie Arquivos (15 min)

**Copie os arquivos que geramos e cole no seu projeto:**

### Arquivos da Raiz (copie tudo):
- `package.json`
- `tailwind.config.ts`
- `tsconfig.json`
- `next.config.js`
- `postcss.config.js` (novo)
- `.env.example` (novo)
- `.gitignore`
- `README.md`

### Dentro de `src/app/`:
- `layout.tsx`
- `page.tsx`
- `globals.css`
- **Pasta `gerador/`** → `page.tsx`
- **Pasta `pricing/`** → `page.tsx`
- **Pasta `api/generate/`** → `route.ts`

### Dentro de `src/lib/`:
- `firebase.ts`
- `groq.ts`

## 3️⃣ Configure APIs (5 min)

### Crie `.env.local`
```bash
cp .env.example .env.local
```

Edite `.env.local` e preencha (copie-cola):

```env
NEXT_PUBLIC_GROQ_API_KEY=sua_chave_aqui
NEXT_PUBLIC_FIREBASE_API_KEY=sua_chave_aqui
...
```

**De onde tirar as chaves:**
- **Groq**: https://console.groq.com → API Keys
- **Firebase**: https://firebase.google.com → Seu Projeto → Settings
- **Stripe**: https://stripe.com → Developers → API Keys

## 4️⃣ Instale Dependências (5 min)

```bash
npm install
```

## 5️⃣ Rode Localmente (1 min)

```bash
npm run dev
```

Abre: **http://localhost:3000**

🎉 **Pronto! Você tem seu SaaS rodando localmente!**

---

## 📤 Deploy no Vercel (5 min)

```bash
# 1. Envie pro GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Vai em vercel.com
# 3. Conecta com GitHub
# 4. Clica "New Project"
# 5. Seleciona seu repo
# 6. Preenche .env (mesmas chaves que .env.local)
# 7. Deploy!

# Seu site estará em:
# https://content-generator-username.vercel.app
```

---

## 🧪 Teste a Geração

1. Vai em `/gerador`
2. Descreve algo (ex: "Fiz um bolo")
3. Clica "Gerar Conteúdo"
4. Voilà! IA gera caption, hashtags, roteiro, etc

---

## 📊 O que você tem agora:

✅ Landing page  
✅ App de gerador (com IA real do Groq)  
✅ Página de preços  
✅ Banco de dados (Firebase)  
✅ Pronto para monetizar  
✅ Hospedado no Vercel (grátis)  

---

## 🚀 Próximos Passos:

1. **Teste localmente** e veja a IA funcionando
2. **Compartilhe com amigos** (beta testing)
3. **Coleta feedback** sobre o que melhorar
4. **Adicione pagamento** (Stripe integration)
5. **Launch no Product Hunt** e comunidades

---

## 💬 Problemas?

```bash
# Erro de módulos não encontrados?
rm -rf node_modules .next
npm install
npm run dev

# Erro de variáveis de ambiente?
Verifique se .env.local está preenchido corretamente

# Erro na API Groq?
Confirme que NEXT_PUBLIC_GROQ_API_KEY está certo
```

---

**Boa sorte! 🚀 Qualquer dúvida, me avisa!**
