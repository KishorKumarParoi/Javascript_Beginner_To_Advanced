// // write a loadscript function with promises

// const loadScript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script")
//     script.src = src
//     script.onload = () => {
//       console.log("Script loaded")
//       resolve(src + " Done Success")
//     }
//     script.onerror = () => {
//       reject(new Error("Error happend"))
//     }

//     document.head.append(script)
//   })
// }

// const main1 = async () => {
//   let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
//   let b = await loadScript("https://scdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")

//   a.then((value) => {
//     console.log(value)
//   }).catch((error) => {
//     console.log(error)
//   })

//   b.then((value) => {
//     console.log(value)
//   }).catch((error) => {
//     console.log(error)
//   })

//   return [a, b]
//   // console.log(a)
//   console.log(new Date())
//   console.log(new Date().getMilliseconds())
// }

// main1()

// Problem
// write a program to load a javascript file in a browser using Promises.Use .then() to display an alert when the load is complete
// write the same program from previous question and use async/await syntax
// create a promise which rejects after 3 seconds use an async/await to get its value.use a try catch to handle its error
// write a program using Promise.all() inside an async/await to await 3 promises.compare its results with the case where we await these promises one by one

const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.src = src
    script.onload = () => {
      console.log("Script Loaded")
      resolve(src)
    }
    script.onerror = () => {
      reject(new Error("error happened"))
    }
    document.head.appendChild(script)
  })
}

// Problem - 1
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
// let b = loadScript("https://cdsn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")

// a.then((value) => {
//   console.log(value)
// }).catch((error) => {
//   console.log(error)
// })

// b.then((value) => {
//   console.log(value)
// }).catch((error) => {
//   console.log(error)
// })


// Problem - 2
// const main1 = async () => {
//   console.log(new Date().getMilliseconds())
//   let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")

//   console.log(a)
//   console.log(new Date().getMilliseconds())

// }

// main1()

// Problem - 3
// let p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Please this is not acceptable"))
//     }, 3000)
//   })
// }

// let a = async () => {
//   try {
//     let c = await p()
//     console.log(c)
//   }
//   catch (err) {
//     console.log("This error has been handled")
//   }
// }

// Problem - 4
let p1 = async () => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(30)
    }, 4000)
  })
}

let p2 = async () => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(40)
    }, 5000)
  })
}
let p3 = async () => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(50)
    }, 6000)
  })
}

const run = async () => {
  console.time("run")
  let a1 =  p1()
  let a2 =  p2()
  let a3 =  p3();
  let all = await Promise.all([a1,a2,a3])
  console.log(all) 
  console.timeEnd("run")
}

run()

// let promise_all = Promise.all()