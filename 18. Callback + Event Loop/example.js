// Давайте начинать!
// Я в промисе!
// Давайте заканчивать
// Возвращаем результат из промиса
// Привет! Я setTimeout!
// Я тоже в setTimeout, только жду подольше!

console.log("Давайте начинать!");

setTimeout(() => {
    console.log('Привет! Я setTimeout!');
}, 1000);

const promise = new Promise((resolve) => {
    console.log('Я в промисе!');
    resolve('Возвращаем результат из промиса');
});

setTimeout(() => {
    console.log('Я тоже в setTimeout, только жду подольше!');
}, 2000);

promise.then((result) => {
    console.log(result);
})

console.log('Давайте заканчивать');