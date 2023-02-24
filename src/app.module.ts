import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AlunoController } from './Controllers/aluno/aluno.controller';
import { ArquivoController } from './Controllers/arquivo/arquivo.controller';
import { AlunoRepository } from './Mongo/Repository/aluno.repository';
import { AlunoSchema } from './Mongo/Schemas/aluno.schema';
import { FileSchema } from './Mongo/Schemas/arquivo.schema';
import { AlunosService } from './Services/alunos/alunos.service';
import { ArquivosService } from './Services/arquivos/arquivos.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/sistema'),
    MongooseModule.forFeature([
      { name: 'aluno', schema: AlunoSchema },
      { name: 'file', schema: FileSchema }
    ])
  ],
  controllers: [AlunoController, ArquivoController],
  providers: [AlunosService, AlunoRepository, ArquivosService],
})
export class AppModule { }
