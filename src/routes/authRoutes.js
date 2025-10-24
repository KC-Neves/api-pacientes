import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// Registrar novo usuário
router.post("/register", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const existente = await User.findOne({ email });
    if (existente) return res.status(400).json({ message: "Usuário já existe" });

    const novoUsuario = await User.create({ nome, email, senha });
    res.status(201).json({ message: "Usuário criado com sucesso!", userId: novoUsuario._id });
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar", error });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(400).json({ message: "Usuário não encontrado" });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return res.status(400).json({ message: "Senha inválida" });

    // Gera token JWT
    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: "2h" });
    res.json({ message: "Login bem-sucedido!", token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login", error });
  }
});

export default router;
