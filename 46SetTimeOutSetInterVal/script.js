// alert("Hello")
// document.write("Hello")
// let a = setTimeout(function() {
//   alert("I am inside of timeOut")
// }, 2000)

const sum = (a, b, c) => {
  console.log("Yes, I am running " + (a + b + c))
  a + b
}

setTimeout(sum, 2000, 1, 2, 10)
setInterval(function(){
  alert('SetInterval')
}, 3)
// let b = confirm("Do you want to run the setTimeOut?")
// if (b == false) {
//   clearTimeout(a)
// }
// console.log(a)
