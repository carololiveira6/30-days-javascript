// Cut (slice) out the first word of the string using substr() or substring() method

challenge = '30 Days of JavaScript';

console.log(challenge); // 30 Days of JavaScript

console.log(challenge.substr(3)); // Days of JavaScript
console.log(challenge.substr(3, 18)); // Days of JavaScript
console.log(challenge.substr(3, challenge.length)); // Days of JavaScript

console.log(challenge.substring(3)); // Days of JavaScript
console.log(challenge.substring(3, 21)); // Days of JavaScript
console.log(challenge.substring(3, challenge.length)); // Days of JavaScript