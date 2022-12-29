const convertDaysToMs = (days) => days * 24 * 3600 * 1000;

const addDays = (date, days) => {
  if (!(date instanceof Date)) {
    return "Первый параметр должен быть экземпляром класса Date!";
  }
  if (!days || typeof days !== "number") return date;

  return new Date(date.getTime() + convertDaysToMs(days));
};

const date = new Date();
console.log("before", date);
const newDate = addDays(date, 5);
console.log("after", newDate);

/*
function addDays(date, days){
    daysInMsSeconds = days * 1000 * 60 * 60 * 24
    return new Date(date.getTime() + daysInMsSeconds)
}

const day = new Date('October 1, 2023');
console.log(addDays(day, 10))
*/