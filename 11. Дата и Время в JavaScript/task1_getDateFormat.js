const addZero = (num) =>
  String(num).length === 1 ? `0${num}` : String(num);

const getDateFormat = (date, separator = ".") => {
  if (!(date instanceof Date)) {
    return "Первый параметр должен быть экземпляром класса Date!";
  }
  const dateItem = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return [dateItem, monthIndex + 1, year]
    .map(addZero)
    .join(separator);
};

console.log(getDateFormat(new Date()));
