const student = {
    stack: ['HTML'],
    level: 1,
    importlevel(){
      this.level++
      if (this.level > 5){ //костыль. был вариант просто поставить в switch дефолотное значение, без вычисления (this.level > 5), но потом был добавлен (case 1: break;) потому что мы можем. короче говоря,  проверка (this.level > 5) не помешает ^_^
        this.level = 'значение уже больше 5'//можно было так же присвоить что угодно, за исключением чисел 1-5. я выбрала строку, которая говорит сама за себя
      }
      switch(this.level){
        case 1: break;
        case 2: this.stack.push('CSS'); break;
        case 3: this.stack.push('JavaScript'); break;
        case 4: this.stack.push('React'); break;
        case 5: this.stack.push('NodeJS'); break;
        default: alert('Студент выучил все технологии!'); break;
      }
      return this;
    }
  }
  
  console.log(student
  .importlevel() //2
  .importlevel() //3
  .importlevel() //4
  .importlevel() //5
  .importlevel())//6