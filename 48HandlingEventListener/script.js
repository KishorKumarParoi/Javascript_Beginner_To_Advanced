let x = function() {
  alert("Hello World!")
}
let y = function() {
  alert("Hello World2!")
}

btn.addEventListener('click', x)
btn.addEventListener('click', y)

let a = prompt("What is your favorite number?")
a = Number.parseInt(a);
console.log(typeof a)

if (a == 2)
  btn.removeEventListener('click', 'x')
