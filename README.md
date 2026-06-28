# 🧪 api-pacientes — API RESTful de Gestão e Triagem Clínica

Uma API RESTful robusta desenvolvida em Node.js, Express e MongoDB para o gerenciamento de registros de pacientes, históricos clínicos e triagens de exames. Esta API atua como o motor de dados (Backend) do ecossistema [Saúde+ Dashboard](https://github.com).

---

## 🎯 Contexto Hospitalar e Regras de Negócio (O Diferencial de Saúde)
Com base na minha vivência de 7 anos em laboratórios diagnósticos e salas de vacinas, projetei esta API para simular as regras de integridade, segurança e usabilidade exigidas por Prontuários Eletrônicos (PEP) e Sistemas de Informação de Laboratório (LIS):

- **Privacidade por Design (LGPD):** Implementação de autenticação restrita via JWT para assegurar que apenas profissionais de saúde autorizados acessem dados sensíveis e parâmetros vitais dos pacientes.
- **Persistência Dinâmica NoSQL:** Uso do MongoDB para acomodar de forma flexível e escalável históricos médicos que demandam atualizações contínuas de sintomas e exames.
- **Validação de Sinais Vitais:** Gerenciamento estruturado de payloads contendo peso, altura, pressão arterial e índice glicêmico para facilitar o monitoramento clínico e a triagem rápida.

---

## 🧭 Sumário
1. 🎯 Contexto Hospitalar e Regras de Negócio
2. ⚙️ Tecnologias Utilizadas
3. 🧩 Estrutura do Projeto
4. 🚀 Deploy
5. 🧪 Rotas da API
6. 💻 Como Rodar Localmente
7. 🔗 Integração com o Frontend
8. 👩‍💻 Desenvolvida por

---

## ⚙️ Tecnologias Utilizadas
- **Node.js** – Ambiente de execução do servidor backend
- **Express** – Framework web ágil e minimalista
- **MongoDB Atlas** – Banco de dados na nuvem para registros escaláveis
- **Mongoose** – ODM para modelagem consistente de esquemas clínicos
- **JWT (Json Web Token)** – Autenticação segura de perfis de saúde
- **bcrypt.js** – Criptografia robusta de credenciais de acesso
- **dotenv** – Gestão segura de variáveis de ambiente
- **CORS** – Liberação controlada para integração com o frontend em React

---

## 🧩 Estrutura do Projeto
```text
api-pacientes/
├── src/
│   ├── controllers/     → Lógica de negócio e respostas das rotas
│   ├── models/          → Modelos Mongoose (Esquemas de dados do paciente)
│   ├── routes/          → Definição de endpoints (pacientes e auth)
│   └── server.js        → Configuração do servidor e conexão de banco
├── .env                 → Credenciais locais (porta, URI, JWT_SECRET)
├── package.json
└── README.md
```

---

## 🚀 Deploy
A API está hospedada e operacional no Render:
🔗 [https://api-pacientes-vh6j.onrender.com](https://api-pacientes-vh6j.onrender.com)

---

## 🧪 Rotas da API

### 🔐 Autenticação e Controle de Acesso

**➕ Registrar novo usuário clínico**
`POST /api/auth/register`
```json
{
  "email": "kelly@email.com",
  "senha": "your_secure_password"
}
```

**🔑 Login do profissional de saúde**
`POST /api/auth/login`
```json
{
  "email": "kelly@email.com",
  "senha": "your_secure_password"
}
```
*Resposta (JSON):*
```json
{
  "message": "Login bem-sucedido!",
  "token": "seu_token_jwt_aqui"
}
```

---

### 👩‍⚕️ Prontuário e Gestão de Pacientes
⚠️ *Todas as rotas abaixo exigem cabeçalho de autenticação: `Authorization: Bearer seu_token_jwt`*

**📋 Listar Pacientes Triados**
`GET /api/pacientes`

**➕ Criar Novo Registro Clínico**
`POST /api/pacientes`
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

**✏️ Atualizar Parâmetros de Saúde**
`PUT /api/pacientes/:id`

**❌ Remoção de Registro Hospitalar**
`DELETE /api/pacientes/:id`

---

## 💻 Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/KC-Neves/api-pacientes.git

# 2. Acesse a pasta do projeto
cd api-pacientes

# 3. Instale as dependências de mercado
npm install

# 4. Configure as variáveis no seu arquivo .env
PORT=5000
MONGO_URI=sua_string_de_conexao_mongodb
JWT_SECRET=sua_chave_secreta_jwt

# 5. Inicie o servidor em ambiente de desenvolvimento
npm run dev
```
O servidor rodará localmente em: 👉 `http://localhost:5000`

---

## 🔗 Integração com o Frontend
O frontend **Saúde+ Dashboard** consome esta API em tempo real para gerar inteligência visual de dados médicos. 
Interface hospedada na Vercel: 🔗 [https://saude-dashboard-wine.vercel.app](https://saude-dashboard-wine.vercel.app)

---

## 👩‍💻 Desenvolvida por
**Kelly Cristina Neves** 
- 💼 GitHub: [@KC-Neves](https://github.com/KC-Neves)
- 🌐 Ecossistema Completo: Saúde+ Dashboard + API
