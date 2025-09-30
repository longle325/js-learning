// Do this:
// This always returns a boolean value
const isObject = (obj) => !!obj && typeof obj === "object";

// Or this:
const isObject = (obj) => Boolean(obj) && typeof obj === "object";

// Or this:
const isObject = (obj) => obj !== null && typeof obj === "object";

// Instead of this:
// This may return falsy values that are not equal to false
const isObject = (obj) => obj && typeof obj === "object";

// Boolean primitives and Boolean objects

//For converting non-boolean values to boolean, use Boolean as a function or use the double NOT operator. 
// Do not use the Boolean() constructor with new.
const good = Boolean(expression);
const good2 = !!expression;

const bad = new Boolean(expression); // don't use this!