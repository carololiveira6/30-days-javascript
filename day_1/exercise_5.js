/*
Create datatypes.js file and use the JavaScript typeof operator to check different data types.
Check the data type of each variable.
*/

let stringValue = "Hello World";

let booleanValue = true;

let undefinedValue = undefined;

let nullValue = null;

let dataTypesValue = {
    stringValue,
    booleanValue,
    undefinedValue,
    nullValue
}

console.log(dataTypesValue);
console.log('---------------');
console.log(typeof stringValue);
console.log(typeof booleanValue);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof dataTypesValue);
console.log('---------------');
console.log(typeof dataTypesValue.stringValue);
console.log(typeof dataTypesValue.booleanValue);
console.log(typeof dataTypesValue.undefinedValue);
console.log(typeof dataTypesValue.nullValue);
