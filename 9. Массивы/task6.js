const numbers = [10, 4, 100, -5, 54, 2]; //1158411
let sum1 = 0 //пришлось
let sum2 = 0 //завести
let sum3 = 0 //четыре
let sum4 = 0 //суммы (\/)_0_0_(\/)

// Через цикл for 
const sumWithFor = () => {
for(let i = 0; i < numbers.length; i++){
    sum1 += numbers[i]**3  
}
return sum1
}
console.log('sum with for:', sumWithFor())

// Через цикл for...of
const sumWithForOf = () => {
    for(let number of numbers){
    sum2 += number**3 
}
return sum2
}
console.log('sum with for of:',sumWithForOf())

// Через метод forEach()
const sumWithForEach = () =>{ numbers.forEach((item)=>{
    sum3 += item**3
    }) 
return sum3
}
console.log('sum with for each:',sumWithForEach())


// Через метод reduce()
const sumWithReduce = numbers.reduce((acc, item) => {
  return acc += item**3
}, 0)
console.log('sum with reduce:', sumWithReduce)
