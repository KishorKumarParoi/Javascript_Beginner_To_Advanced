// callbacks
function hello(){
  console.log("Hello World")
}

setTimeout(hello, 2000)
setInterval(hello,1000)

function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  // script.onload = setTimeout(setInterval(function() {
  //   console.log("added script in 5 sec")
  // }, 2000), 5000)

  // script.append("Hello KKP")
  // script.
  document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
loadScript("https://google.com.js")

let a = document.getElementsByClassName('container')[0]
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0];
  b.innerHTML = "Hello KKP you have to learn faster"
}

setInterval(a.onclick = () => {
  let b = document.getElementsByClassName("container")[0];
  b.innerHTML = "Hello KKP you have to learn faster"
  console.log("Learn faster")
}, 2000)

// Event Listener
let x = function(e) {
  console.log(e)
  console.log(e.target)
  console.log(e.type, e.clientX, e.clientY)
  alert("hellow world meawww")
  console.log("Hello World one")
}
let y = function(e) {
  alert("Helllo World two")
  console.log("Hello World twoo")
}

btn.addEventListener('click', x)
btn.addEventListener('click', y)

let aa = prompt("Enter your favorite number : ")
if (aa == "2") {
  btn.removeEventListener('click', x)
}
else {
  btn.removeEventListener('click', y)
}

// Promise

let promise = new Promise(function(resolve, reject){
  console.log("Hello Broooo")
  // resolve(56)
  reject(new Error("Error Happend"))
})

console.log("Kishor Kumar Paroi")
setTimeout(function(){
  console.log("Hello World in 2 Sec")
}, 2000)

setInterval(function(){
  console.log("hello in every 2 sec")
},2000)

console.log(promise)

let p = new Promise((resolve,reject)=>{
  console.log("Promise is Pending")
  setTimeout(()=>{
    // alert("I am Promise and I am fullfilled")
    alert("I am Promise and I am rejected")
    // resolve(true)
    reject(new Error("I am an SUperrrrr error"))
    // console.log("Promise fullfilled")
    console.log(p)
  },5000)
})

console.log(p)


let p1 = new Promise((resolve,reject)=>{
  console.log("Promise is Pending")
  setTimeout(()=>{
    alert("I am Promise and I am fullfilled")
    // alert("I am Promise and I am rejected")
    resolve(true)
    // reject(new Error("I am an error"))
    console.log("Promise fullfilled")
    console.log(p1)
  },5000)
})

console.log(p1)

p1.then((value)=>{
  console.log(value)
},(error)=>{
  console.log(error)
})

p.catch((error)=>{
  console.log(error)
  console.log("error occured in p")
  
})

p.then((value)=>{
  console.log(value)
},(error)=>{
  console.log(error)
  console.log("error happend in p")
})