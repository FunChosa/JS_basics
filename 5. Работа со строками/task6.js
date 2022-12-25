let userText = prompt("Введите текст:")
userText = userText.trim()

let wordFromText = prompt("Введите слово из текста:")
wordFromText = wordFromText.trim()

const indexOfWord = userText.indexOf(wordFromText)
const string = userText.substring(userText[0], indexOfWord)
alert(`Результат: ${string}`)