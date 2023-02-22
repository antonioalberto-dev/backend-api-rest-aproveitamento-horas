import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Modalidade } from "src/Models/modalidade.enum";

export class AtividadeDTO{
    @IsNotEmpty()
    // readonly ppc: PPC;
    readonly ppc: number;
    
    @IsNotEmpty()
    readonly modalidade: Modalidade;
    // readonly modalidade: string;

    @IsNotEmpty()
    readonly tipo: string;
    
    @IsNumber()
    readonly horasAtividade: number;
    
    @IsString()
    readonly descricao: string;
}