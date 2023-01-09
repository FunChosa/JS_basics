import { getTodayDateFormat } from "./date";

export default class addNewDonat {
    
    #pay
    #donatDate
    #donatValue

    constructor(pay) {
        this.#pay = pay;
        this.#donatDate = document.createElement('div');
        this.#donatValue = document.createElement('b');
    }

    render() {
        this.#donatDate.className = 'donate-item';
        this.#donatDate.textContent = `${getTodayDateFormat(new Date())} - `;

        this.#donatValue.textContent = `${this.#pay}$`;
        this.#donatDate.append(this.#donatValue);
        return this.#donatDate;
    }

}