//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

let arr = [1, 2, 3, 4];

const evenResult = arr.filter(function (element) {
  return (element % 2 == 0)
}) 
console.log(evenResult)

const oddResult = arr.filter(function (element) {
  return (element % 2 !== 0)
}) 
console.log(oddResult)


//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6


let numbers = [24, 7, 6, 800, 66, 11, 99]
const isDivisible = numbers.filter(function(divSix) {
  return (divSix % 6 === 0)
})
console.log(isDivisible)


//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

const array1 = [10,12,20,50];

const sum = array1.reduce(function(accumulator, value) {
  return accumulator + value
},)
console.log(sum)



//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

const multiplyArr = [1, 2, 3, 4, 5];

const multiply = multiplyArr.reduce(function (accumulator, value){
  return accumulator * value
}, 1)
console.log(multiply);




//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

const powerArr = [3, 2, 3];

const power = powerArr.reduce(function (accumulator, value){
  return Math.pow(accumulator, value)
})
console.log(power);




//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
             

let residents = users.filter(function (e) {
  return e.role === 'Full Stack Resident';
});

console.log(residents);




//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
[{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]


const sumAge = (array) =>
  array.reduce((acc, cur) => acc + cur.age, 0);