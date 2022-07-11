export class NovaEstatisticaBrasileiro {
    listaEstatisticaBrasileiro = [];
    adiciona(estatistica) {
        this.listaEstatisticaBrasileiro.push(estatistica);
    }
    lista() {
        return this.listaEstatisticaBrasileiro;
    }
    get Tamanho() {
        return this.listaEstatisticaBrasileiro.length;
    }
}
