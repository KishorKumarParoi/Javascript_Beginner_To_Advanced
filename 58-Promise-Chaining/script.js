// let p1 = new Promise((resolve, reject) => {

//   console.log("Promise is pending")
//   setTimeout(() => {
//     console.log("resolved after 3 sec")
//     resolve(53)
//     // console.log("throws error")
//     // reject(new Error("this is an error"))
//   }, 2000)
// })


// // setTimeout(()=>{
// // console.log(p1)
// // },3000)

// // p1.then((value)=>{
// //   console.log(value)
// //   // console.log(p1)
// // },(error)=>{
// //   console.log(error)
// // })


// p1.then((value) => {
//   console.log(value)
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(true)
//     }, 5000)
//   })
//   // return p2;
// }).then((value) => {
//   console.log("Promise 2 is done")
//   // console.log(value)
//   // console.log(p2)
//   let pp = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise pp")
//     }, 7000)
//   })
//   return pp;
// }).then((value) => {
//   // console.log(true)
//   console.log("Promise PP is Done")
//   // console.log(pp)
// })

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;

    document.body.appendChild(script)
    script.onload = () => {
      resolve(1)
      console.log("script loaded")
    }
    script.onerror = () => {
      reject(0)
    }
  })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
// let p2 = loadScript("https://csdn.jsdelivr.net/npsm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")

// p1.then((value) => {
//   console.log(value)
// }, (error) => {
//   console.log(error)
// })

p1.then((value) => {
  console.log(value)
  return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
}).then((value) => {
  console.log("Second Script is ready")
}).catch((error) => {
  console.log("We are sorry for error lorem dfksdjgsjdglksglsg")
})