export class NovaEstatisticaPremier {
    listaEstatisticaPremier = [];
    adiciona(estatistica) {
        this.listaEstatisticaPremier.push(estatistica);
    }
    lista() {
        return this.listaEstatisticaPremier;
    }
    get Tamanho() {
        return this.listaEstatisticaPremier.length;
    }
}
