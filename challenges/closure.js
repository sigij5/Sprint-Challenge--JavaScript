// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/* The nested function can access the internal variable because it is a variable within the parent function.  With closure, the nested function can reach outside of itself to the elements inside it's parent function for the values.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(number) {
    let numArray = []
    for(let i=1; i<= number; i++){
      numArray.push(i)
    }
    let sum = numArray.reduce((a, b) => {
      return a + b
    }, 0);
    return sum;
}

console.log(sumation(4));


// function sumation(number) {
//   let numArray = []
//   for(let i=1; i = number; i++){
//     numArray.push(i);
//   }
//   function counter() {
//     let sum = 0
//     for(let i=0; i <= numArray.length; i++){
//       sum + numArray[i];
//     }
//     return sum;
//   }
//   counter();
// }

// console.log(sumation(4));