const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      reject(new Error("error Happend"))
    }
    document.body.appendChild(script)
  })
}

let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
console.log(a)

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p1 is loading")
    // resolve("value - 1")
    reject(new Error("Error - 1"))
  }, 1000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p2 is loading")
    resolve("value - 2")
  }, 2000)
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p3 is loading")
    resolve("value - 3")
  }, 3000)
})

// console.time("run")
// p1.then((value) => {
//   console.log(value)
// })
// p2.then((value) => {
//   console.log(value)
// })
// p3.then((value) => {
//   console.log(value)
// })
// console.timeEnd("run")

console.time("runn")
let promise_all = Promise.all([p1, p2, p3]);
promise_all.then((value) => {
  console.log(value)
}).catch((error) => {
  console.log(error)
})

let promise_settled = Promise.allSettled([p1, p2, p3])
promise_settled.then((value) => {
  console.log(value)
})

let promise_race = Promise.race([p1, p2, p3])
promise_race.then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err)
})

let promise_any = Promise.any([p1, p2, p3])
promise_any.then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err)
})

let promise_resolve = Promise.resolve(5)
promise_resolve.then((value) => {
  console.log(value)
})

let promise_reject = Promise.reject("errorrrrrsss")
promise_reject.then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err)
})
console.timeEnd("runn")