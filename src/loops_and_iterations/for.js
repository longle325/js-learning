// Example

let str = '';
for (let i = 0; i<9; i++) {
    str += i ;
}

console.log(str);

// Syntax 
// for (intialization; condition; afterthought) 
//      statement

// Parenthesize the whole initializer
for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
    console.log(i);
  }
  
  // Parenthesize the `in` expression
  for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
    console.log(i);
  }

// not required to use the intialization block to intialize variables 
let i = 0;
for(; i <9; i++) {
    console.log(i);
    // more statements
}

// The condition part is also optional
for (let i = 0; ; i++) {
    console.log(i);
    if (i > 3) break;
    // more statements
  }
// We can also omit all three expressions
for (;;) {
    if (i > 3) break;
    console.log(i);
    i++;
  }