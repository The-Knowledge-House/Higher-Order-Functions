//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let even = array.filter((value) => value % 2 == 0 )

console.log(even);



//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

let divisible6 = array.filter((value) => value % 6 == 0)






//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

let num = [10,12,20,50]
let addAll = num.reduce((acc, value) => acc + value, 0)




//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

let numArr = [1, 2, 3, 4, 5]
let multiply = numArr.reduce((acc,curr) => acc * curr)
console.log(multiply);


//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729
let squareNums = [3, 2, 3];
let beSquareReduce = squareNums.reduce((acc, curr) => Math.pow(acc,curr))
console.log(beSquareReduce);



//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
             
let result = users.filter((value) => value.role === 'Full Stack Resident' )

console.log(result);
//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let arrz = [{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]

let result = arrz.reduce((arr, curr) => arr + curr.age, 0)
console.log(result);