import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Modalidade } from "src/Models/modalidade.enum";
import { PPC } from "src/Models/ppc.enum";

export class AtividadeDTO{
    @IsNotEmpty()
    readonly ppc: PPC;
    
    @IsNotEmpty()
    readonly modalidade: Modalidade;
    
    @IsNumber()
    readonly horasAtividade: number;
    
    @IsString()
    readonly descricao: string;
}