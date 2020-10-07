//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds

function odd(arr) {
  return arr.filter((element) => element % 2 == 1);
}
odd([1, 2, 3, 4, 5]);

function even(arr) {
  return arr.filter((element) => element % 2 == 0);
}

odd([1, 2, 3, 4, 5]);

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6
function divisibleBySix(arr) {
  return arr.filter((element) => element % 6 == 0);
}

divisibleBySix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

let sum = [10, 12, 20, 50].reduce(
  (accumulate, current) => accumulate + current
);

console.log(sum);

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120
let multiply = [1, 2, 3, 4, 5].reduce(
  (accumulate, current) => accumulate * current
);

console.log(multiply);

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

function squareNums(arr) {
  return arr.reduce((accumulator, current) => accumulator ** current);
}

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

users.filter((element) => {
  return element.role == "Full Stack Resident";
});

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
[
  { name: "Josh", age: 24 },
  { name: "Meghan", age: 34 },
  { name: "Samantha", age: 20 },
].reduce((accumulate, current) => accumulate + current.age, 0);
//accumulate is where the number adds up and it only works when the initializer
//is set to 0. acumulate.age wouldn't work because it is an object
