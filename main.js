//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

array =[1,2,3,4,5,6];

 function isEven(arr){
   let even = arr.filter((i) => !(i % 2))
   return even;

 }
 console.log(isEven(array))
  
 function isOdd(arr){
  let odd = arr.filter((i) => (i % 2))
  return odd;

}
console.log(isOdd)





//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

function returnBySix(arr){
  let sixes = arr.filter((i) => !(i % 6))
  return sixes;
}

console.log(returnBySix(array))


//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

let exArray = [10,12,20,50] 

function returnSum(arr){
  return arr.reduce(function (a, b){
    return a + b;
  }),0;
}
console.log(returnSum)



//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

let multiArray = [1,2,3,4,5]
  function returnProduct(arr){
    return arr.reduce(function (a, b){
      return a * b;
    }),1;
  }



//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

const examArray = [3,2,3]

function squareNum(arr){
  let squared = arr.reduce((a , b) =>
     (a ** b));
  return squared
}
console.log(squareNum(examArray))

//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
             
  let students = users.filter((user) => user.role === 'Full Stack Resident') ;

  console.log(students)


//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let people = [{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]

const sumAge = (array) => array.reduce((a, b) => (a + b.age, 0 ));
console.log(sumAge(people))