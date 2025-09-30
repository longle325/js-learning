// The const declaration declares block-scoped local variables. 
// The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

try {
    number = 99;
  } catch (err) {
    console.log(err);
    // Expected output: TypeError: invalid assignment to const 'number'
    // (Note: the exact output may be browser-dependent)
  }
  
  console.log(number);
  // Expected output: 42


/* 
Description
The const declaration is very similar to let:

 - const declarations are scoped to blocks as well as functions.
 - const declarations can only be accessed after the place of declaration is reached (see temporal dead zone). For this reason, const declarations are commonly regarded as non-hoisted.
 - const declarations do not create properties on globalThis when declared at the top level of a script.
 - const declarations cannot be redeclared by any other declaration in the same scope.
 - const begins declarations, not statements. That means you cannot use a lone const declaration as the body of a block (which makes sense, since there's no way to access the variable).
*/

if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
const FOO; // SyntaxError: Missing initializer in const declaration

/* 
The const declaration creates an immutable reference to a value. 
It does not mean the value it holds is immutable — just that the variable identifier cannot be reassigned. 
For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.
You should understand const declarations as "create a variable whose identity remains constant", not "whose value remains constant" — or, "create immutable bindings", not "immutable values".

Many style guides (including MDN's) recommend using const over let whenever a variable is not reassigned in its scope. This makes the intent clear that a variable's type (or value, in the case of a primitive) can never change. Others may prefer let for non-primitives that are mutated.

The list that follows the const keyword is called a binding list and is separated by commas, where the commas are not comma operators and the = signs are not assignment operators. Initializers of later variables can refer to earlier variables in the list.
*/

// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

console.log(`my favorite number is: ${MY_FAV}`);


// Re-assigning to a constant variable throws an error
MY_FAV = 20; // TypeError: Assignment to constant variable

// Redeclaring a constant throws an error
const MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
let MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared

//Block scpoing: It's important to note the nature of block scoping.

const MY_FAV = 7;

if (MY_FAV === 7) {
  // This is fine because it's in a new block scope
  const MY_FAV = 20;
  console.log(MY_FAV); // 20

  // var declarations are not scoped to blocks so this throws an error
  var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
}

console.log(MY_FAV); // 7

// const in objects and arrays 
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" }; // ERROR 

// However, object keys are not protected, so the following statement is executed without problem.
MY_OBJECT.key = "otherValue";

// The same applies to arrays. Assigning a new array to the variable throws an error "Assignment to constant variable".

const MY_ARRAY = [];
MY_ARRAY = ["B"];

// Still, it's possible to push items into the array and thus mutate it.
MY_ARRAY.push("A"); // ["A"]