class Dictionary {
  #name
  #words

  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  get mainName() { return this.#name; }
  get allWords() { return this.#words; }

  set mainName(newValue) { this.#name = newValue;}
  
  _addNewWord(wordKey, wordObj){ //вместо set
    let newWord = this.allWords;
    newWord[wordKey] = {
      word : wordObj.word,
      description : wordObj.description,
      isDifficult : wordObj.isDifficult,
    };

  }

  add(word, description) {
    if (!this.allWords[word]) {
      this._addNewWord(word, {
        word,
        description,
      })
      };
    }

  remove(word) { delete this.#words[word];}
  get(word) { return this.#words[word]; }

  showAllWords() {
    Object.values(this.#words).forEach((wordItem) => {
      console.log(`${wordItem.word} - ${wordItem.description}`);
    });
  }
}


class HardWordsDictionary extends Dictionary {
  add(word, description) {
    if (!this.allWords[word]) {
      this._addNewWord(word, {
        word,
        description,
        isDifficult:true,
      })
      };
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

    
// hardWordsDictionary.remove('неологизм');
    
// hardWordsDictionary.showAllWords();
    
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова 
// дилетант и квант