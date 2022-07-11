export class Estatistica {
    campeonato;
    estatistica;
    valor;
    constructor(campeonato, estatistica, valor) {
        this.campeonato = campeonato;
        this.estatistica = estatistica;
        this.valor = valor;
    }
    get Campeonato() {
        return this.campeonato;
    }
    get Estatistica() {
        return this.estatistica;
    }
    get Valor() {
        return this.valor;
    }
    static criaDe(campeonatoString, estatisticaString, valorString) {
        const campeonato = parseInt(campeonatoString);
        const estatistica = parseInt(estatisticaString);
        const valor = parseFloat(valorString);
        return new Estatistica(campeonato, estatistica, valor);
    }
}
