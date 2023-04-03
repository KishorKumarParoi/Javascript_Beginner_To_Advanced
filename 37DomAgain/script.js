console.log("Kihsor")
let ctitle = document.body.getElementsByClassName("card-title")[0]
console.log(ctitle)

ctitle.style.color = "red"
let cid = document.getElementById("card-id")
cid.style.color = "purple"

let pid = document.getElementById("card-p");
pid.style.color = "blue";

let bid = document.body.getElementsByClassName("btn")[0];
bid.style.color = "cyan";

let tt = document.body.getElementsByTagName("a")[0];
console.log(tt)

let ctitles = document.querySelectorAll(".card-title")
console.log(ctitles)

ctitles[0].style.color = "red"
ctitles[1].style.color = "salmon"
ctitles[2].style.color = "blue"

console.log(ctitles)

document.querySelector(".card-title").style.color = "yellow"  // first element & efficient
document.querySelector(".card-title").style.background = "red"

// console.log(id1) // not good practice
let id1 = document.getElementById("id1")
console.log(id1)

console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(id1.matches("#id1"))
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))