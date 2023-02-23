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

    async getAllStudents(): Promise<Aluno[]> {
        return await this.alunoModelo.find({}, { __v: false });
    }

    async getStudentById(alunoID: string): Promise<Aluno> {
        return await this.alunoModelo.findById(alunoID, { __v: false });
    }

    async deleteAlunoById(alunoID: string): Promise<Aluno> {
        return this.alunoModelo.findOneAndDelete({ _id: alunoID });
    }

    async updadeAlunoByID(alunoID: string, novoAluno: AlunoDTO): Promise<Aluno> {
        return await this.alunoModelo.findByIdAndUpdate({ _id: alunoID}, novoAluno)
    }
}