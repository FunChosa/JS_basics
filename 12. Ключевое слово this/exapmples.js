/*
Стрелочные функции отличаются от обычных в плане работы с 
this. Они не имеют своего "собственного" this, а берут 
его из внешней функции, в которой определена эта стрелочная
функция. Если стрелочная функция не вложена в обычную
функцию, то значением this будет глобальный объект.
Рассмотрим работу с this в стрелочных функциях на примерах:
*/
// 1. Глобальная стрелочная функция
const globalArrowFunc = () => console.log(this);

const obj = {
  // 2. Стрелочная функция в объекте
  objArrowFunc: () => console.log(this),
  objFunc() {
    // 3. Вложенная стрелочная функция
    const nestedObjFunc = () => console.log(this);
    nestedObjFunc();
  }
};

globalArrowFunc(); // window
obj.objArrowFunc(); // window
obj.objFunc(); // object
//===================================
//метод call() помогает одалживать методы
//func.call(context, arg1, arg2, ...)
const car1 = {
    name: "Toyota Corolla",
    showName() {
      console.log(this.name);
    }
  };
  
  const bike = {
    name: "GT Avalanche"
  };
  
  car1.showName(); // Toyota Corolla
// вызвать метод car.showName для объекта bike 
  car1.showName.call(bike); // GT Avalanche

/*
Метод apply() работает практически так же, как call(). 
Единственное отличие состоит в способе передачи параметров 
функции. Метод call() принимает параметры в виде списка 
xерез запятую, а apply() — в виде массива: 
func.apply(context, [arg1, arg2, ...])
*/
const car2 = {
    name: "Kia Rio",
    year: 2021,
    modification: "1.6 AT"
  };
  
  // call
  showInfo.call(car2, "name", "year"); // Kia Rio 2021
  showInfo.call(car2, "name", "modification"); // Kia Rio 1.6 AT
  
  // apply
  showInfo.apply(car2, ["name", "year"]); // Kia Rio 2021
  showInfo.apply(car2, ["name", "modification"]); // Kia Rio 1.6 AT

/*
Методы call() и apply() сразу вызывают функцию с нужным 
контекстом. Метод bind() отличается от них тем, 
что только задает контекст this, но не вызывает функцию. 
При этом он возвращает новую функцию, 
у которой задан контекст this.

Синтаксис метода:

const newFunc = func.bind(context)
Где newFunc() — та же функция, что и func(), но с заданным контекстом context.

Перепишем один из предыдущих примеров, используя метод bind():
*/
function showName() {
  console.log(this.name);
}

const car3 = { name: "Toyota Corolla" };
const carOwner = { name: "Ivan Ivanov" };

// Создаем функцию с контекстом car
const showCarName = showName.bind(car3); 

// Создаем функцию с контекстом carOwner
const showCarOwnerName = showName.bind(carOwner);

// Вызываем новые функции
showCarName(); // Toyota Corolla
showCarOwnerName(); // Ivan Ivanov
//Таким образом, с помощью метода bind() можно также реализовать технику "одалживания" метода. При этом не просто вызвать метод другого объекта, но и скопировать его с нужным нам this:

const car4 = {
  name: "Toyota Corolla",
  showName() {
    console.log(this.name);
  }
};

const bike2 = {
  name: "GT Avalanche"
};

bike.showName = car4.showName.bind(bike2); // Копируем метод
bike.showName(); // GT Avalanche
