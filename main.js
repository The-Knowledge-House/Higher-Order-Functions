//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let even = num.filter(function (num) {
  if (num % 2 === 0) {
    return num;
  }
});
console.log(even);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let odd = num.filter(function (num) {
  if (num % 2 !== 0) {
    return num;
  }
});
console.log(odd);

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

let divSix = nums.filter(function (nums) {
  if (nums % 6 === 0) {
    return nums;
  }
});
console.log(divSix);

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92
const arr = [10, 12, 20, 50];
const sum = arr.reduce(function (accumulator, value) {
  return accumulator + value;
});
console.log(sum);

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

const array1 = [1, 2, 3, 4, 5];
const product = array1.reduce(function (accumulator, value) {
  return accumulator * value;
});
console.log(product);

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

const array2 = [3, 2, 3];

const powerUp = array2.reduce(function (accumulator, value) {
  return Math.pow(accumulator, value);
});
console.log(powerUp);

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
let nA = [
  { name: "Josh", age: 24 },
  { name: "Meghan", age: 34 },
  { name: "Samantha", age: 20 },
];

let aN = nA.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.age;
}, 0);
console.log(aN);
