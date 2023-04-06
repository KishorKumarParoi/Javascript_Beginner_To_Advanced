let x = function(e) {
  console.log(e.target)
  console.log(e)
  console.log(e.type)
  console.log(e.clientX)
  console.log(e.clienty)
  alert("Hello World1!")
}
let y = function() {
  alert("Hello World2!")
}

btn.addEventListener('click', x)
btn.addEventListener('click', y)

let a = prompt("Enter Number : ");
a = Number.parseInt(a);

console.log(typeof a)

if (a == 2) {
  btn.removeEventListener('click', y);
}