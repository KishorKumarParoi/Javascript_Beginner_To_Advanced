// // The solution of callback is promises

// // resolve or rejected

// let promise = new Promise(function(resolve, reject) {
//   // alert("I am an alert in promise")
//   alert("Hello")
//   resolve(56)
// })
// console.log("Hello One")
// setTimeout(function() {
//   console.log("Hello two in 2 sec")
// }, 2000)

// console.log("My Name is " + "Hello Three")
// console.log(promise)

// // fetch google.com homepage => console.log("google.com homepage done")
// // fetch data from the data api
// // fetch pictures from the server
// // Print Downloading
// // Rest of the script

// let promise2 = new Promise(function(resolve, reject) {
//   alert("Kishor Kumar Paroi")
//   resolve(59)
// })

// console.log("Hello 100")
// setTimeout(function(){
//   console.log("Hello in 105 sec")
// }, 5000)

// console.log("My Partner name is " + " Pallabi Karmaker")
// console.log(promise2)

let promise = new Promise(function(resolve, reject){
  // alert("My Name is Kishor Kumar Paroi")
  console.log("Hello World")
  // resolve(56)
  reject(34)
})

console.log("Hello World One")

setTimeout(function(){
  console.log("Hello World Two in 2 sec")
},2000)

console.log("Hello World Three")
console.log(promise)