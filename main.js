//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

let arr = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10, 11, 12];

function evenNums(arr){

  let onlyEvens = arr.filter(num => num % 2 ===0);
  console.log(onlyEvens);
}

function oddNums(arr){

  let onlyOdds = arr.filter(num => num % 2 !== 0);
  console.log(onlyOdds);
}

evenNums(arr);
oddNums(arr);


//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

function divSix (arr){
  let sixes = arr.filter(num => num % 6 === 0);
  console.log(sixes);
}

divSix(arr);



//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

function reduced(arr){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(arr.reduce(reducer));
}

reduced(arr);



//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

function reduced2(arr){
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  console.log(arr.reduce(reducer));
}

reduced2(arr);


//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

let arrr = [3,2,3];
function reduced3(arr){
  const reducer = (accumulator, currentValue) => Math.pow(accumulator, currentValue);
  console.log(arr.reduce(reducer));
}

reduced3(arrr);


//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
             
  function residents (arr) {
    return arr.filter(function(el){
      return el.role === "Full Stack Resident";
    })
  }
  console.log(residents(users));



//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let people = [{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]

function addAge (arr) {
  // return arr.reduce(function(acc,curVal){
  //   return acc + curVal.age
  // },0)
  return arr.reduce((acc,curVal)=> {return acc + curVal.age}, 0);
}

console.log(addAge(people));