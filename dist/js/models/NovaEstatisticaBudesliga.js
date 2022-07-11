export class NovaEstatisticaBudesliga {
    listaEstatisticaBudesliga = [];
    adiciona(estatistica) {
        this.listaEstatisticaBudesliga.push(estatistica);
    }
    lista() {
        return this.listaEstatisticaBudesliga;
    }
    get Tamanho() {
        return this.listaEstatisticaBudesliga.length;
    }
}
