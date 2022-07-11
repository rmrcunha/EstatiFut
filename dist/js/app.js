import { EstatisticaController } from "./controller/EstatisticaController.js";
import { ViewController } from "./controller/ViewController.js";
const controller = new EstatisticaController();
const viewController = new ViewController();
const form = document.querySelector('.form');
const viewBrasil = document.querySelector('#viewBrasileiro');
const view = document.querySelector('#view');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionaEstatistica();
    });
}
else {
    throw Error('Form não deve ter sido declarado.');
}
viewBrasil?.addEventListener('click', () => {
    viewController.verEstatisticas();
});
