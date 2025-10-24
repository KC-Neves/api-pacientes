// src/routes/pacientes.js
import express from "express";
import Paciente from "../models/Paciente.js";

const router = express.Router();

// 🟢 GET - Listar todos os pacientes
router.get("/", async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar pacientes" });
  }
});

// 🔵 POST - Criar novo paciente
router.post("/", async (req, res) => {
  try {
    const novoPaciente = new Paciente(req.body);
    await novoPaciente.save();
    res.status(201).json(novoPaciente);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar paciente" });
  }
});

// 🟡 PUT - Atualizar paciente
router.put("/:id", async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(paciente);
  } catch (err) {
    res.status(400).json({ error: "Erro ao atualizar paciente" });
  }
});

// 🔴 DELETE - Remover paciente
router.delete("/:id", async (req, res) => {
  try {
    await Paciente.findByIdAndDelete(req.params.id);
    res.json({ message: "Paciente removido com sucesso" });
  } catch (err) {
    res.status(400).json({ error: "Erro ao remover paciente" });
  }
});

export default router;
