import './index.css';


const donatButton = document.querySelector('.donate-form__submit-button');
donatButton.addEventListener('click', (event) =>  {
    event.preventDefault();
    
    const donat = document.querySelector('.donate-form__donate-input');
    const totalAmount = document.querySelector('#total-amount');
    const totalAmountLikeNumber = Number((totalAmount.textContent).replace('$',''));
    const donatesContainerDonates = document.querySelector('.donates-container__donates');

    totalAmount.textContent = (`${totalAmountLikeNumber + Number(donat.value)}$`);
    const newDonat = document.createElement('div');
    newDonat.className = 'donate-item';
    newDonat.textContent = `${new Date()} - ${donat.value}`
    donatesContainerDonates.append(newDonat);
    donat.value = "";

})

