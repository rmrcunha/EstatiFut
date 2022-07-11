import { Estatistica } from "../models/Estatistica.js";
import { NovaEstatisticaBrasileiro} from "../models/NovaEstatisticaBrasileiro.js"
import { NovaEstatisticaBudesliga } from "../models/NovaEstatisticaBudesliga.js";
import { NovaEstatisticaPremier } from "../models/NovaEstatisticaPremier.js";

export class EstatisticaController{
    private inputCampeonato: HTMLSelectElement;
    private inputEstatistica: HTMLSelectElement;
    private inputValor: HTMLSelectElement;
    estatisticasBrasileiro = new NovaEstatisticaBrasileiro();
    estatisticaPremier = new NovaEstatisticaPremier();
    estatisticaBudesliga = new NovaEstatisticaBudesliga();
    constructor(){
        this.inputCampeonato = document.querySelector('#campeonato')!;
        this.inputEstatistica = document.querySelector('#estatistica')!;
        this.inputValor = document.querySelector('#valor')!;        
    }
    


    adicionaEstatistica(): void{
        if(this.inputCampeonato.value == " " || this.inputEstatistica.value == " " || parseInt(this.inputValor.value) < 0)
        {   
            console.log('Não foi possivel registrar a estatística')
            this.limparFormulario();
            return
        }   else
        {
            let estatistica = this.abreEstatistica();
            this.escolheCampeonato(estatistica);
            this.limparFormulario();
            console.log('Estatística criada com sucesso')
        }
    }


    private escolheCampeonato(estatistica: Estatistica){
        if(parseInt(this.inputCampeonato.value) == 1)
            this.estatisticasBrasileiro.adiciona(estatistica);
        if(parseInt(this.inputCampeonato.value) == 2)
            this.estatisticaBudesliga.adiciona(estatistica);
        if(parseInt(this.inputCampeonato.value) == 3)
            this.estatisticaPremier.adiciona(estatistica);
    }

    private abreEstatistica(): Estatistica{
        return Estatistica.criaDe(
            this.inputCampeonato.value,
            this.inputEstatistica.value,
            this.inputValor.value
        );
    }


    private limparFormulario(): void{
        this.inputValor.value = '0';
        this.inputCampeonato.focus();
    }
}