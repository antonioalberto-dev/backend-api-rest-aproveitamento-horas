import { Document } from "mongoose";
import * as mongoose from "mongoose";

export interface Aluno extends Document {
    
    readonly _id: mongoose.Schema.Types.ObjectId,
    readonly atividades: object,
    readonly nome: string,
    readonly email: string,
    readonly matricula: string,
    readonly senha: string,
}