import './index.css';
import JS_IMAGE from './assets/js-image.jpg';

console.log("-Hello world-");

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;

const pageTitle = document.createElement('h1');
pageTitle.textContent = "I love JavaScript";

document.body.append(jsImageHTML);
document.body.append(pageTitle);
