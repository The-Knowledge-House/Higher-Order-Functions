//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds

let arr = [1, 2, 3, 4];
const evenResult = arr.filter(function (newArr) {
  return newArr % 2 == 0;
});
console.log(evenResult);

const oddResult = arr.filter(function (newArr) {
  return newArr % 2 !== 0;
});
console.log(oddResult);

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

let numArr = [12, 24, 36, 40, 50, 66, 71, 80, 90];
const numDivSix = numArr.filter(function (newSixArr) {
  return newSixArr % 6 == 0;
});
console.log(numDivSix);

// Or

//function getDivisibleBySix (arr) {
//return arr.filter((el) => el%6===0)
//}
//console.log(getDivisibleBySix([11,12,18,22,24,29,32,36]));

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

let reduceAddArr = [10, 12, 20, 50];

const sumArr = reduceAddArr.reduce(function (accumulator, value) {
  return accumulator + value;
}, 0);
console.log(sumArr);

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

let reduceMultiplyArr = [1, 2, 3, 4, 5];

const multiplyArr = reduceMultiplyArr.reduce(function (accumulator, value) {
  return accumulator * value;
}, 1);
console.log(multiplyArr);

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

let reducePowerArr = [3, 2, 3];

const powerArr = reducePowerArr.reduce(function (accumulator, value) {
  return Math.pow(accumulator, value);
});
console.log(powerArr);

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
let residents = users.filter(function (e) {
  return e.role === "Full Stack Resident";
});
console.log(residents);

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78

const example = [
  { name: "Josh", age: 24 },
  { name: "Meghan", age: 34 },
  { name: "Samantha", age: 20 },
];

const sumAge = (array) => array.reduce((acc, cur) => acc + cur.age, 0);
