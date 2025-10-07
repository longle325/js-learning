// Keyed collections 
// Introduce collections of data which are indexed by a key; Map and Set objects contain elements which are iterable in the order of insertion

// Map object 
// A map object is a key/value map that can iterate its elements in insertion order
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; //3 
sayings.get("dog"); // woof 
sayings.get("fox"); // undefined
sayings.has("bird"); // false 
sayings.delete("dog"); 
sayings.has("dog"); // false

for (const [key,value] of sayings) {
    console.log(`${key} goes ${value}`);
}

// "cat goes meow"
// "elephan goes toot"

sayings.clear();
sayings.size // 0

// Weak map object 
// A WeakMap is a collection of key/value pairs whose keys must be objects or non-registered symbols, 
// with values of any arbitrary JavaScript type, and which does not create strong references to its keys.
// The WeakMap API is essentially the same as the Map API. However, a WeakMap doesn't allow observing the liveness of its keys, which is why it doesn't allow enumeration. So there is no method to obtain a list of the keys in a WeakMap. If there were, the list would depend on the state of garbage collection, introducing non-determinism.

const private = new WeakMap()

export default function Public() {
    const me = {
      // Private data goes here
    };
    privates.set(this, me);
  }

  Public.prototype.method = function () {
    const me = privates.get(this);
    // Do stuff with private data in `me`
    // …
  };

// Set objects

const mySet = new Set(); 
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"

Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);


// Array and Set compared 
/*
Traditionally, a set of elements has been stored in arrays in JavaScript in a lot of situations. The Set object, however, has some advantages:

 - Deleting Array elements by value (arr.splice(arr.indexOf(val), 1)) is very slow.
 - Set objects let you delete elements by their value. With an array, you would have to splice based on an element's index.
 - The value NaN cannot be found with indexOf in an array.
 - Set objects store unique values. You don't have to manually keep track of duplicates. 
*/
