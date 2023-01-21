function random(min, max) { 
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function createNewElement(type, className){
    const element = document.createElement(type);
    element.className = className;
    return element;
}


const body = document.querySelector('body');
body.addEventListener('click', (event) => {
const check = document.querySelector('.randomNumber');
if(!check){
    trigger();
}})

function trigger(){

    const mainBlock = createNewElement('div', 'randomNumber');
    const body = document.querySelector('body');

    const titleFunction = document.createElement('h1');
    titleFunction.textContent = 'Рандомайзер целыx, положительных чисел';
    titleFunction.style.color = "#ff1493"
    const fromNumber = createNewElement('input', 'from');
    const toNumber = createNewElement('input', 'to');
    const mainButton = createNewElement('button', 'mainButton');
    const resultWindow = createNewElement('div', 'result');
    mainButton.textContent = 'сгенерировать случайное целое число';

    mainBlock.append(titleFunction, fromNumber, toNumber, mainButton, resultWindow);
    body.append(mainBlock);

    
    const button = document.querySelector('button');
    const resultRandomValue = document.querySelector('.result');


    button.addEventListener('click', (event) =>{
    const minNumber = document.querySelector('.from');
    const maxNumber = document.querySelector('.to');

    const x = Number(minNumber.value);
    const y = Number(maxNumber.value);

    if(isNaN(x) || isNaN(y)){
    resultRandomValue.textContent = 'Дурак введи число';
    }else if(x < 0 || y < 0){
        resultRandomValue.textContent = 'Введите положительные числа';
    }else if(minNumber.value === "" || maxNumber.value === ""){
        resultRandomValue.textContent = 'Значени не должны быть пустыми!';
    }else if(minNumber.value >= maxNumber.value){
        resultRandomValue.textContent = 'Подумай еще чуть-чуть';
    }else{
        resultRandomValue.textContent = random(x, y);
    }})

    return mainBlock;
}
  