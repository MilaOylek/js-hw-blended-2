// Завдання 4:

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function sumAdjacentNumbers(arr) {
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i] + arr[i + 1]);
  }

  return result;
}

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
const newArr = sumAdjacentNumbers(someArr);
console.log(newArr); // Виведе: [33, 45, 39, 17, 25, 27, 29]

// Завдання 5:

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Sory, it is not an array!";
  }

  if (numbers.length === 0) {
    return "Sory, the array is empty!";
  }

  let smallestNumber = numbers[0]; // Припускаємо, що перший елемент - найменший

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
    }
  }

  return smallestNumber;
}

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
console.log(findSmallestNumber(numbers)); // Виведе: 2

console.log(findSmallestNumber([10, 20, 30])); // Виведе: 10
console.log(findSmallestNumber([])); // Виведе: Sory, the array is empty!
console.log(findSmallestNumber("not an array")); // Виведе: Sory, it is not an array!

// Завдання 6:

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
  const words = string.split(" ");
  if (words.length === 0) {
    return "";
  }

  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }

    return longestWord;
  }
}
console.log(findLongestWord("London is the capital of Great Britain")); // Виведе: "capital"
console.log(findLongestWord("This is a test string")); // Виведе: "string"
console.log(findLongestWord("One")); // Виведе: "One"
console.log(findLongestWord("")); // Виведе: ""
