first.innerHTML = "Kishor Kumar Paroi learning Call backs now"
// let a = prompt("What is your name?")
// let b = prompt("What is your age?")
// let c = prompt("What is your favorite color?")
// console.log(a + " is " + b + " years old and " + c + " favorite color")

// Asynchronous Programming
// console.log("start")
// setTimeout(function() {
//   console.log("Hey I am good")
// }, 3000)
// console.log("end")

// Callbacks
// function loadScript(src){
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = function(){
//     console.log("loaded script with src")
//     hello();
//   }
//   document.body.append(script)
// }

// function hello(){
//   alert("Hello World")
// }

// function goodmorning(){
//   alert("good morning")
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",hello)

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  console.log(script)
  script.onload = function() {
    console.log("Script loaded with SRC : " + src)
    callback(null, src)
  }
  script.onerror = function() {
    console.log("Error Loading with Script SRC : " + src)
    callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log("error");
    return;
  }
  alert("hello KKP !!!" + src)
}
function goodmorning(error, src) {
  if (error) {
    console.log("error");
    return;
  }
  alert("Good Morning : " + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", hello)
loadScript("https://cdn.jsdelivr.netd/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", hello)
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", goodmorning)
loadScript("https://cdn.jsdelivr.net/npasm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", goodmorning)