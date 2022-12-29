function getUsers(users) {
    const checkParameter = Array.isArray(users) //проверяем является ли массивом аргумент функции 
    if(checkParameter){//если да, то выполняем фильтрацию и возвращаем пользователей старше 18 
      return users.filter(item => item.age >= 18)
      }
      else{ //если аргумент является объектом
        let adultUsers = {...users} //то мы создаем новый объект, чтобы основной не подвергся изменениям
        for (const user in adultUsers){ 
          if(adultUsers[user].age < 18){ //удаляем все объекты, если их возраст меньше 18
            delete adultUsers[user]
          }}
          return adultUsers
        }
  }
  
  
  const usersArray = [
    { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
    { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
    { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
    { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
    { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
  ];
  
  const usersObject = {
    '34rdca3eeb7f6fgeed471198': { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
    '76rdca3eeb7f6fgeed471100': { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 }, 
    '12rdca3eeb7f6fgeed4711012': { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
    '32rdca3eeb7f6fgeed471101': { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
    '98rdca3eeb7f6fgeed471102': { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
  };
  
  console.log(getUsers(usersArray))
  console.log(getUsers(usersObject))

/*
const usersArray = [
  { id: "34rdca3eeb7f6fgeed471198", name: "Andrew", age: 25 },
  { id: "76rdca3eeb7f6fgeed471100", name: "Alexey", age: 15 },
  { id: "12rdca3eeb7f6fgeed4711012", name: "Egor", age: 13 },
  { id: "32rdca3eeb7f6fgeed471101", name: "Kate", age: 31 },
  { id: "98rdca3eeb7f6fgeed471102", name: "Elena", age: 18 }
];

const usersObject = {
  "34rdca3eeb7f6fgeed471198": {
    id: "34rdca3eeb7f6fgeed471198",
    name: "Andrew",
    age: 25
  },
  "76rdca3eeb7f6fgeed471100": {
    id: "76rdca3eeb7f6fgeed471100",
    name: "Alexey",
    age: 15
  },
  "12rdca3eeb7f6fgeed4711012": {
    id: "12rdca3eeb7f6fgeed4711012",
    name: "Egor",
    age: 13
  },
  "32rdca3eeb7f6fgeed471101": {
    id: "32rdca3eeb7f6fgeed471101",
    name: "Kate",
    age: 31
  },
  "98rdca3eeb7f6fgeed471102": {
    id: "98rdca3eeb7f6fgeed471102",
    name: "Elena",
    age: 18
  }
};

function getAdultUsers(users) {
  if (typeof users === "object" && users !== null) {
    return Array.isArray(users)
      ? users.filter((u) => u.age >= 18)
      : Object.keys(users)
          .filter((key) => users[key].age >= 18)
          .reduce((acc, key) => {
            acc[key] = users[key];
            return acc;
          }, {});
  } else {
    return [];
  }
}
*/