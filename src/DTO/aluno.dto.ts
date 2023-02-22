import { ArrayMinSize, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Type } from "class-transformer";
import { AtividadeDTO } from "./atividade.dto";

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

    @IsNotEmpty()
    @Type(() => AtividadeDTO)
    @ArrayMinSize(1)
    readonly atividades: AtividadeDTO[];
}