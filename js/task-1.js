// 1
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// const userInput = prompt("Введіть число:");
// const number = Number(userInput);
// if (number === 10) {
//   alert('Вірно');
// } else {
//   alert('Невірно');
// }

//2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
// const min = Math.floor(Math.random() * (59 - 0) + 0);

const min = Math.floor(Math.random() * (59 - 0) + 0);
const quarter = Math.ceil(min / 15);
switch (quarter) {
  case 1:
    alert(`${min} входить в першу чверть`);
    break;
  case 2:
    alert(`${min} входить в другу чверть`);
    break;
  case 3:
    alert(`${min} входить в третю чверть`);
    break;
  case 4:
    alert(`${min} входить в четверту чверть`);
    break;
  default:
    alert('Сталася помилка');
}

//3
// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const userInput = prompt("Введіть число від 1 до 4:");
// const num = Number(userInput);
// let result;
// switch (num) {
//   case 1:
//     result = 'зима';
//     break;
//   case 2:
//     result = 'весна';
//     break;
//   case 3:
//     result = 'літо';
//     break;
//   case 4:
//     result = 'осінь';
//     break;
//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }
// console.log(result);

//4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// const totalMinutes = Number(prompt("Введіть кількість хвилин:"));
// const hours = Math.floor(totalMinutes / 60);
// const minutesRemaining = totalMinutes % 60;
// const formattedTime = `${hours.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}`;
// console.log(formattedTime);