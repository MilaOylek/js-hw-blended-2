// Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };
const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}

// Завдання 8:

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

const sum = Object.values(salaries).reduce((acc, value) => acc + value, 0);

console.log(sum); // Виведе 1730