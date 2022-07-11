import { Estatistica } from "./Estatistica.js";

export class NovaEstatisticaPremier{
    
    private listaEstatisticaPremier: (Estatistica)[] = [] 
    
    public adiciona(estatistica: Estatistica){
        this.listaEstatisticaPremier.push(estatistica);
    }



    public lista(): (Estatistica)[] {
        return this.listaEstatisticaPremier;
    }

    get Tamanho(){
        return this.listaEstatisticaPremier.length;
    }
}