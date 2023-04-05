let x = document.getElementsByTagName('span')[0]
let y = document.getElementsByTagName('span')[0]

console.log(x)
console.dir(y)
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)
// first.innerHTML = "Kishor Kumar Paroi"
// first.innerHTML = "<i>Kishor Kumar <b>Paroi</b></i>" // VALID FOR NODE ELEMENT ONLY
// first.outerHTML = "<div><p>Kishor</p><span>Kumar</span><h1><b>Paroi</b></h1></div>"
document.body.textContent
console.log(document.body.firstChild.nodeValue)
console.log(document.body.firstElementChild.nodeValue)
console.log(document.body.firstElementChild.data)
console.log(document.body.firstChild.data)
first.hidden = false