import { NovaEstatisticaBrasileiro } from "../models/NovaEstatisticaBrasileiro.js";
import { NovaEstatisticaBudesliga } from "../models/NovaEstatisticaBudesliga.js";
import { NovaEstatisticaPremier } from "../models/NovaEstatisticaPremier.js";
import { TabelaEstatisticas } from "../view/TabelaEstatisticas.js";
import { EstatisticaController } from "./EstatisticaController.js";
export class ViewController {
    estatisticasBrasileiro = new NovaEstatisticaBrasileiro();
    estatisticaPremier = new NovaEstatisticaPremier();
    estatisticaBudesliga = new NovaEstatisticaBudesliga();
    controller = new EstatisticaController();
    tabelaEstatisticas = new TabelaEstatisticas('#listaDeEstatisticas', true);
    constructor() {
        this.tabelaEstatisticas.update(this.estatisticasBrasileiro);
    }
    atualizaView(campeonato) {
        this.tabelaEstatisticas.update(campeonato);
    }
    verEstatisticas() {
        this.atualizaView(this.controller.estatisticasBrasileiro);
    }
}
