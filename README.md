# simipleAuthenticationAPI | 🧠 Autenticação com HTML Puro + Node.js

Este repositório apresenta um projeto completo de autenticação utilizando **HTML, CSS (com Tailwind)** e **Node.js com Express**, com foco em simplicidade, responsividade e organização em pastas separadas (frontend/backend).

Ideal para quem está começando com JavaScript puro e deseja entender como criar um sistema funcional de **login, cadastro e painel protegido**, com autenticação baseada em tokens.

---

## 📁 Estrutura do Projeto

/frontend # HTML, CSS (Tailwind) e JS para login, cadastro e landing page
/backend # Node.js + Express + JWT para autenticação
/docker-compose # Configuração Docker para subir toda a stack

---

## 🌐 Funcionalidades

- 📝 Cadastro de usuários com email e senha
- 🔐 Login com autenticação via token JWT
- 🧭 Proteção de rotas no frontend (painel)
- 📦 Backend leve com Express
- 🎨 UI moderna com Tailwind CSS
- 🐳 Suporte a Docker e Docker Compose

---

## 🚀 Como Rodar Localmente

### 🔧 Usando Docker (recomendado)

```bash
docker-compose up --build
```

Acesse o projeto em http://localhost:3000

💻 Manualmente
1. Backend

cd backend
npm install
npm run dev

O backend estará rodando em: http://localhost:3000
2. Frontend

Abra o arquivo frontend/index.html com Live Server ou qualquer navegador.
🔐 Variáveis de Ambiente (.env)

O arquivo .env já existe na pasta /backend com:

🛠 Requisitos

    Node.js v18+

    Docker (opcional)

    Navegador moderno

    Editor de código (VS Code recomendado)

🧠 Aprendizados

Este projeto ensina:

    Como criar rotas públicas e protegidas

    Como usar JWT no backend e frontend

    Como organizar projetos de forma simples e escalável

    Como estilizar interfaces com Tailwind CSS

🤝 Contribuições

Pull requests e sugestões são muito bem-vindos!

Desenvolvido por [Código Prático](https://www.youtube.com/@codigopratico) 📺
