# 📁 Guia de Organização dos Arquivos

## Pasta: `content-generator/` (raiz do projeto)

Depois de rodar `npx create-next-app@latest .`, você terá uma estrutura base. Você vai **substituir e adicionar** arquivos.

---

## 🎯 Passo a Passo

### **PASSO 1: Substitua estes arquivos na raiz**

Copie o conteúdo destes arquivos e substitua os equivalentes:

```
content-generator/
├── package.json              ← SUBSTITUA com o novo package.json
├── tailwind.config.ts        ← SUBSTITUA
├── tsconfig.json             ← SUBSTITUA
├── next.config.js            ← SUBSTITUA
├── postcss.config.js         ← NOVO (crie)
├── .env.example              ← NOVO (crie)
├── .gitignore                ← SUBSTITUA
└── README.md                 ← SUBSTITUA com o README.md
```

### **PASSO 2: Crie a pasta `src/` e organize**

Se não existir, crie a pasta `src/`:

```
content-generator/
└── src/
    ├── app/                  ← Pasta principal (Next.js 14+)
    ├── components/           ← Componentes reutilizáveis
    ├── lib/                  ← Funções auxiliares
    └── types/                ← TypeScript types (opcional)
```

### **PASSO 3: Arquivo `src/app/layout.tsx`**

```
Caminho: src/app/layout.tsx
Conteúdo: Copia do arquivo "src-app-layout.tsx"
```

### **PASSO 4: Arquivo `src/app/page.tsx`**

```
Caminho: src/app/page.tsx
Conteúdo: Copia do arquivo "src-app-page.tsx"
```

### **PASSO 5: Arquivo `src/app/globals.css`**

```
Caminho: src/app/globals.css
Conteúdo: Copia do arquivo "src-app-globals.css"
```

### **PASSO 6: Pasta `src/app/gerador/` (Crie)**

```
Crie a pasta: src/app/gerador/
Arquivo: src/app/gerador/page.tsx
Conteúdo: Copia do arquivo "src-app-gerador-page.tsx"
```

### **PASSO 7: Pasta `src/app/pricing/` (Crie)**

```
Crie a pasta: src/app/pricing/
Arquivo: src/app/pricing/page.tsx
Conteúdo: Copia do arquivo "src-app-pricing-page.tsx"
```

### **PASSO 8: Pasta `src/app/api/generate/` (Crie)**

```
Crie as pastas: src/app/api/generate/
Arquivo: src/app/api/generate/route.ts
Conteúdo: Copia do arquivo "src-app-api-generate-route.ts"
```

### **PASSO 9: Pasta `src/lib/` (Crie)**

```
Crie a pasta: src/lib/
Arquivos:
  - src/lib/firebase.ts (copia do arquivo "src-lib-firebase.ts")
  - src/lib/groq.ts (copia do arquivo "src-lib-groq.ts")
```

---

## 📋 Estrutura Final Completa

Depois de tudo, você terá:

```
content-generator/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── gerador/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── generate/
│   │           └── route.ts
│   └── lib/
│       ├── firebase.ts
│       └── groq.ts
├── public/                   (já existe)
├── .next/                    (gerado automaticamente)
├── node_modules/             (gerado automaticamente)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── .env.example
├── .env.local                (VOCÊ CRIA E PREENCHE)
├── .gitignore
└── README.md
```

---

## 🚀 Depois de Organizar

```bash
# 1. Instale dependências (se não fez)
npm install

# 2. Crie .env.local baseado em .env.example
cp .env.local

# 3. Preencha as variáveis de ambiente

# 4. Rode localmente
npm run dev

# 5. Abre http://localhost:3000
```

---

## ⚠️ Pontos Importantes

1. **Não copie `node_modules/`** - é gerado automaticamente
2. **Não copie `.next/`** - é gerado automaticamente
3. **Preencha `.env.local`** com suas chaves de API antes de rodar
4. **Não versione `.env.local`** no GitHub (já está em .gitignore)

---

## 🆘 Se Algo der Errado

```bash
# Limpe tudo e reinstale
rm -rf .next node_modules
npm install
npm run dev
```

---

**Pronto! Agora você tem toda a estrutura. Bora rodar!** 🚀
