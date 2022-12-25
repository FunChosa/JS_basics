let userName = prompt("Как вас зовут?")
let userAge = prompt("Сколько Вам лет?")

userName = userName.toUpperCase().trim()
userAge = Number(userAge.trim());

alert(`Вас зовут ${userName} и Вам ${userAge} лет`)