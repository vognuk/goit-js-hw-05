// Задача 5-3
// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления 
// складом товаров. При вызове будет получать один аргумент - 
// начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

 // Write code under this line
  class Storage {
      constructor (items) {
        this.items = items;
      }

      getItems () {
        return this.items;
      }

      addItem(item) {
        this.items.push(item);
      }

      removeItem(item) {
        if (this.items.includes(item)){
            this.items.splice(this.items.indexOf(item), 1);
        }
      }
  }

console.log(typeof Storage);
// 'function'

const goods = [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ];
  
  const storage = new Storage(goods);
  
  console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ] */
  
  storage.addItem('Дроид');
  console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */
  
  storage.removeItem('Пролонгер');
  console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */
  
  
