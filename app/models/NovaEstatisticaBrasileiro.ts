import { Estatistica } from "./Estatistica.js";

export class NovaEstatisticaBrasileiro{
    
    private listaEstatisticaBrasileiro: (Estatistica)[] = [] 
    
    public adiciona(estatistica: Estatistica){
        this.listaEstatisticaBrasileiro.push(estatistica);
    }

    public lista(): (Estatistica)[] {
        return this.listaEstatisticaBrasileiro;
    }

    get Tamanho(){
        return this.listaEstatisticaBrasileiro.length;
    }
}