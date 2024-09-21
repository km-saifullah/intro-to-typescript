// let playerName;
// let age = 35;

// console.log(playerName);

// age = 3;

// playerName = "Mashrafee";
// playerName = 35;

// console.log(playerName);

// console.log(age);

// function multiply(a: number, b: number) {
//   return a * b;
// }

// console.log(multiply("3", 2));

// Array
// let fruits = ["apple", "banana", "orange"];
// fruits.push(34);

// let mixed = ["apple", 34, true,{}];
// mixed.push(34);
// mixed.push({
//   name: "pineapple",
// });

// object
// let person = {
//   name: "Mashrafee",
//   age: 35,
//   isCaptain: true,
// };

// person.name = "Sakib";
// person.country = "Bangladesh";

// normal variable
let a: string; // explicit type declaration
// a = 5;
a = "sumit";

let b: string | number;

b = "monmoy";
b = 10;

// array
let arr: string[] = [];

arr.push("35");

let arr2: (string | number)[] = []; // union type
arr2.push("Monmoy", 100);
// arr2.push("Monmoy", 100, true);

// object
let obj1: object;
obj1 = {
  key: 1,
};

let obj: {
  name: string;
  age: number;
  adult: boolean;
};

obj = {
  name: "Monmoy",
  age: 28,
  adult: true,
};

let c: object;

c = [1, 2, 3, 4, 5];
