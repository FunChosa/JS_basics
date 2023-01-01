function createNewElement(type, className){
    const element = document.createElement(type);
    element.className = className;
    return element;
}

class CustomSelect {

    constructor (id, options){

        const mainSelectDropDown = createNewElement('div',`select-dropdown select-dropdown--${id}`);
        const buttonSelectDropDown = createNewElement('button', `select-dropdown__button select-dropdown__button--${id}`);
        const spanSelectDropDown  = createNewElement('span', `select-dropdown__text select-dropdown__text--${id}`);
        const ulSelectDropDown = createNewElement('ul', `select-dropdown__list select-dropdown__list--${id}`);
        options.forEach(element => {
            const liSelectDropDown = createNewElement('li', 'select-dropdown__list-item');
            liSelectDropDown.setAttribute('data-value', `${element.value}`);
            liSelectDropDown.textContent = `${element.text}`;
            ulSelectDropDown.append(liSelectDropDown);
        });

        spanSelectDropDown.textContent = "Выберите элемент";
        mainSelectDropDown.append(buttonSelectDropDown);
        mainSelectDropDown.append(ulSelectDropDown);
        buttonSelectDropDown.append(spanSelectDropDown);

        this.dropDownElement = mainSelectDropDown;
    }

    render(container){
        container.append(this.dropDownElement);
    }
    
}

//  <div class="select-dropdown select-dropdown--123">
//    <button class="select-dropdown__button select-dropdown__button--123"> 
//       <span class="select-dropdown__text select-dropdown__text--123">Выберите элемент</span>
//    </button>
//   <ul class="select-dropdown__list select-dropdown__list--123"> 
//      <li class="select-dropdown__list-item" data-value="1">JavaScript</li>
//      <li class="select-dropdown__list-item" data-value="2">NodeJS</li>
//      <li class="select-dropdown__list-item" data-value="3">ReactJS</li>
//      <li class="select-dropdown__list-item" data-value="4">HTML</li>
//      <li class="select-dropdown__list-item" data-value="5">CSS</li> 
//   </ul> 
// </div> 

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('999', options);
const mainContainer = document.querySelector('#container'); 
customSelect.render(mainContainer);
