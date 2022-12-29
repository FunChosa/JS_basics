function getKiller(suspectInfo, deadPeople){ 

    const keys = Object.keys(suspectInfo)
    //создаем вспомогательную функцию, которая проверяет является один массив частью другого массива. в нашем случае, входят ли все элементы массива deadPeople в массив (значение) ключей объекта getKiller
    let checker = (suspectsContacts, victim) => victim.every(item => suspectsContacts.includes(item))

    for (let i = 0; i < keys.length; i++){
            if(checker(suspectInfo[keys[i]], deadPeople)){
               return keys[i]
            }
            break
        }
    }

    console.log(
        getKiller(
          {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"]
          },
          ["Lucas", "Bill"]
        )
      ); // Убийца James
      
      console.log(
        getKiller(
          {
            Brad: [],
            Megan: ["Ben", "Kevin"],
            Finn: []
          },
          ["Ben"]
        )
      ); // Убийца Megan

/*
function getKiller(suspectInfo, deadPeople) {
  let killerName = "";
  Object.entries(suspectInfo).forEach(([suspectPerson, peopleWereSeen]) => {
    const isKiller = deadPeople.every((deadName) =>
      peopleWereSeen.includes(deadName)
    );
    if (isKiller) {
      killerName = suspectPerson;
    }
  });

  return killerName;
}

console.log(
  getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"]
    },
    ["Lucas", "Bill"]
  )
); // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ["Ben", "Kevin"],
      Finn: []
    },
    ["Ben"]
  )
); // Убийца Megan

*/