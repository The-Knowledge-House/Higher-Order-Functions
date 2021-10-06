//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

let arr = [10, 11, 12, 13, 14, 23];
const evenNums = arr.filter(function (newArray) {
  return (newArray % 2 == 0)
})
console.log(evenNums)

const oddNums = arr.filter(function (newArray) {
  return (newArray % 2 !== 0)
})
console.log(oddNums)

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

let arr = [1, 11, 12, 13, 14, 24, 36];
const bySix = arr.filter(function (newArray) {
  return (newArray % 6 == 0)
})
console.log(bySix)



//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

let added = [10, 12, 20, 50, 20];
const sum = added.reduce(function (accumulator, value) {
  return accumulator + value
})
console.log(sum)



//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

let added = [10, 12, 20, 50, 20];
const sum = added.reduce(function (accumulator, value) {
  return accumulator * value
})
console.log(sum)



//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

let added = [3, 2, 3,];
const sum = added.reduce(function (accumulator, value) {
  return Math.pow(accumulator, value)
})
console.log(sum)



//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

const fsr = users.filter(function (newArray) {
  return (newArray.role === 'Full Stack Resident')
})
console.log(fsr)

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let peeps = [{ name: 'Josh', age: 24 }, { name: 'Meghan', age: 34 }, { name: 'Samantha', age: 20 }]

const sumAge = (array) => array.reduce((acc, curr) => acc + curr.age, 0);

console.log(sumAge(peeps))