// The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

// Syntax : 
/* 
var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2, ..., nameN = valueN;
*/

function foo() {
    var x = 1;
    function bar() {
      var y = 2;
      console.log(x); // 1 (function `bar` closes over `x`)
      console.log(y); // 2 (`y` is in scope)
    }
    bar();
    console.log(x); // 1 (`x` is in scope)
   // console.log(y); // ReferenceError, `y` is scoped to `bar`
  }
  foo();

/* 
The scope of a variable declared with var is one of the following curly-brace-enclosed syntaxes that most closely contains the var statement:

Function body
Static initialization block
Or if none of the above applies:

The current module, for code running in module mode
The global scope, for code running in script mode. 
*/

for (var a of [1.2,3]);
console.log(a);

// Hoisting


function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
doSomething()

// Redeclarations 
// Duplicate variable declarations using var will not trigger an error, even in strict mode, and the variable will not lose its value, unless the declaration has an initializer.

var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined

/* 
var declarations can also be in the same scope as a function declaration. 
In this case, the var declaration's initializer always overrides the function's value, regardless of their relative position. 
This is because function declarations are hoisted before any initializer gets evaluated, so the initializer comes later and overrides the value.
*/
var a = 1;
function a() {}
console.log(a); // 1

// var declarations cannot be in the same scope as a let, const, class, or import declaration.

var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared

// Because var declarations are not scoped to blocks, this also applies to the following case:

let a = 1; 
{
  var a = 1  // SyntaxError: Identifier 'a' has already been declared
}

// It does not apply to the following case, where let is in a child scope of var, not the same scope:
var a = 1;
{
  let a = 2;
}
// A var declaration within a function's body can have the same name as a parameter.

function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1