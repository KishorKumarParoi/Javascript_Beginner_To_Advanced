let x = function () {
  console.log(e.target)
  console.log(e)
  console.log(e.type)
  console.log(e.clientX)
  console.log(e.clienty)
  alert("Hello World!")
}
let y = function () {
  alert("Hello World2!")
}

btn.addEventListener('click', x)
btn.addEventListener('click', y)

let a = prompt("What is your favorite number?")
a = Number.parseInt(a);
console.log(typeof a)

if (a == 2)
  btn.removeEventListener('click', 'x')
