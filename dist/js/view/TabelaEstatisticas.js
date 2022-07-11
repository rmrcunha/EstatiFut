import { EstatisticasView } from "./EstatisticasView.js";
export class TabelaEstatisticas extends EstatisticasView {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Estatistica</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(estatistica => {
            return `
                        <tr>
                            <td>${estatistica.Estatistica}</td>
                            <td>${estatistica.Valor}</td>
                        </tr>`;
        }).join('')}
            </tbody>
        </table>
        `;
    }
}
