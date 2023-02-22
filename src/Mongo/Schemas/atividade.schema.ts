import { Schema } from "mongoose";
import { Modalidade } from "src/Models/modalidade.enum";

export const AtividadeSchema = new Schema({
    ppc: Number,
    modalidade: String,
    tipo: String,
    horasAtividade: Number,
    descricao: String
})