
// While the function declaration above is syntactically a statement, functions can also be created by a function expression.
const square = function (number) {
    return number * number;
  };
  
  console.log(square(4)); // 16

const factorial = function fac(n) {
    return n < 2 ? 1: n * fac(n-1);
};
console.log(factorial(3)); 

/* Function expressions are convenient when passing a function as an argument to another function. 
The following example defines a map function that should receive a function as first argument and an array as second argument. 
Then, it is called with a function defined by a function expression: */

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cubedNumbers = map(function (x) {
    return x * x * x;
  }, numbers);
  console.log(cubedNumbers); // [0, 1, 8, 125, 1000]

// a function can be defined based on a condition 
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
