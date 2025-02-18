//9
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Чи ви досягли повноліття?");
  }
}
let userAge = 17;
let isUserAdult = isAdult(userAge);

if (isUserAdult) {
  console.log("Ви досягли повноліття");
} else {
  console.log("Ви ще не досягли повноліття");
}

function isAdult(age) {
  if (typeof age !== "number") {
    return "Invalid input: age must be a number";
  }

  if (age >= 18) {
    return true;
  } else {
    return confirm("Чи ви досягли повноліття? Вам " + age + " років.");
  }
}

//10
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    console.log(output || i);
  }
}
fizzBuzz(15);
