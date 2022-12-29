function getWinner(applicants, winnerObject){ 
 
    function getRandomNumberInRange(min,max) { //функция для получения максимума и минимума  
      return Math.floor(Math.random() * (max + 1 - min)) + min
     } 
   
    const keys = Object.keys(applicants) //создаем массив из ключей, пока они в стринговом значении 
    const winnerID = getRandomNumberInRange(0, keys.length - 1) //генерит случайный ключ 
    const winner = keys[winnerID] 
     
    return { 
      ...winnerObject, 
      ...applicants[winner], 
   } 
   
  } 
   
  const todaysWinner = { 
   prize: '10 000$', 
  } 
   
  const winnerApplicants = { 
   '7': { 
      name: 'Максим', 
      age: 25, 
   }, 
   '3': { 
      name: 'Светлана', 
      age: 20, 
   }, 
   '5': { 
      name: 'Екатерина', 
      age: 35, 
   }, 
  } 
   
  const resultWinner = getWinner(winnerApplicants, todaysWinner); 
  console.log('resultWinner', resultWinner);

/*
const todaysWinner = {
  prize: "10 000$"
};

const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25
  },
  "201": {
    name: "Светлана",
    age: 20
  },
  "304": {
    name: "Екатерина",
    age: 35
  }
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getWinner = (applicants, winnerObject) => {
  const applicationNumbers = Object.keys(winnerApplicants);
  const winnerIndex = getRandomNumberInRange(0, applicationNumbers.length);
  const winnerNumber = applicationNumbers[winnerIndex];
  const winnerPerson = applicants[winnerNumber];

  return {
    ...winnerObject,
    ...winnerPerson
  };
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner);

*/