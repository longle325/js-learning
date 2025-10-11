// For..in statement iterates over all enumerable string properties of an object, including inherited enumerable properties
const obj = {a: 1, b:2, c:3};
for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`)
}