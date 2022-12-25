
const myName = "Гульназ"
const programmingLanguage = "JavaScript"
const courseCreatorName = "Владилена Минина"
const reasonText = "мне нравится JavaScript и я люблю подходить к задачам творчески"
const numberOfMont = "4"


let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMont} месяца. Я уверена, что пройду данный курс до конца!`
myInfoText = myInfoText.replaceAll(
    programmingLanguage,
    programmingLanguage.toLowerCase()
  );
  myInfoText = myInfoText.replaceAll('курс', 'КУРС');
  
  console.log("myInfoText", myInfoText);
  console.log("length", myInfoText.length);
  console.log("1-й", myInfoText[0]);
  console.log("последний", myInfoText[myInfoText.length - 1]);
  


