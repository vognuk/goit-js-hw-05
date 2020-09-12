// Задача 5-2
// class
// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: 
// User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

 // Write code under this line
'use strict'
 class User {
     constructor (name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
     }

     getInfo() {
         return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
     }
 }

console.log(typeof User);
// 'function'

const mango = new User('Mango', 2, 20);
console.log(mango.getInfo()); 
// 'User Mango is 2 years old and has 20 followers'

console.log(typeof mango.getInfo); 
// 'function'  

const poly = new User('Poly', 3, 17);
console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'
