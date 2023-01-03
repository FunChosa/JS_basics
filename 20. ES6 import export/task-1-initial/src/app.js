import { getRandomColor } from "./utils";

export default function initApp() {
    const mainBody = document.querySelector('body');
    const mainButton = document.createElement('button');
    mainButton.className = "button";
    mainButton.textContent = "Изменить цвет страницы";
    mainBody.append(mainButton);
    
    mainButton.addEventListener('click', () =>  {
        document.body.style.backgroundColor = getRandomColor();
    })
  }

  