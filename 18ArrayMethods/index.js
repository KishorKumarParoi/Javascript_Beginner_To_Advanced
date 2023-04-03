// Array Methods
let num = [1, 2, 3, 4];
let b = num.toString();
console.log(b);

let c = num.join("_");
console.log(c, typeof c);

num.pop();
console.log(num);
let r = num.push("Kishor", "Pallbi");
console.log(r, num);

num.shift();
console.log(num);
num.unshift(100);
console.log(num.length, num);