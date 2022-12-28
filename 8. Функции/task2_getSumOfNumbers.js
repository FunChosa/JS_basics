function getSumOfNumbers(number, type){
  if(number === Number(number)){
      let sum = 0
      switch(type){
      case "even":
      
      for(let i=0; i<=number;i++){
          if(i % 2 == 0){
              sum += i
          }
      }
      break

      case "odd":
      for(let i=0; i<=number;i++){
          if(i % 2 == 1){
              sum += i
          }
      }
      break
      
      case "":
      for(let i=0; i<=number;i++){
          sum += i
      }
      break
      }
          return sum
  }else{
      return ("NaN")
  }
}

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55
/*const getSumOfNumbers = (number, type = "odd") => {
    if (typeof number !== "number") {
      return NaN;
    }
  
    let sum = 0;
    for (let i = 0; i <= number; i++) {
      const isEven = i % 2 === 0;
      const isOdd = !isEven;
      if (type === "") {
        sum += i;
      } else if (isEven && type === "even") {
        sum += i;
      } else if (isOdd && type === "odd") {
        sum += i;
      }
    }
  
    return sum;
  };
  
  const result = getSumOfNumbers(10, "even");
  console.log("result", result);
  */