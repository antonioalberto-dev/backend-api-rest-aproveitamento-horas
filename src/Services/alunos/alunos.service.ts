import { Injectable } from '@nestjs/common';
import { AlunoDTO } from 'src/DTO/aluno.dto';

@Injectable()
export class AlunosService {

    saveAluno(novoAluno: AlunoDTO): AlunoDTO{
        return novoAluno;
    }
}
