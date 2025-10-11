// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
// Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

const array = ["a", "b", "c"]
for (const element of array) {
    console.log(element);
}

// Synatax 
// for (variable of iterable)
//      statement

// Iterating over an Array
const iterable = [10, 20, 30];
for (const value of iterable) {
    console.log(value);
}

// Iterating over a string

const iterable2 = "boo"; 
for (const value of iterable2 ) {
    console.log(value); 
}
// Iterating over a Map 
const iterable3 = new Map ([
    ["a", 1], 
    ["b", 2 ],
    ["c,3"]
]);
for (const entry of iterable3) {
    console.log(entry);
}

// ['a', 1]
// ['b', 2]
// ['c', 3]
for (const [key,value] of iterable3) {
    console.log(value);
}

// 1 
// 2
// 3
// Iterating over a set
const iterable4 = new Set([1,1,2,2,3,3]);

for (const value of iterable4) {
    console.log(value); 
}
// 1
// 2
// 3