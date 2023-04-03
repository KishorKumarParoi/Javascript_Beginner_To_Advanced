let num = [2, 3, 4, 34, 24, 242, 3];
for (let i = 0; i < num.length; ++i) {
  console.log(num[i]);
}
console.log("\n");

// for...of
for (let i of num)
  console.log(i);
console.log("\n");

// for...each
num.forEach((i) => {
  console.log(i * i);
}
)
console.log("\n");

// for....in
for (let i in num)
  console.log(num[i]);
console.log("\n");

// Array.from   
let name = "Kishor";
let arr = Array.from(name);
console.log(arr);