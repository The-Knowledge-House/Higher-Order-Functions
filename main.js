//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

function evennums(arr) {
  let evens = arr.filter(x => !(x % 2))
  return evens;
}
console.log(returnEven(numbers))

function returnOdd(arr) {
  let odds = arr.filter(x => (x % 2))
  return odds;
}
console.log(returnOdd(numbers))

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

let newNumbers = [0, 5, 6, 7, 11, 12, 12, 13, 600]

function returnDivBySix(arr) {
  let sixMultiples = arr.filter(x => !(x % 6))
  return sixMultiples;
}

console.log(returnDivBySix(newNumbers))


//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

let exampleArray = [3, 15, 22, 85, 37, 79, 109, 234]

function returnSum(arr) {
  return arr.reduce(function (accumulator, currentValue) {
    return a + b;

  }, 0)
}

console.log(returnSum(exampleArray));

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

function returnMulti(arr) {
  return arr.reduce(function (accumulator, currentValue) {
    return a * b;
  }, 1)
}

console.log(returnMulti(exampleArray))

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

function squareNums(arr) {
  const squared = arr.reduce((accumulator, currentValue) => {
    return accumulator ** currentValue
  })
  return squared
}

console.log(squareNums([3, 2, 3]))


//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];


let students = users.filter((user) => user.role === 'Full Stack Resident')

console.log(students)



//Bonus
//Using Reduce
//add up all the ages in the array of objects
//the ages in the array of objects below should equate to 78
let people = [{ name: 'Josh', age: 24 }, { name: 'Meghan', age: 34 }, { name: 'Samantha', age: 20 }]

const sumAge = (array) => array.reduce((acc, curr) => acc + curr.age, 0);

console.log(sumAge(people))

