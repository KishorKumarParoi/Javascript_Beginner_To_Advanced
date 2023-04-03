// Reduce

let arr = [1, 2, 3, 4, 4, 24, 2, 2445];   // reduces an array to a single value
const red = (h1, h2) => {
  return h1 + h2;
}
let val = arr.reduce(red);
console.log(val);

// Map
let a = arr.map((value, index)=>{
  console.log(value, index);
})

// map creates a new array but for each doesn't create new array
console.log("\n");
let b = arr.forEach((i, id)=>{
  console.log(i*i, id);
})
// console.log("\n", b); will show undefined as forEach doesn't create new array

// Filter Method
console.log(arr)
let ar = arr.filter((value)=>{
  return value > 100;
});

console.log(ar, "\n", arr);


