import Paciente from "../models/Paciente.js";

// ➕ Criar paciente
export const criarPaciente = async (req, res) => {
  try {
    const novoPaciente = new Paciente(req.body);
    await novoPaciente.save();
    res.status(201).json(novoPaciente);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar paciente", error });
  }
};

// 📋 Listar todos
export const listarPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar pacientes", error });
  }
};

// ✏️ Atualizar
export const atualizarPaciente = async (req, res) => {
  try {
    const pacienteAtualizado = await Paciente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(pacienteAtualizado);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar paciente", error });
  }
};

// ❌ Deletar
export const deletarPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndDelete(req.params.id);
    res.json({ message: "Paciente removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar paciente", error });
  }
};
