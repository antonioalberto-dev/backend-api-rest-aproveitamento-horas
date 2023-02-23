import { BadRequestException, Injectable } from '@nestjs/common';
import { AlunoDTO } from 'src/DTO/aluno.dto';
import { Aluno } from 'src/Mongo/Interfaces/aluno.interface';
import { AlunoRepository } from 'src/Mongo/Repository/aluno.repository';

@Injectable()
export class AlunosService {

    constructor(
        private readonly alunoRepository: AlunoRepository
    ) { }

    async getAllStudents(): Promise<AlunoDTO[]> {
        const allStudents = await this.alunoRepository.getAllStudents();

        if(!allStudents.length)
            throw new BadRequestException('There are no students registered yet.');

            return allStudents;
    }

    async saveAluno(novoAluno: AlunoDTO): Promise<Aluno> {
        return await this.alunoRepository.saveAluno(novoAluno);
    }
}
