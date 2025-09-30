/*
As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).
In contrast, objects are used to store keyed collections of various data and more complex entities. 
In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.
An object can be created with figure brackets {…} with an optional list of properties. 
A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.

*/

// An empty object (“empty cabinet”) can be created using one of two syntaxes:
// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

// Literals and properties 

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };
  
// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30
user.isAdmin = true; 
// Remove a property 
delete user.age;

// We can also use multiword property names, but then they must be quoted:
let user = {
    name: "John", 
    age: 30,
    "like birds": true // multiword property name must be quoted
};

// For multiword properties, the dot access doesnt work: 
// this would give a syntax error
// user.like birds = true

// ALTERNATIVE : USING SQUARE BRACKETS 
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

let key = "likes birds";
// same as user["likes birds"] = true;
user[key] = true;

/* Here, the variable key may be calculated at run-time or depend on the user input. 
And then we use it to access the property. That gives us a great deal of flexibility.
*/

// In real code, we often use existing variables as values for property names.
// For instance 
function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let user = makeUser("John", 30);
  alert(user.name); // John

// can use both normal properites and shorthands in the same object
let user = {
    name,  // same as name:name
    age: 30
  };

// Use special opration "in" to check properties in object
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

// To walk over all keys of an object, there exists a special form of the loop: for..in. 
// This is a completely different thing from the for(;;) construct that we studied before.
// Example 

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }