/*
Класс – это шаблон кода для создания объектов – экземпляров класса (instance). 
между методами класса запятая не ставится. Если написать между ними запятую, это приведет к синтаксической ошибке!


*/

class Pet {
    constructor(type, name) {
      this.type = type;
      this.name = name;
      this.favoriteAction = 'спать';
    }
    say() {
      console.log(`${this.type} по имени ${this.name} любит ${this.favoriteAction}.`);
    }
  };
  
  const cat = new Pet('Кот', 'Барсик');
  
  console.log(cat);
  // Pet {type: 'Кот', name: 'Барсик', favoriteAction: 'спать'}
  
  cat.say();
  // Кот по имени Барсик любит спать.