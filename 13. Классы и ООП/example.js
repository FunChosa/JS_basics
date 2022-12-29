// /*
// Класс – это шаблон кода для создания объектов – экземпляров класса (instance). 
// между методами класса запятая не ставится. Если написать между ними запятую, это приведет к синтаксической ошибке!


// */

// class Pet {
//     constructor(type, name) {
//       this.type = type;
//       this.name = name;
//       this.favoriteAction = 'спать';
//     }
//     say() {
//       console.log(`${this.type} по имени ${this.name} любит ${this.favoriteAction}.`);
//     }
//   };
  
//   const cat = new Pet('Кот', 'Барсик');
  
//   console.log(cat);
//   // Pet {type: 'Кот', name: 'Барсик', favoriteAction: 'спать'}
  
//   cat.say();
//   // Кот по имени Барсик любит спать.


//   /*
//   Наследование – это создание дочерних классов на основе родительских.

//   */

//   class Transport {
//     constructor(type, category) {
//       this.type = type;
//       this.category = category;
//     }
//     sayInfo() {
//       console.log(`Тип данного транспорта: ${this.type}. Сфера применения: ${this.category}`);
//     }
//     move() {
//       console.log('В путь!')
//     }
//   };
  
//   // Класс автомобиля
//   class Car extends Transport {
//     constructor(type, category) {
//       super(type, category);
//       this.numOfWheels = 4;
//     }
//     move() {
//       console.log('Поехали!')
//     }
//   };
  
//   // Класс самолета
//   class Plane extends Transport {
//     constructor(type, category) {
//       super(type, category);
//       this.numOfWheels = 3;
//       this.numOfWings = 2;
//     }
//     move() {
//       console.log('Полетели!')
//     }
//   };
  
//   const car = new Car('Автомобиль', 'Пассажирский');
//   console.log(car);
//   // Car {type: 'Автомобиль', category: 'Пассажирский', numOfWheels: 4}
  
//   const plane = new Plane('Самолет', 'Грузовой');
//   console.log(plane);
//   // Plane {type: 'Самолет', category: 'Грузовой', numOfWheels: 3, numOfWings: 2}

//   /*
//   instanceof
//   С помощью оператора instanceof мы можем проверить принадлежность объекта к классу:
//   */
// class FirstClass {};
// class SecondClass {};

// const obj1 = new FirstClass();

// console.log(obj1 instanceof FirstClass); // true
// console.log(obj1 instanceof SecondClass); // false

// /*
// Инкапсуляция — это объединение в одном месте данных и поведения, которое работает с этими данными.
//  */

// class User {
//   constructor(name) {
//     // Данные
//     this.name = name;
//   }

//   // Поведение
//   sayHi() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// };

// // Данные и поведение объединены в одном объекте
// new User('Alex').sayHi(); 

// /**
//  Инкапсуляция в JavaScript позволяет добавить сокрытие. Это означает, что, например:

// Некоторые методы мы можем разрешать вызывать снаружи, а некоторые –только внутри класса (публичные и приватные методы).
// Некоторые свойства мы можем разрешать изменять снаружи, а некоторые – только через специальные методы (или вовсе не давать к ним доступ).
//  */

// class SimpleClass {
//   // Приватное свойство
//   #privateValue

//   constructor() {
//     this.value = 'Hello World!';
//     // Запись в приватное свойство
//     this.#privateValue = 'JavaScript';
//   }

//   sayHi() {
//     console.log(this.value);
//     // Вызов приватного метода
//     this.#privateMethod();
//   }

//   // Приватный метод
//   #privateMethod() {
//     // Чтение приватного свойства
//     console.log(`I love ${this.#privateValue}`)
//   }
// };

// const obj = new SimpleClass();

// console.log(obj.#privateValue);
// // Uncaught SyntaxError: Private field '#privateValue' must be declared in an enclosing class

// obj.#privateMethod();
// // Uncaught SyntaxError: Private field '#privateMethod' must be declared in an enclosing class

// obj.sayHi();
// // Hello World!
// // I love JavaScript

// /*
// Но неужели с приватными свойствами никак нельзя работать за пределами класса (кроме публичных методов)? 
// Можно. Для этого также можно воспользоваться геттерами и сеттерами.

// Для того чтобы получить значение приватных данных, например, можно воспользоваться геттером. 
// Его необходимо создать внутри класса с помощью ключевого слова get:
// */

// class SimpleClass {
//   #privateValue

//   constructor() {
//     this.#privateValue = 'JavaScript';
//   }

//   get value() {
//     // сработает, при чтении obj.value
//     return this.#privateValue;
//   }
// };

// const obj = new SimpleClass();
// console.log(obj.value); // JavaScript

// /*
// А для того чтобы изменить значение, можно воспользоваться сеттером. 
// Они создаются таким же образом, как и геттеры, но ключевое слово теперь – это set:
// */

// class SimpleClass {
//   #privateValue

//   constructor() {
//     this.#privateValue = 'JavaScript';
//   }

//   get value() {
//     // сработает, при чтении obj.value
//     return this.#privateValue;
//   }

//   set value(newValue) {
//     // сработает, при записи obj.value = ...
//     this.#privateValue = newValue;
//   }
// };

// const obj1 = new SimpleClass();
// console.log(obj.value); // JavaScript

// obj1.value = 'TypeScript';
// console.log(obj.value); // TypeScript


// // Полиморфизм

// /*
// это способность вызвать один и тот же метод у разных объектов, 
// и при этом они могут выполнять разные действия. 
// То есть одинаковым будет только имя метода, его реализация будет зависеть от класса. 
// Посмотрим на примере:
// */
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {}
// };

// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   makeSound() {
//     console.log('Мяу');
//   }
// }

// class Dog extends Animal {
//   // Примечание: Если конструктор просто вызывает родительский 
//   // со всеми переданными параметрами, то его можно не определять

//   makeSound() {
//     console.log('Гав');
//   }
// }

// const cat = new Cat('Мурзик');
// cat.makeSound(); // Мяу

// const dog = new Dog('Бобик');
// dog.makeSound(); // Гав

// //СТАТИЧЕСКИЕ МЕТОДЫ И СВОЙСТВА
// class Person {
//   static isPerson(obj) {
//     return obj instanceof Person;
//   }

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person1 = new Person('Алекс', 25);
// const person2 = {};

// console.log(Person.isPerson(person1)); // true
// console.log(Person.isPerson(person2)); // false
// //Важно отметить, что статические свойства и методы также наследуются для дочерних классов. 
// //другой пример
// class SimpleClass {
//   static defaultParams = {
//     value1: 'I love',
//     value2: 'JavaScript',
//   }

//   constructor(value1, value2) {
//     this.value1 = value1 || SimpleClass.defaultParams.value1;
//     this.value2 = value2 || SimpleClass.defaultParams.value2;
//   }

//   sayHi() {
//     console.log(this.value1, this.value2);
//   }
// };
// /*
// Здесь мы создали статическое свойство defaultParams со значением в виде объекта 
// со свойствами value1 и value2. В конструкторе для свойств мы прописали 
// значения вида value1 || SimpleClass.defaultParams.value1. Обрати внимание, 
// что внутри конструктора и других методов для получения статических свойств/методов
// нужно обращаться через название класса 
// SimpleClass.defaultParams.value1 
// (или также можно this.constructor.defaultParams.value1). 
// Таким образом, мы задали значения по умолчанию для свойств. 
// То есть, если при создании экземпляра класса, например, 
// в параметр value1 не было передано значение, 
// тогда свойству value1 присвоится значение из объекта defaultParams.
// */