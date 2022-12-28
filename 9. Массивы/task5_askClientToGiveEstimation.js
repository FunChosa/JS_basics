let clientsEstimations = []
function askClientToGiveEstimation(){
    const estimate = Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"))
    if (estimate >= 1 && estimate <= 11){
        clientsEstimations.push(estimate)
    }
}

for(let i = 0; i < 5; i++){
    askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter((item) => {
  return item > 5;
});

const notGoodEstimations = clientsEstimations.filter((item) => {
    return item <= 5;
});

alert(`Всего положительных оценок: ${goodEstimations.length}. Всего отрицательных оценок: ${notGoodEstimations.length}`) 