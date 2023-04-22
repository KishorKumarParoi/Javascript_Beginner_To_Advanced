let p = new Promise((resolve, reject) => {
  setTimeout(function() {
    alert("Hey I am resolved")
    console.log("Hey, I am resolved")
    resolve(true)
    reject(new Error("Error is Happened"))
  }, 2000)
})


// Promise chaining
// p.then(() => {
//   // alert("Huraaayyy")
//   console.log("Hurray")
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(4)
//     }, 5000)
//   })
// }).then((value) => {
//   console.log(value)
// })

p.then((value)=>{
  console.log("Huraay")
})

p.then((value) => {
  console.log("Congratulations this promise is now resolved")
}).catch((error) => {
  console.log(error)
})

