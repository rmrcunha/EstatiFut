import { NovaEstatisticaBudesliga } from "../models/NovaEstatisticaBudesliga"
import { EstatisticasView } from "./EstatisticasView"

export class TabelaEstatisticas extends EstatisticasView<NovaEstatisticaBudesliga>{
    
    protected template(model: NovaEstatisticaBudesliga): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Estatistica</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(estatistica =>{
                    return `
                        <tr>
                            <td>${estatistica.Estatistica}</td>
                            <td>${estatistica.Valor}</td>
                        </tr>`
                }).join('')}
            </tbody>
        </table>
        `
    }
}