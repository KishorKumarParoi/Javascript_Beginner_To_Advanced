console.log(document.cookie)
document.cookie = "name=kishor"
document.cookie = "surname=paroi"
document.cookie = "roll$-100"
document.cookie = "name=KKP"

let key = prompt("Enter Key : ")
let val = prompt("Enter Value : ")

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
console.log(document.cookie)
