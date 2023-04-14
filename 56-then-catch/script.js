// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")

//   setTimeout(() => {
//     // console.log("I am Promise and I am fullfilled")
//     console.log("I am Promise and I am rejected")
//     // resolve(true)
//     reject(new Error("I am an error"))
//   }, 5000)
// })

// console.log(p1)

// let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")

//   setTimeout(() => {
//     console.log("I am Promise and I am fullfilled")
//     // console.log("I am Promise and I am rejected")
//     resolve(true)
//     // reject(new Error("I am an error"))
//   }, 5000)
// })

// console.log(p2)

// p1.then((value)=>{
//   console.log(value)
// })

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending")

  setTimeout(() => {
    // alert("I am a promise and I am fullfilled")
    console.log("I am a Promise and I am fullfilled")
    resolve(55)
    // reject(new Error("I am an Error"))
  }, 2000)
})

console.log(p1)

setTimeout(() => {
  console.log(p1)
}, 5000)

p1.then((value) => {
  console.log(value)
})

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending")

  setTimeout(() => {
    // alert("I am a promise and I am fullfilled")
    console.log("I am a Promise and I am fullfilled")
    // resolve(55)
    reject(new Error("I am an Error"))
  }, 2000)
})

console.log(p2)

setTimeout(() => {
  console.log(p2)
}, 5000)

p2.catch((error)=>{
  console.log("some error occured in p2")
})

p2.then((value) => {
  console.log(value)
})
// },(error)=>{
//   console.log("error happend in p2")
// })