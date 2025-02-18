// Завдання 9:

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  a: 0,
  b: 0,

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  exist() {
    return typeof this.a === 'number' && typeof this.b === 'number';
  },

  sum() {
    return this.exist() ? this.a + this.b : 'No such propeties';
  },

  mult() {
    return this.exist() ? this.a * this.b : 'No such propeties';
  },
};
calculator.read(2, 3);
console.log(calculator.sum()); // Виведе 5
console.log(calculator.mult()); // Виведе 6

calculator.read('a', 3);
console.log(calculator.sum()); // Виведе "No such propeties"
console.log(calculator.mult()); // Виведе "No such propeties"

// Завдання 10:

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];
function calcTotalPrice(fruits, fruitName) {
  let totalPrice = 0;

  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      totalPrice += fruit.price * fruit.quantity;
    }
  }

  return totalPrice;
}

const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];

const appleTotalPrice = calcTotalPrice(fruits, "Яблуко");
console.log(`Загальна вартість яблук: ${appleTotalPrice}`); // Виведе: 315

const bananaTotalPrice = calcTotalPrice(fruits, "Банан");
console.log(`Загальна вартість бананів: ${bananaTotalPrice}`); // Виведе: 1375

const grapeTotalPrice = calcTotalPrice(fruits, "Виноград");
console.log(`Загальна вартість винограду: ${grapeTotalPrice}`); // Виведе: 1320