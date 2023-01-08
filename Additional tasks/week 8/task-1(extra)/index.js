import './index.css';
import { addNewDonat } from "./src/app";


const donatButton = document.querySelector('.donate-form__submit-button');

donatButton.addEventListener('click', (event) =>  {
    event.preventDefault();
    
    const donat = document.querySelector('.donate-form__donate-input');
    const totalAmount = document.querySelector('#total-amount');
    const totalAmountModified = Number((totalAmount.textContent).replace('$',''));
    const donatesContainerDonates = document.querySelector('.donates-container__donates');

    totalAmount.textContent = (`${totalAmountModified + Number(donat.value)}$`);

    const newDonat = new addNewDonat(donat.value);
    donatesContainerDonates.prepend(newDonat.render());
    donat.value = "";

})