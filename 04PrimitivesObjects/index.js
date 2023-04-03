// Primitive Data Type - nn bb ss u
let a = null;
let b = 365;
let c = true; // can also be false
let d = BigInt("5632434") + BigInt("579");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a,b,c,d,e,f,g);

console.log(typeof d);
console.log(typeof c);
console.log(f);
console.log(typeof f);

// Non Primitive Data Type - objects

const item = {
  "kishor" : true,
  "pallabi" : false,
  "luv" : "eternal",
  "kkp" : undefined
}

console.log(item);
console.log(item["kkp"]);