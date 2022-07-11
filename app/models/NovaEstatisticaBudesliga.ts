import { Estatistica } from "./Estatistica.js";

export class NovaEstatisticaBudesliga{
    
    private listaEstatisticaBudesliga: (Estatistica)[] = [] 
    
    public adiciona(estatistica: Estatistica){
        this.listaEstatisticaBudesliga.push(estatistica);
    }



    public lista(): (Estatistica)[] {
        return this.listaEstatisticaBudesliga;
    }

    get Tamanho(){
        return this.listaEstatisticaBudesliga.length;
    }
}