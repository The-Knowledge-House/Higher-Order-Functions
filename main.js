//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function filterEven(){
// const evens = arr.filter(x => x % 2 === 0);
//    return x % 2 === 0;
//    console.log(evens);

// }

function filterEven(){
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let evens = arr.filter(x => x % 2 === 0);
  console.log(evens);
}
filterEven();


function filterOdd(){
  let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let odds = arr1.filter(x => x % 3 === 0);
  console.log(odds);
}
filterOdd();




//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6


function filterSix(){


let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
let divBySix = arr1.filter(function(x) {
     return x % 6 === 0;
     })
     console.log(divBySix);
}
filterSix();

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92


const cash = [29.76, 41.85, 46.5];

const sum = cash.reduce((total, amount) => total + amount); 
console.log(sum);


//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

const arr = [2, 4, 6, 8, 10];
const product = arr.reduce((total, amount) => total * amount); console.log(product);


//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729


const arr = [2, 4,];
const product = arr.reduce((total, amount) => total **
 amount); console.log(product); 



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
