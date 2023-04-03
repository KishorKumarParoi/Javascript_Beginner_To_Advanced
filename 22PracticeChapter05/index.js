// Create an array of numbers and take input from the user to add numbers to this array
let arr = [1, 2, 3, 40, 5, 2, 5, 24];
let a = prompt("Enter Numbers : ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// Keep adding numbers to the first array untill 0 is added to the array
while (a !=  1) {
  a = prompt("Enter Numbers : ");
  a = Number.parseInt(a);
  arr.push(a);
}
console.log(arr)

// filter for numbers divisible by 10 from a given array
let aa = arr.filter((value) => {
  return (value % 10 == 0);
});
console.log(aa);

// Create an array of square of given numbers
let sq = arr.map((i) => {
  return i * i;
});
console.log(sq);

// Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated) 
let fact = arr.reduce((h1,h2)=>{
  return h1*h2;
});
console.log(fact);