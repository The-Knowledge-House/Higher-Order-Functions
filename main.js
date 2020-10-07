//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

function getEvenNums (arr) {
  return arr.filter(function(el){
    if(el % 2 === 0) {
      return el
    }
  })
}

// console.log(getEvenNums([1,2,3,4,5,6,7,8]))

// const getOddNums = (arr) => { 
//   return arr.filter((el) => {
//     if(el%2===1){
//       return el
//     }
//   })
// }

const getOddNums = (arr) => { 
  return arr.filter((el) => (el%2===1))
}

// console.log(getOddNums([1,2,3,4,5,6,7,8]))

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

function getDivisibleBySix (arr) {
  return arr.filter((el) => el%6===0)
}

// console.log(getDivisibleBySix([11,12,18,22,24,29,32,36]));

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

function addNums (arr) {
  return arr.reduce(function(acc, curVal){
    return acc + curVal;
  })
}

// console.log(addNums([1,2,3]));

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

function multiplyNums(arr){
  return arr.reduce(function(acc,curVal){
    return acc * curVal;
  })
}

// console.log(multiplyNums([1,2,3,4,5]));

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

function powerNums (arr) {
  return arr.reduce(function(acc,curVal){
    return Math.pow(acc,curVal)
  })
}

// console.log(powerNums([3,2,3]));

//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
             

  function getFSResidents (arr) {
    return arr.filter(function(el){
      // if (el.role === "Full Stack Resident"){return el;}
      return el.role === "Full Stack Resident";
    })
  }

  // console.log(getFSResidents(users));

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let people =[{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]

function addAge (arr) {
  // return arr.reduce(function(acc,curVal){
  //   return acc + curVal.age
  // },0)
  return arr.reduce((acc,curVal)=> {return acc + curVal.age}, 0);
}

console.log(addAge(people))