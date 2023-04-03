// delete isn't a method, it's a operator
let num = [1, 22, 3, 4, 34, 3, 25, 23, 2];
delete num[0];
console.log(num,num.length);   // never updated array length -> delete operation
num.shift();

// concat 
let num1 = [23,34,2,424,42,24,24];
let newArr = num.concat(num1);
let arr = newArr.concat(num1, num);
console.log(newArr);
console.log(arr);

// sort
arr.sort();
console.log(arr);  // modifies original array
// sorted alphabeticallly not increasing order

num.sort();
console.log(num);

// sort -> increasing order
let compare = (a, b)=>{
  return  a - b;
}
num.sort(compare);
console.log(num);

// reverse
num.reverse();
console.log(num);

// Splice
// (start idx, count of deleting number, adding numbers.....)
let deleted_values = num.splice(2, 3, 1021, 1022, 1023, 1024);
console.log(num);
console.log(deleted_values);

// Slice
let newNum = num.slice(3);
console.log(newNum);   // doesn't modifies array, create a new array to see elements
console.log(num);

let Num = num.slice(3, 6);
console.log(Num);