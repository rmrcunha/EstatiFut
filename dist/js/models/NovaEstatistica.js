export class NovaEstatistica {
    listaEstatistica = [];
    adiciona(estatistica) {
        this.listaEstatistica.push(estatistica);
    }
    lista() {
        return this.listaEstatistica;
    }
    get Tamanho() {
        return this.listaEstatistica.length;
    }
}
