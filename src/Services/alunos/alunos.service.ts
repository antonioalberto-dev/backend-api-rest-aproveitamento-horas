import { BadRequestException, Injectable } from '@nestjs/common';
import { AlunoDTO } from 'src/DTO/aluno.dto';
import { Aluno } from 'src/Mongo/Interfaces/aluno.interface';
import { AlunoRepository } from 'src/Mongo/Repository/aluno.repository';

@Injectable()
export class AlunosService {

    constructor(
        private readonly alunoRepository: AlunoRepository
    ) { }

    async getAllStudents(): Promise<Aluno[]> {
        const allStudents = await this.alunoRepository.getAllStudents();

        if (!allStudents.length)
            throw new BadRequestException('There are no students registered yet.');

        return allStudents;
    }

    async saveAluno(novoAluno: AlunoDTO): Promise<Aluno> {
        return await this.alunoRepository.saveAluno(novoAluno);
    }

    async getStudentById(alunoID: string): Promise<Aluno> {
        try {
            const existAluno = await this.alunoRepository.getStudentById(alunoID);
            if (!existAluno)
                throw new BadRequestException("There is no results");
            return existAluno;
        } catch (error) {
            throw new BadRequestException("There are no results");

        }
    }

    async deleteAlunoById(alunoID: string): Promise<Aluno> {
        try {
            return await this.alunoRepository.deleteAlunoById(alunoID);
        } catch (error) {
            throw new BadRequestException("This aluno does not exist");
        }
    }

    async updateAlunoByID(alunoID: string, novoAluno: AlunoDTO): Promise<Aluno> {

        const existAluno = await this.alunoRepository.getStudentById(alunoID);

        if (!existAluno)
            throw new BadRequestException("There is no results with this ID");

        return await this.alunoRepository.updadeAlunoByID(alunoID, novoAluno);
    }
}
