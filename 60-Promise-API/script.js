let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("resolving p1")
    resolve("value - 1")
  }, 1000)
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("resolving p2")
    // resolve("value - 2")
    reject(new Error("Error in p2"))
  }, 200)
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("resolving p3")
    resolve("value - 3")
  }, 3000)
});

// p1.then((value) =>{
//   console.log(value)
// });

// p2.then((value) =>{
//   console.log(value)
// });

// p3.then((value) =>{
//   console.log(value)
// });

// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then((value) => {
//   console.log(value)
// }).catch((error) => {
//   console.log(error)
// })



// let promise_all_settle = Promise.allSettled([p1, p2, p3])
// promise_all_settle.then((value) => {
//   console.log(value)
// }).catch((error) => {
//   console.log(error)
// })

// let promise_race = Promise.race([p1, p2, p3])
// promise_race.then((value) => {
//   console.log(value)
// }).catch((error) => {
//   console.log(error)
// })

// let promise_any = Promise.any([p1, p2, p3])
// promise_any.then((value) => {
//   console.log(value)
// }).catch((error) => {
//   console.log(error)
// })

// let promise_resolve = Promise.resolve(6)
// promise_resolve.then((value) => {
//   console.log(value)
// }).catch((error) => {
//   console.log(error)
// })

let promise_reject = Promise.reject("error\"happend")
promise_reject.then((value) => {
  console.log(value)
}).catch((error) => {
  console.log(error)
})