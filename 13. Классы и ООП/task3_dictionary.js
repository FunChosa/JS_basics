class Dictionary {

    constructor(name){
      this.name = name
      this.words = {}
    }
  
    add(word, description){
      if(!this.words[word]){ //проверяем нет ли такого слова в словаре
        this.words[word] = {
            word,
            description
        }
      }
    }
  
    remove(key){
      delete this.words[key]
    }
  
    get(key){
      return this.words[key]
    }
  
    showAllWords(){
      for(const eachWord in this.words){
        console.log(`${this.words[eachWord].word} - ${this.words[eachWord].description}`)
      }
    }
  
  }
  
  const dictionary = new Dictionary('Толковый словарь');
  dictionary.add('JavaScript', 'популярный язык программирования');
  dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
  
  // dictionary.remove('JavaScript');
  //dictionary.get('JavaScript');
  dictionary.showAllWords();
  // // Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие
  // console.log(dictionary)
  