import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AlunoDTO } from 'src/DTO/aluno.dto';
import { Aluno } from 'src/Mongo/Interfaces/aluno.interface';
import { AlunosService } from 'src/Services/alunos/alunos.service';

@Controller('alunos')
export class AlunoController {

    constructor(
        private readonly alunoService: AlunosService
    ) { }

    @Get()
    async getAllStudents() : Promise<Aluno[]>{
        return await this.alunoService.getAllStudents();
    }

    @Get(':alunoID')
    async getStudentById(@Param('alunoID') alunoID: string): Promise<Aluno>{
        return await this.alunoService.getStudentById(alunoID);
    }

    @Post()
    async saveStudent(@Body() novoAluno: AlunoDTO): Promise<Aluno> {
        return await this.alunoService.saveAluno(novoAluno);
    }

    @Patch(':alunoID')
    async updateStudent(@Param('alunoID') alunoID: string, @Body() novoAluno: AlunoDTO): Promise<Aluno>{
        return await this.alunoService.updateAlunoByID(alunoID, novoAluno);
    }

    @Delete(':alunoID')
    async deleteStudentById(@Param('alunoID') alunoID: string): Promise<Aluno>{
        return await this.alunoService.deleteAlunoById(alunoID);
    }
}
