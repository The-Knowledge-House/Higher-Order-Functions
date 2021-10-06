//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds

function evenNums(array) {
  let evenArr = array.filter((num) => num % 2 === 0);
  return evenArr;
}

console.log(evenNums([1,2,3,4,5,6]));

function oddNums(array) {
  let oddArr = array.filter((num) => num % 2 !== 0);
  return oddArr;
}

console.log(oddNums([1,2,3,4,5,6]));


//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

function divisibleBySix(array) {
  let newArr = array.filter((num) => num % 6 === 0);
  return newArr;
}

console.log(divisibleBySix([1,2,3,6,12,23,24]));



//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

function sum(array){
  let newArray = array.reduce((prevNum, curNum) => prevNum + curNum);
  return newArray;
}
console.log(sum([10,12,20,50]));

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

function product(array){
  let newArray = array.reduce((prevNum, curNum) => prevNum * curNum);
  return newArray;
}
console.log(product([1,2,3,4,5]));


//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

function squareNums(array){
  let newArray = array.reduce((prevNum, curNum) => Math.pow(prevNum, curNum));
  return newArray;
}
console.log(squareNums([3,2,3]));


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

console.log(users.filter((user) => user.role === "Full Stack Resident" ));

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let ages = [
  { name: "Josh", age: 24 },
  { name: "Meghan", age: 34 },
  { name: "Samantha", age: 20 },
];


console.log(ages.reduce((prevNum, curNum) => ({age: prevNum.age + curNum.age})));