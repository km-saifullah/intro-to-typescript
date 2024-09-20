// types of variable in ts -> number, string, boolean
// basic of TS
let num1 = 1;
function calculate(num1, num2) {
  return num1 + num2;
}
console.log(calculate(num1, 3));

// total function
function getTotal(numbers) {
  return numbers.reduce(function (acc, item) {
    return acc + item;
  }, 0);
}
console.log(getTotal([3, 2, 1]));

// object
const user = {
  firstName: "John",
  lastName: "Doe",
  role: "professor",
};
console.log(user.firstName);
