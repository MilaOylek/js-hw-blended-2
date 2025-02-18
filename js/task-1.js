// Завдання 1:

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

let styles = ["jazz", "blues"];
styles.push("rock-n-roll");
const bluesIndex = styles.indexOf("blues");
if (bluesIndex !== -1) {
  styles[bluesIndex] = "classic";
}

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(styles);

// Завдання 2:

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(array) {
  const userName = prompt("Введіть ваше ім'я:");
  if (array.includes(userName)) {
    alert(`Welcome, ${userName}!`);
  } else {
    alert("User not found");
  }
}
const logins = ["Peter", "John", "Igor", "Sasha"];
checkLogin(logins);

// Завдання 3:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function calculateAverage() {
  if (arguments.length === 0) {
    return 0; // Повертаємо 0, якщо аргументів не передано
  }

  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];

    if (typeof arg !== "number") {
      return "Помилка: всі аргументи повинні бути числами."; // Повертаємо повідомлення про помилку
    }

    sum += arg;
  }

  return sum / arguments.length;
}
console.log(calculateAverage(1, 2, 3)); // Виведе 2
console.log(calculateAverage(5, 10, 15, 20)); // Виведе 12.5
console.log(calculateAverage()); // Виведе 0
console.log(calculateAverage(1, 2, "a")); // Виведе "Помилка: всі аргументи повинні бути числами."
