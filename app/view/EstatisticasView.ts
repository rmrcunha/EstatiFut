export abstract class  EstatisticasView<T>{
    protected elemento: HTMLElement;
    private escapar = false;
    protected abstract template(model: T): string;

    constructor(seletor:string, escapar?: boolean){
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM`);
        }
        if (escapar){
            this.escapar = escapar;
        }
    }

    public update(model:T):void{
        let template = this.template(model);
        if (this.escapar){
            template = template
                .replace(/<script>[\s\S]*<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}