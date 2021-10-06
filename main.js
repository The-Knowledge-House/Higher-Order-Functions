//Exercise #1
// Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

const numbers = [1, 2, 3, 4, 5];

const add1 = (num) => {
  return num + 1;
}

const isEven = (num) => {
  return num % 2 === 0;
}
const isOdd = (num) => {
  return num % 2 != 0
}

const result = numbers.map(add1).filter(isEven);
const result2 = numbers.map(add1).filter(isOdd);
// console.log(result2)

function returnEven(arr){
  let evens = arr.filter(x => !(x % 2))
  return evens
}
// console.log(returnEven(numbers))
function returnOdd(arr){
  let odds = arr.filter( x => (x % 2))
  return odds;
}
// console.log(returnOdd(numbers))

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

const arrNum = [2,3,4,5,6,7,8,9,10]

const isDivisibleBy6 = (num) => {
  return num % 6 == 0
}

const result3 = arrNum.filter(isDivisibleBy6)
// console.log(result3)

// 2nd way to do exercise 2
function returnDivBySix(arr){
  let sixMultiples = arr.filter(x => !(x % 6))
  return sixMultiples
}
// console.log(returnDivBySix(arrNum))

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

let myArr2 = [10,12,20,50]
let sum = 0;
for (let n in myArr2){
  sum = n + sum
}

const result4  = myArr2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
// console.log(result4)

// Another way of doing #3
function returnSum(arr) {
  return arr.reduce(function (a,b){
    return a + b;
  })
}
// console.log(returnSum(myArr2))

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

let myArr3 = [1, 2, 3, 4, 5]
let sum2 = 1;
for (let n in myArr3){
  sum2 = n * sum2
}

const result5  = myArr3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
// console.log(result5)

// another way of doing #4
let arrayul = [1,2,3,4,5]
function returnMultiple(arr) {
  return arr.reduce(function (a,b){
    return a * b;
  }, 1)
}
// console.log(returnMultiple(arrayul))


//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

let arrayList2 = [3,2,3]
function squareNums(arr) {
  const squared = arr.reduce(function (a,b){
    return a ** b;
  })
  return squared
}
console.log(squareNums(arrayList2))

//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

// dot notation is regards to objects
let students = users.filter((user) => user.role === 'Full Stack Resident')
console.log(students)

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78

let people = [{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]

const sumAge = (array) => array.reduce((acc, curr) => acc + curr.age, 0);
console.log(sumAge(people))

