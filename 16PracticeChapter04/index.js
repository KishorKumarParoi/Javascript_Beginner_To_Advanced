// What will print following code?
//  console.log("kishor\"rees".length);

console.log("kishor\"rees".length);
//Ans : 11

// Explore .includes
const string = "Kishor Kumar";
let word = "Kumar";
console.log(string.includes(word));

// converts to upperercase
console.log(string.toUpperCase());

// Extract the amount out from the string
// Fox is bought at price 1000$

let str = "Fox is bought at price 1000$";
let amount = str.slice("Fox is bought at price ".length);
amount = Number.parseInt(amount);
console.log(amount);
console.log(typeof amount);

// try to change fourth character of a string
let ss = "Pallabi";
ss[3] = "S" // NOT CHANGE because strings are immutable
console.log(ss);
console.log(ss.replace(ss[4], "Kishor"));