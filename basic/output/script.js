"use strict";
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
let a; // explicit type declaration
// a = 5;
a = "sumit";
let b;
b = "monmoy";
b = 10;
// array
let arr = [];
arr.push("35");
let arr2 = []; // union type
arr2.push("Monmoy", 100);
// arr2.push("Monmoy", 100, true);
// object
let obj1;
obj1 = {
    key: 1,
};
let obj;
obj = {
    name: "Monmoy",
    age: 28,
    adult: true,
};
let c;
c = [1, 2, 3, 4, 5];
// dynamic type or any type
let str;
str = "monmoy";
str = 25;
// function
let myFun;
myFun = () => {
    console.log("Hello from myFun");
};
myFun();
const fullName = (a, b, c) => {
    // optional paramaeter
    console.log(`${a} ${b}`);
    let myFullName = [c, a, b];
    return myFullName;
};
fullName("Saifullah", "monmoy");
console.log(fullName("Khaled", "Saifullah", "Hello"));
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};
userDetails("a1", { name: "monmoy", age: 30 });
