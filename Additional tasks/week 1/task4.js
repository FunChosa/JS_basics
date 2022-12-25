const userPassword = prompt('Введите пароль')

const isLength = userPassword.length >= 3 && userPassword.length <= 30 //проверка на длину
const isNumber = userPassword.match(/\d/) //проверка на число
const isLetter = userPassword.match(/[A-Z]/) //проверка на прописную букву

const checkPassword = (isLength && isNumber && isLetter)
    ? alert('Пароль валидный. Добро пожаловать в аккаунт!')
    : alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще   раз.')


// let isLetter = false //проверка на прописную букву
// if(UserPassword !== UserPassword.toLowerCase()){
//         isLetter = true
// }

