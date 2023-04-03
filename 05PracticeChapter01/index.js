// Create a variable of type string and add a number to it
// Chapter 1 - Q1

let a = "kkp";
let b = 13;
console.log(a + b);

// Find Data type of variable
// Chapter 1 - Q2

console.log(a * b)
console.log(typeof (a + b))

// Create a const object in javascript, Can you change it to hold a number later
// Chapter 1 - Q3

const aa = {
  name: "Kishor",
  Roll: 1703053,
  section: "A",
  isRedCoder: false
}

// aa = "Pallabi"; // can't change
console.log(aa);

// Try to add a new key to const object in problem 3 
// Chapter 1 - Q4

aa["isGraduate"] = "Dropout";
console.log(aa);

// Write a JS program to create a word-meaning dictionary of 5 words
// Chapter 1 - Q5

const dict = {
  appreciate: "praise",
  run: "dourano",
  fool: "kishor",
  flower: 'pallabi',
  yakka: "Hard Work"
}

console.log(dict);
console.log(dict.yakka);
console.log(dict["yakka"]);