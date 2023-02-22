import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AlunoController } from './Controllers/aluno/aluno.controller';
import { AlunoRepository } from './Mongo/Repository/aluno.repository';
import { AlunoSchema } from './Mongo/Schemas/aluno.schema';
import { AlunosService } from './Services/alunos/alunos.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/sistema'),
    MongooseModule.forFeature([
      {name: 'aluno', schema: AlunoSchema}
    ])
  ],
  controllers: [AlunoController],
  providers: [AlunosService, AlunoRepository],
})
export class AppModule { }
