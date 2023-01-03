import { JS_CREATION_DATE } from "../core/constans/settings";
import { JSBlock } from "./js_block";
import { TimerBlock } from "./timer_block";

export default class App { //экспортируем класс чтобы импортировать в index.js
    #jsBlock
    #timerBlock

    constructor() {
        this.#jsBlock = new JSBlock();
        this.#timerBlock = new TimerBlock(JS_CREATION_DATE);
    }

    run() {
        const jsBlockHTML = this.#jsBlock.render();
        const timerBlockHTML = this.#timerBlock.render();
        document.body.append(jsBlockHTML, timerBlockHTML);
    }
}