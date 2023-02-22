import { Schema } from "mongoose";
import { AtividadeSchema } from "./atividade.schema";

export const AlunoSchema = new Schema({
    nome: String,
    email: String,
    matricula: String,
    senha: String,
    atividades: [AtividadeSchema]
})