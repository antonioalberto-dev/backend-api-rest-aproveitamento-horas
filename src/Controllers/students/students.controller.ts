import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AlunoDTO } from 'src/DTO/aluno.dto';

@Controller('students')
export class StudentsController {
    @Get()
    getAllStudents(){
        return 'Todos os alunos'
    }

    @Post()
    saveStudent(@Body() newStudent: AlunoDTO): AlunoDTO {
        return newStudent;
    }

    @Patch()
    updateStudent(): string {
        return 'Este aluno foi atualizado'
    }

    @Delete()
    deleteStudent(): string {
        return 'Este aluno foi removido'
    }
}
