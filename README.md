# 🧠 API de Pacientes

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Auth-orange?logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
![Render](https://img.shields.io/badge/Deploy-Render-purple)
![Status](https://img.shields.io/badge/Status-Online-success)

Uma **API RESTful** desenvolvida em **Node.js + Express + MongoDB** para gerenciamento de pacientes, com autenticação **JWT** e integração total com o painel **Saúde+ Dashboard**.

---

## 🧭 Sumário

1. [🌟 Visão Geral](#-visão-geral)  
2. [⚙️ Tecnologias Utilizadas](#-tecnologias-utilizadas)  
3. [🧩 Estrutura do Projeto](#-estrutura-do-projeto)  
4. [🚀 Deploy](#-deploy)  
5. [🧪 Rotas da API](#-rotas-da-api)  
   - [🔐 Autenticação](#-autenticação)  
   - [👩‍⚕️ Pacientes](#-pacientes)  
6. [💻 Como Rodar Localmente](#-como-rodar-localmente)  
7. [🔗 Integração com o Frontend](#-integração-com-o-frontend)  
8. [👩‍💻 Desenvolvido por](#-desenvolvido-por)

---

## 🌟 Visão Geral

A **API de Pacientes** permite o cadastro, listagem e atualização de dados de saúde dos pacientes de forma **segura e escalável**.  
Ela é consumida pelo frontend **Saúde+ Dashboard**, criado em React, e faz uso de **autenticação JWT** para proteger as rotas privadas.

---

## ⚙️ Tecnologias Utilizadas

- **Node.js** – Servidor backend  
- **Express** – Framework web  
- **MongoDB Atlas** – Banco de dados na nuvem  
- **Mongoose** – ODM para modelar os dados  
- **JWT (Json Web Token)** – Autenticação segura  
- **bcrypt.js** – Criptografia de senhas  
- **dotenv** – Variáveis de ambiente  
- **CORS** – Permite acesso do frontend hospedado

---

## 🧩 Estrutura do Projeto

```bash
api-pacientes/
├── src/
│   ├── controllers/     → Lógica das rotas
│   ├── models/          → Modelos Mongoose
│   ├── routes/          → Definição de rotas (pacientes e auth)
│   └── server.js        → Configuração do servidor e conexão com MongoDB
├── .env                 → Variáveis de ambiente (porta, URI, JWT_SECRET)
├── package.json
└── README.md 
```

---

## 🚀 Deploy

A API está hospedada no Render:

🔗 https://api-pacientes-vh6j.onrender.com

---

## 🧪 Rotas da API

🔐 Autenticação

➕ Registrar novo usuário
```bash

POST /api/auth/register
```

Body (JSON):
```json

{
  "email": "kelly@email.com",
  "senha": "001010"
}
```

🔑 Login de usuário

```bash

POST /api/auth/login
```

**Body (JSON):**
```json
{
  "email": "kelly@email.com",
  "senha": "001010"
}
```

**Resposta (JSON):**
```json
{
  "message": "Login bem-sucedido!",
  "token": "seu_token_jwt_aqui"
}
```

---

## 👩‍⚕️ Pacientes

⚠️ Todas as rotas abaixo exigem autenticação JWT
Envie o token no cabeçalho:
Authorization: Bearer seu_token_jwt


📋 Listar pacientes
```bash

GET /api/pacientes
```

➕ Criar paciente

```bash

POST /api/pacientes
```

**Body (JSON):**
```json
{
  "nome": "Ana Souza",
  "idade": 30,
  "peso": 65,
  "altura": 1.68,
  "pressao": "120/80",
  "glicemia": 95
}
```

### ✏️ Atualizar paciente
```bash

PUT /api/pacientes/:id
```

❌ Remover paciente
```bash

DELETE /api/pacientes/:id
```

---

## 💻 Como Rodar Localmente

```bash

# Clone o repositório
git clone https://github.com/KC-Neves/api-pacientes.git

# Acesse a pasta
cd api-pacientes

# Instale as dependências
npm install

# Configure seu arquivo .env
PORT=5000
MONGO_URI=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta

# Inicie o servidor em modo desenvolvimento
npm run dev
```

O servidor rodará em:
👉 http://localhost:5000

---

## 🔗 Integração com o Frontend

O frontend Saúde+ Dashboard consome esta API para exibir dados dos pacientes em tempo real.
Frontend hospedado em:

🔗 https://saude-dashboard-wine.vercel.app

## 👩‍💻 Desenvolvido por

Kelly Cristina Neves
💼 GitHub: KC-Neves

🌐 Projeto Completo: Saúde+ Dashboard + API