// Two syntaxes for creating an empty array: 
let arr1= new Array();
let arr2 = []; 


const fruits = []; 
fruits.push("banana", "apple", "peach");
console.log(fruits.length) // 3 

// We cann replace an element; 
fruits[2] = 'Pear';
// or add a new one to the array
fruits[3] = 'Lemon';

// Can use alert to show the array : 
alert(fruits);

// Can use -1 to take last element, the syntax is like 
alert(fruits.at(-1)); 

/*
In other words, arr.at(i):

is exactly the same as arr[i], if i >= 0.
for negative values of i, it steps back from the end of the array. 
*/

/* 
When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, 
the engine will update the array's length property accordingly:
*/
fruits[5] = "mango"; 
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)) // ['0','1','2','5']
console.log(fruits.length) ; 

// Decreasing the lenght property does delete elements

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2

// Array methods and empty slots


/* 
Methods that have special treatment for empty slots include the following: concat(), copyWithin(), every(), filter(), 
flat(), flatMap(), forEach(), indexOf(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), some(), sort(), and splice(). 
Iteration methods such as forEach don't visit empty slots at all. 
Other methods, such as concat, copyWithin, etc., preserve empty slots when doing the copying, so in the end the array is still sparse.
*/

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']



// Array can work both as a queue and as a stack. They allow you to add/remove elements, both to/from the beginning or the end.

alert(fruits.pop()) ; // remove apple and alert it 
alert(fruits); // banana

fruits.push("apple"); 

let basket = ["Apple", "Orange", "Pear"]; 
alert(basket.shift()); // remove Apple and alert it
alert(basket); 
basket.unshift("Apple"); // Add apple to the beginning of the array again 
alert(basket);

let arr = fruits; // copy by reference (two variables reference the same array)
alert( arr === fruits ); // true
arr.push("Pear"); // modify the array by reference
alert( fruits ); // Banana, Pear - 2 items now

// Loops 
// for 
for (let i = 0; i < arr.length; i ++) {
    alert(arr[i]);
}; 
// for..of
for (let element of arr) {
    alert(element);
}
// The simplest way to clear array is: arr.length = 0 ;

// Multidimensional arrays 

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
alert(matrix[0][1]); // 2, the second value of the first inner array