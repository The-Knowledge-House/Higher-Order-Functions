//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds

let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let result = array1.filter(function (value) {
  if (value % 2 != 0) {
    return value;
  }
});
console.log(result);

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

let array2 = [6, 2, 3, 4, 5, 6, 12, 18];
let result2 = array2.filter(function (value2) {
  if (value2 % 6 == 0) {
    return value2;
  }
});
console.log(result2);

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92
let array3 = [10, 12, 20, 50];

let result3 = array3.reduce(function (previousValue3, currentvalue3) {
  return previousValue3 + currentvalue3;
});
console.log(result3);
//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120
let array4 = [1, 2, 3, 4, 5];

let result4 = array4.reduce(function (previousValue4, currentvalue4) {
  return previousValue4 * currentvalue4;
});
console.log(result4);

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729
let array5 = [3, 2, 3];

let result5 = array5.reduce(function (previousValue5, currentvalue5) {
  return Math.pow(previousValue5, currentvalue5);
});
console.log(result5);

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
let result6 = users.filter(function (value2) {
  if (value2.role != "Lead Instructor" && value2.role != "Instructor") {
    return value2;
  }
});
console.log(result6);

//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let people = [
  { name: "Josh", age: 24 },
  { name: "Meghan", age: 34 },
  { name: "Samantha", age: 20 },
];

const sumAge = (array) => array.reduce((acc, curr) => acc + curr.age, 0);

console.log(sumAge(people));
