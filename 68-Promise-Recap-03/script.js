console.time("run")
setTimeout(() => {
  console.log("fetching 1....")
}, 1000)

setTimeout(() => {
  console.log("fetching 2....")
}, 2000)

setTimeout(() => {
  console.log("fetching 3....")
}, 3000)

setTimeout(() => {
  console.log("fetching 4....")
}, 4000)


// console.log(kkp)

try {
  // console.log(kkp)
  let age = prompt("Enter Age > ")
  age = Number.parseInt(age)
  if (age > 150) {
    throw ReferenceError("invalid age")
  }
}
catch (err) {
  console.log(err)
  console.log(err.name)
  console.log(err.stack)
  console.log(err.message)
  console.log("balle valle error vai")
  console.log(Kkp)
}
finally {
  console.log("mujhe chalte jana hei")
}

setTimeout(() => {
  console.log("fetching 5....")
}, 5000)


console.timeEnd("run")