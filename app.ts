// types of variable in ts -> number, string, boolean, arr[]

// basic of TS
// let num1 = 1;

// function calculate(num1: number, num2: number) {
//   return num1 + num2;
// }
// console.log(calculate(num1, 3));

// normal: numbers: number[]
// generic:  numbers: Array<number>
// function getTotal(numbers: Array<number>) {
//   return numbers.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
// }

// console.log(getTotal([3, 2, 1]));

// object
// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   role: "professor",
// };
// console.log(user)

// type alias | custom type
// type User = {
//   name: string;
//   age: number;
//   address?: string;
// };

// let user1: User = {
//   name: "Khaled Saifullah",
//   age: 30,
// };

// // function return type
// // by default function return type is void
// function login(userData: User): User {
//   return userData;
// }

// console.log(login({ name: "monmoy", age: 27 }));

// // type ID = number;
// type ID = number | string;

// // const userId: ID = 132;
// const userId: ID = "123";

// interfaces
// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
// }

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   ballance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const transaction1: Transaction = {
//   payerAccountNumber: 123,
//   payeeAccountNumber: 456,
// };
// const transaction2: Transaction = {
//   payerAccountNumber: 123,
//   payeeAccountNumber: 567,
// };

// const bankAccount: BankAccount = {
//   accountNumber: 123,
//   accountHolder: "Jane Doe",
//   ballance: 4000,
//   isActive: true,
//   transactions: [transaction1, transaction2],
// };

// extended interfaces
// const book