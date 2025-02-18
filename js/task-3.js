//7
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
    let sumOfEvenNumbers = 0;
      for (let i = max; i >= min; i--) {
      console.log(i);
      if (i % 2 === 0) {
        sumOfEvenNumbers += i;
      }
    }
    return sumOfEvenNumbers;
  }
  const result = getNumbers(1, 10);
  console.log("Сума парних чисел:", result);

  //8
  // Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
// function min(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//       return 'Not a number!';
//     }
//     return a < b ? a : b;
//}
//console.log(min(2, 5));  // Виведе: 2
//console.log(min(3, 3));  // Виведе: 3
//console.log(min(10, -5)); // Виведе: -5
//console.log(min('a', 5)); // Виведе: 'Not a number!'