/*
BigInt is a built-in JavaScript object that allows you to work with integers of arbitrary size.
Unlike the Number type, which can accurately represent integers only within the range of ±2^53 , 
BigInt can handle integers far beyond this limit. This makes it particularly useful for applications requiring high precision with very large numbers, such as cryptography or scientific computations.
*/


const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// 9007199254740991n

/* 
BigInt values are similar to Number values in some ways, but also differ in a few key matters: 
A BigInt value cannot be used with methods in the built-in Math object and cannot be mixed with a Number value in operations; 
they must be coerced to the same type. Be careful coercing values back and forth, however, as the precision of a BigInt value may be lost when it is coerced to a Number value.
*/