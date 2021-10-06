//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function retunEven(arr){

const onlyEven = arr.filter(n => n%2 === 0)

console.log(onlyEven)
}
retunEven(num)

function retunOdds(arr){

  const onlyOdds = arr.filter(n => n%2 !== 0)
  
  console.log(onlyOdds)
  }
  retunOdds(num)



//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

function divisibleBySix(arr){
  const divSix = arr.filter(a => a%6 === 0)
 
 console.log(divSix)
}
divisibleBySix([6, 25, 40, 50, 19, 12, 36, 60])




//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

let array = [10,12,20,50]
function returnSum(arr){
let totalArray = arr.reduce((a,b) => a + b)

console.log(totalArray)
}
returnSum(array)



//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

let array2 = [1, 2, 3, 4, 5]
function returnProduct(arr){
let productArray = arr.reduce((a,b) => a * b)

console.log(productArray)
}
returnProduct(array2)
//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

let array3 = [3, 2, 3]
function returnSquare(arr){
let squareArray = arr.reduce((a,b) => a ** b)

console.log(squareArray)
}
returnSquare(array3)

//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
      
  

let fullStackResident = users.filter((stud) => stud.role ==='Full Stack Resident')

console.log(fullStackResident)
  

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let people = [{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]

let sumAge = (array) => array.reduce((acc,crr) => acc + crr.age, 0)

console.log(sumAge(people))
