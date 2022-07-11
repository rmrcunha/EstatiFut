export class Estatistica{
    constructor(
        private campeonato: number,
        private estatistica: number,
        public valor:number,
        ){}

    get Campeonato(){
        return this.campeonato;
    }

    get Estatistica(){
        return this.estatistica;
    }

    get Valor(){
        return this.valor;
    }

    public static criaDe(campeonatoString: string, estatisticaString: string, valorString: string){
        const campeonato = parseInt(campeonatoString);
        const estatistica = parseInt(estatisticaString);
        const valor = parseFloat(valorString);
        
        return new Estatistica(campeonato, estatistica, valor);
    }
}