import { NovaEstatisticaBrasileiro } from "../models/NovaEstatisticaBrasileiro.js";
import { NovaEstatisticaBudesliga } from "../models/NovaEstatisticaBudesliga.js";
import { NovaEstatisticaPremier } from "../models/NovaEstatisticaPremier.js";
import { TabelaEstatisticas } from "../view/TabelaEstatisticas.js";
import { EstatisticaController } from "./EstatisticaController.js";

export class ViewController{
    private estatisticasBrasileiro = new NovaEstatisticaBrasileiro();
    private estatisticaPremier = new NovaEstatisticaPremier();
    private estatisticaBudesliga = new NovaEstatisticaBudesliga();
    private controller = new EstatisticaController();
    private tabelaEstatisticas = new TabelaEstatisticas('#listaDeEstatisticas', true);
    
    constructor(){
        this.tabelaEstatisticas.update(this.estatisticasBrasileiro);
    }


    public atualizaView(campeonato: any){
        this.tabelaEstatisticas.update(campeonato);
    }

    verEstatisticas(){
        this.atualizaView(this.controller.estatisticasBrasileiro);
    }
}