import { ArrayMinSize, IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, MinLength } from "class-validator";
import { Type } from "class-transformer";
import { AtividadeDTO } from "./atividade.dto";
import { Optional } from "@nestjs/common";

export class AlunoDTO {
    @IsNotEmpty()
    @IsString()
    readonly nome: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly matricula: string;

    @MinLength(6)
    readonly senha: string;

    @Type(() => AtividadeDTO)
    @Optional()
    @ArrayMinSize(1)
    readonly atividades: AtividadeDTO[];
}