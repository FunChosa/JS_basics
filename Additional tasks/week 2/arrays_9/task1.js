const goals = [8, 1, 1, 3, 2, -1, 5];
//1.Самый результативный матч по количеству голов.
function TheBestMatch(array){
  let maxNumberOfGoals = array.find((item) => {
    return item == Math.max.apply(Math, array)
})
alert(`Самый результативный матч был под номером ${array.indexOf(maxNumberOfGoals)+1}. В нем было забито ${maxNumberOfGoals} гол(ов)`)
}
//2.Самые не результативные игры. 
function TheWorstMatches(array){

  const filteredArray = array.filter((item) => { //фильтруем массив, оставляя только положительные значения
      return item > -1;
  });

  let minNumberOfGoals = filteredArray.find((item) => {
      return item == Math.min.apply(Math, filteredArray);
  })

  let x = []
  array.forEach((item, index, array) => {
    if(minNumberOfGoals === item){
      x.push(index)
    }
  });

alert(`Самые не результативные матчи были под номерами ${x}. В каждом из них было забито по ${minNumberOfGoals} мячу(а)`)
}

//3.Общее количество голов за сезон. Не берите в учет игры с автоматическим поражением
function AllGoals(array){
  const filteredArray = array.filter((item) => { //фильтруем массив, оставляя только положительные значения
    return item > -1;
  });
  const sumOfGoals = filteredArray.reduce((acc, item) => { //считаем сумму голов
        return acc += item;
  }, 0);
  return alert(`Общее количество голов за сезон равно ${sumOfGoals}`)
}
//4. Были ли автоматические поражения +
function AutomaticDefeat(array){
return (array.includes(-1))
? alert ('Были автоматические поражения: да')
: alert ('Были автоматические поражения: нет')
}
//5.Среднее количество голов за матч +
function AverageResult(array){
const numberOfGoals = array.reduce((acc, item) => {
  return acc += item;
}, 0);
return alert(`Среднее количество голов за матч равно ${Math.floor(numberOfGoals/array.length)}`)
}
//6.Отсортируйте голы в порядке возрастания +
function SortedGoals(array){
let newGoals = []
newGoals = newGoals.concat(array)
alert(newGoals.sort((a, b) => a - b))
}
TheBestMatch(goals)
TheWorstMatches(goals)
AutomaticDefeat(goals)
AverageResult(goals)
SortedGoals(goals)
AllGoals(goals)