const existingUserLogin = "the_best_user"
const existingUserPassword  = "12345678"

let userLogin = prompt('Введите логин').trim()
let userPassword = prompt('Введите пароль').trim()

const loginResult = (existingUserLogin === userLogin && existingUserPassword === userPassword) ? alert('добро пожаловать!') : alert('Логин и (или) Пароль введены неверно!')

// if (existingUserLogin === userLogin && existingUserPassword === userPassword){
//     alert('добро пожаловать!')
// } else{
//     alert('Логин и (или) Пароль введены неверно!')
// }