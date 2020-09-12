// Задача 5-4
// переиспользование методов класса
// Напиши класс StringBuilder. На вход он получает один параметр - 
// строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

 // Write code under this line
  class StringBuilder {
    constructor (str){
      this._value = str;
    //   this.str = str;
    }

    get value () {
        return this._value;
    }

    append(str) {
        return this._value += str;
    };

    prepend(str) {
        return this._value = str + this._value;
    };

    pad(str) {
        this.append(str);
        this.prepend(str);
    };
  }

console.log(typeof StringBuilder);
// 'function'


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

