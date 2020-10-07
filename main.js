//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

const returnOdd = (arr) => {
  let odd = arr.filter(num => {
    return num % 2 === 0;
})
  return odd;
}
console.log(returnOdd([1, 2, 3, 4, 5, 6, 7]));

const returnEven = (arr) => {
  let even = arr.filter(num => {
    return num % 2 === 1;
})
  return even;
}

console.log(returnEven([1, 2, 3, 4, 5, 6, 7]));



//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

const onlySix = (arr) => {
  const a = arr.filter(num => {
    return num % 6 === 0;
  })
  return a;
}

console.log(onlySix([1, 6, 23, 36, 42, 8]));



//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

const sum = (arr) => {
  let total = arr.reduce((accumalator, currentValue) => {
   return accumalator + currentValue;
  })
  return total;
}

console.log(sum([10,12,20,50]));



//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

function product (arr) {
  let answer = arr.reduce((acc, val) => {
    return acc * val;
  })
  return answer;
}

console.log(product([1, 2, 3, 4, 5]));


//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

function squareNums (arr) {
  let total = arr.reduce((acc, val) => {
    return Math.pow(acc, val);
  })
  return total;
}

console.log(squareNums([3, 2, 3]));


//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
             
  
  
  function fullStack (arr) {
    let role = arr.filter(user => {
      return user.role === "Full Stack Resident";
    })
    return role;
  }
  
  console.log(fullStack(users));

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let ayman = [{ name: 'Josh', age: 24 }, { name: 'Meghan', age: 34 }, { name: 'Samantha', age: 20 }]
const sumOfAge = (arr) => {
  let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
  }, 0)
  return sum;
}

console.log(sumOfAge(ayman));

