// src/models/Paciente.js
import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  pressao: { type: String },
  glicemia: { type: Number },
  batimentos: { type: Number },
  criadoEm: { type: Date, default: Date.now },
});

export default mongoose.model("Paciente", pacienteSchema);
