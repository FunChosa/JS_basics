function getDivisorsCount(number){

    if(number === Number(number)){   
    let count = 0
    if (Number.isInteger(number) && number > 0){
        for (let i = 1; i<=number; i++){
            if(number % i == 0){
                count++
            }
        }
        return count
    }
        else {
            return alert(`${number} должен быть целым числом и больше нуля!`)   
        }
    }

    else {
        return NaN
    }
}

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
console.log(getDivisorsCount('tgh')); // 
console.log(getDivisorsCount(-9)); // 

/*
function getDivisors(number) {
    if (typeof number !== "number") {
      return NaN;
    }
  
    if (!Number.isInteger(number) || number < 0) {
      alert("number должен быть целым числом и больше нуля!");
      return;
    }
  
    let counter = 0;
    for (let i = number; i > 0; i--) {
      if (number % i === 0) {
        counter++;
      }
    }
  
    return counter;
  }
  
  const result = getDivisors(10);
  console.log("result", result);
*/  