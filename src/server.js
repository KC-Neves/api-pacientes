import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Rotas e middlewares
import authRoutes from "./routes/authRoutes.js";
import pacientesRoutes from "./routes/pacienteRoutes.js";
import { autenticarToken } from "./middleware/authMiddleware.js";

// Carrega variáveis do .env
dotenv.config();

const app = express();

// Middlewares globais
app.use(express.json());
app.use(cors());

// 🔗 Conecta ao MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
  .catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err));

// 🧠 Rota de teste
app.get("/", (req, res) => {
  res.send("🚀 API de Pacientes conectada ao MongoDB Atlas!");
});

// 🪪 Rotas públicas (autenticação)
app.use("/api/auth", authRoutes);

// 🩺 Rotas protegidas (precisam de token JWT)
app.use("/api/pacientes", autenticarToken, pacientesRoutes);

// 🔊 Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
