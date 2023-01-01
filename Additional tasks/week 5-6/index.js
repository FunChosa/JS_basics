function createNewElement(type, className){
    const element = document.createElement(type);
    element.className = className;
    return element;
}

class CustomSelect {
    #currentSelectedOption
    get selectedValue () { return this.#currentSelectedOption };

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

        const selectButton = document.querySelector('.select-dropdown__button');
        selectButton.addEventListener("click", () => {
            const selectUl = document.querySelector('ul');
            selectUl.classList.toggle('active');
            selectUl.addEventListener("click", (event) => {
                const selectLi = event.target.closest('li');
                selectLi.classList.toggle('selected');
                if(selectLi){
                    selectLi.classList.toggle('selected');
                    const dataValue = selectLi.getAttribute('data-value');
                    this.#currentSelectedOption = options.find(item => item.value === Number(dataValue))
                    document.querySelector('.select-dropdown__text').textContent = this.#currentSelectedOption.text;
                }
            })
        })
    }
    
}

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('555', options);
const mainContainer = document.querySelector('#container'); 
customSelect.render(mainContainer);
