//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNum = num.filter(function (num) {
  if (num % 2 === 0) {
    return num;
  }
});
console.log(evenNum);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNums = nums.filter(function (nums) {
  if (nums % 2 != 0) {
    return num;
  }
});
console.log(oddNums);

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let div = number.filter(function (number) {
  if (number % 6 === 0) {
    return number;
  }
});
console.log(div);

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92
const numArr = [10, 12, 20, 50];
const sum = numArr.reduce(function (accumulator, value) {
  return accumulator + value;
});
console.log(sum);

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120
const numsArr = [1, 2, 3, 4, 5];
const Product = numsArr.reduce(function (accumulator, value) {
  return accumulator * value;
});
console.log(Product);

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729
const power = [3, 2, 3];
const squarePower = power.reduce(function (accumulator, value) {
  return Math.pow(accumulator, value);
});
console.log(squarePower);

//Exercise #6
//using the .filter(), filter out the Full Stack residents

let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
// let fullStackUser = []
let fullStackResident = users.filter(function (element) {
  if (element.role === "Full Stack Resident") {
    return `${element.firstName}${element.lastName}`;
  }
});
console.log(fullStackResident);

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let person = [
  { name: "Josh", age: 24 },
  { name: "Meghan", age: 34 },
  { name: "Samantha", age: 20 },
];
let ageSum = person.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.age;
}, 0);
console.log(ageSum);
