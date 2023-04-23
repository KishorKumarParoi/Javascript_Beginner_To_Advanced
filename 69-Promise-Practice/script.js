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
      resolve(true)
    }
    script.onerror = () => {
      console.log("error happened")
      reject(new Error("Error Happend"))
    }
    document.body.appendChild(script)
  })
}

let Kishor = async () => {
  let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")

  console.log(a)
  // a.then((value) => {
  //   console.log(value)
  // }).catch((err) => {
  //   console.log(err)
  // })

  // let b = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.max.js")

  // b.catch((err)=>{
  //   console.log(err)
  // })
  // console.log(b)
  // b.then((value) => {
  //   console.log(value)
  // }).catch((err) => {
  //   console.log(err)
  // })

}

Kishor()

let p = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("The error is happened"))
    }, 2000)
  })
}

const main2 = async () => {
  try {
    let a = await p()
    console.log(a)
  }
  catch (err) {
    console.log("the error is handled")
  }
  finally {
    console.log("the end")
  }
}
main2()

