import { Module } from '@nestjs/common';
import { StudentsController } from './Controllers/students/students.controller';


@Module({
  imports: [],
  controllers: [StudentsController],
  providers: [],
})
export class AppModule {}
