// setTimeout(() => {
//     console.log('setTimeout');
// }, 3000);

// setInterval(() => {
//     console.log('setInterval');
// }, 1000);

const developer ={
    name: 'Maksim',
    isJSDev: true,
};

//pending, fullfilled, rejected

const promise = new Promise((resolve, reject) =>{
    if(developer.isJSDev){
        setTimeout(() => {
            resolve(`${developer.name} является JavaScript разработчиком`);
        }, 3000);
    }else{
        reject(`${developer.name} НЕ является JavaScript разработчиком`)
    }
});

console.log(promise); //выведет pendng статус
//then, catch, finally

promise
    .then((successMessage) => {
        console.log('successMessage',successMessage);
    })
    .catch((error) => {
        console.log('error',error);
    })
    .finally(() => { //вызовется в любом случае, но в том порядке, в котором написан в коде
        console.log('finally');
    })