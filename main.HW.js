//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds
let arr = [1,2,3,4,5,6,7,8,9,10];
function evenNums(array) {
let even = array.filter(num => num%2 ===0);
	return even;
}

function oddNums(array) {
	let odd = array.filter(num => num%2 ===1);
	return odd;
}

evenNums(arr);
oddNums(arr);


//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6
let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
function sixNums(array) {
let six = array.filter(num => num%6 ===0);
return six;
}

sixNums(arr);


//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

let arr = [10, 12, 20, 20, 50];
let sum = newArray.reduce(add, 0);
console.log('The sum total is: " "', sum);



//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

let numbers = [1,2,3,4,5];
let product = numbers.reduct(multiply, 1) {
console.log('The product total is:', product);
}
console.log(product)


//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

function squareNums(arr) {
let squareNums = [3,2,3];
let result = arr.reduce((acc, value) => {
	return Math.power(acc,value);
}

console.log(squareNums);


//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
   
let fullStackResident = users.filter(function (element) {
  if (element.role === "Full Stack Resident") {
    return ${element.firstName}${element.lastName};
  }
});
console.log(fullStackResident);


//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
[{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]


let age = [
  { name: "Josh", age: 24 },
  { name: "Meghan", age: 34 },
  { name: "Samantha", age: 20 },
];
let newAge = age.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.age;
}, 0);
console.log(newAge);