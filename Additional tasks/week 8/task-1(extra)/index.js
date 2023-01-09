import './index.css';
import { addNewDonat } from "./src/app";
import * as settings from "./constants/settings"



settings.donatButton.addEventListener('click', (event) =>  {
    event.preventDefault();
    const totalAmountModified = Number((settings.totalAmount.textContent).replace('$',''));

    settings.totalAmount.textContent = (`${totalAmountModified + Number(settings.donat.value)}$`);
    const newDonat = new addNewDonat(settings.donat.value);
    settings.donatesContainerDonates.prepend(newDonat.render());
    settings.donat.value = "";

})