// let a = first.getAttribute("class")
// console.log(a)
let first = document.getElementById("first");
console.log(first)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
// console.log(first.hasAttribute("id"))
// first.setAttribute("hidden", "true")
first.setAttribute("class", "true sachin")
first.removeAttribute("class")
first.setAttribute("class", "fuchka") 
console.log(first.attributes)
console.log(first.dataset)
console.log(first.dataset.player)
console.log(first.dataset.game)
console.log(first.dataset.engine)