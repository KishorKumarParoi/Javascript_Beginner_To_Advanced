// Print marks of an object
let marks = {
  kishor: "Gadha",
  Kumar: "Goru",
  Paroi: "Fool",
  Luv: "improve",
  Kishor: 99,
  Kumar: 100,
  Pallabi: 33
}
console.log(marks);

// for (let i in marks) {
//  console.log(i);

// }
// for (let i of "Kishor")
//   console.log(i);

console.log(Object.keys(marks).length);

// both kishor and Kishor remains as javascript are case-sensitive
// but Kumar value gets updated form "Goru" to 100

for(let i = 0; i < Object.keys(marks).length; ++i){
  // console.log(i);
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
console.log("\n");

// Print Marks using For In Loop
for(let key in marks){
  console.log("The Marks of " + key + " are " + marks[key]);
}

// Write a Program to print "Try Again" untill users enter
// wrong number

let x;
while(x != 108){
  x = prompt("Enter Number -");
  if(x != 108)
  console.log("Try Again");
}
console.log("You Have Entered correct Number\n");

// Mean of 5 numbers
const mean = (a, b, c, d, e)=>{
  return (a + b + c + d + e) / 5;
}
console.log(mean(12,23,234,23,242));
