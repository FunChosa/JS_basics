let javaScriptDescription = 
'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений'
const middleSign = Math.floor((javaScriptDescription.length) / 2) //получаем индекс среднего элемента из оригинальной строки

javaScriptDescription = javaScriptDescription
  .slice(0, middleSign)
  .replaceAll("a", "A") // латиница
  .replaceAll("а", "А") // кириллица
  .replaceAll(" ", "")
  .repeat(3);

const middleSignUpdated =  Math.floor((javaScriptDescription.length) / 2) // получаем индекс среднего элемента из новой строки
alert(javaScriptDescription[middleSignUpdated]) // выводим средний символ новой строки
alert(javaScriptDescription) // выводим новую строку целиком