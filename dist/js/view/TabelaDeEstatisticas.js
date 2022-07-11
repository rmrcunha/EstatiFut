export class EstatisticasTabela {
    elemento;
    constructor(elemento) {
        this.elemento = elemento;
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Campeonato</th>
                <th>Estatistica</th>
                <th>Quantidade</th>
            </tr>
        <thead>
        `;
    }
    update(model) {
        return this.elemento.innerHTML = this.template(model);
    }
}
