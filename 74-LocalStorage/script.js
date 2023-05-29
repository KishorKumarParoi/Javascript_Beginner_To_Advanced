let key = prompt("Enter Key You Want to set ")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

if(key == "red" || key == "blue")
  localStorage.removeItem(key)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if(key == 0)
  localStorage.clear()