import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { AlunoDTO } from "src/DTO/aluno.dto";
import { Aluno } from "../Interfaces/aluno.interface";

@Injectable()
export class AlunoRepository {

    constructor(
        @InjectModel('aluno') private readonly alunoModelo: Model<Aluno>
    ) { }

    async saveAluno(novoAluno: AlunoDTO): Promise<Aluno> {
        const savedAluno = new this.alunoModelo(novoAluno);
        return savedAluno.save();
    }
}