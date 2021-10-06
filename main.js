//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds
console.log('Exercise 1');
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
function filterEven() {
	let evenNumbers = arr.filter((num) => num % 2 === 0);
	console.log(`In array ${arr} the even numbers are ${evenNumbers}`);
}
filterEven();
function filterOdd() {
	let oddNumbers = arr.filter((num) => num % 2 === 1);
	console.log(`In array ${arr} the even numbers are ${oddNumbers}`);
}
filterOdd();

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6
console.log('\nExercise 2');
function divideBy6(arr) {
	let divisibleBy6 = arr.filter((num) => {
		return num % 6 === 0;
	});
	console.log(`The integers divisible by 6 in array ${arr} are ${divisibleBy6}`);
}
divideBy6([ 1, 6, 12, 54, 21, 76 ]);

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92
console.log('\nExercise 3');
let sumOfArr = arr.reduce(function(x, y) {
	return x + y;
});
console.log(`The sum of all integers in the array = ${sumOfArr}`);

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120
console.log('\nExercise 4');
let productOfArr = arr.reduce(function(x, y) {
	return x * y;
});
console.log(`The product of all integers in the array = ${productOfArr}`);

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729
console.log('\nExercise 5');
let arr2 = [ 3, 2, 3 ];
let exponentialOfArr = arr2.reduce(function(x, y) {
	return Math.pow(x, y);
});
console.log(exponentialOfArr);

//Exercise #6
//using the .filter(), filter out the Full Stack residents
console.log('\nExercise 6');
let users = [
	{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
	{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
	{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
	{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
	{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
	{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
	{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];
let fullStackRes = users.filter((name) => {
	return name.role === 'Full Stack Resident';
});
console.log(fullStackRes);

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
console.log('\nBonus');
let people = [ { name: 'Josh', age: 24 }, { name: 'Meghan', age: 34 }, { name: 'Samantha', age: 20 } ];

const sumAge = (array) => array.reduce((acc, curr) => acc + curr.age, 0);

console.log(sumAge(people));
