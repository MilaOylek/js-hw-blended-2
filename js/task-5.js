// const friends = ["Rachel", "Monika", "Phoebe", "Joey", "Chandler", "Ross"];

// for (let i = 0; i < friends.lenght; i++) {
//   // console.log(friends[i]);
//   friends[i] += `-${i}`;
// }
// console.log(friends);

// for (const lalala of friends) {
//   console.log(lalala);
// }
// console.log(friends.includes("Monika"));

// const values = "8 10";
// const arr = values.split(" ");
// const result = (Number(arr[0]) + Number(arr[1])) * 2;

// // const result = arr[0] * arr[1];
// console.log(result);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (const number of numbers) {
//   //   if (number % 2 === 0) {
//   if (!(number % 2)) {
//     total += number;
//   }
// }
// console.log(total);

// const string = "  Welcome    to the future";

// const arr = string.trim().split(" ");
// const result = arr.slice(1, arr.length - 1).join(" ").trim();
// console.log(result);

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function foo() {
//     const args = Array.from(arguments);
//     console.log(args.join(" "));

// }
// foo(1, 2, 3);
// foo(10, 20, 30, 40, 50);
// foo(100, 200, 300, 400);

// const password = 'true';
// const myKey = password;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);

// const value = 27.3;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));
// function greet(name) {
//   return `Welcome ${name}!`;
// }
// // console.log(greet("Mango"));
// console.log(greet);
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();

// const pointer = makePizza;

// // console.log(result);
// console.log(pointer);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates;

// const alphabeticalAuthors = authors;

// console.log(releaseDates.toSorted());

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// const password = 'true';
// const myKey = password;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);

// class MyClass {
//   static b = 5;
//   constructor(value) {
//     this.a = value;
//   }
// }

// const instance = new MyClass(10);
// console.log(instance.b);

const arr = [2, 4, 6];
const result = arr.filter((el) => el * 2);
console.log(result);
