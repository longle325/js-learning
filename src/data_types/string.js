// Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;


const string4 = new String("A String object");

// There are two ways to access an individual character in a string. The first is the charAt() method:
"cat".charAt(1); // gives value"a" 

// The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:
 "cat"[1]; // gives value "a"

 // When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed. 
 // COMPARING STRINGS: 
 
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

// String primitives and String objects

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

// You should rarely find yourself using String as a constructor

/* 
String primitives and String objects also give different results when using eval(). 
Primitives passed to eval are treated as source code; String objects are treated as all other objects are, by returning the object. For example:
*/

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
// A String object can always be converted to its primitive counterpart with the valueOf() method.

console.log(eval(s2.valueOf())); // returns the number 4