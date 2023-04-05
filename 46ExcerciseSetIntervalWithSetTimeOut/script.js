const a = (a, b, c) => {
  alert("SetTimeOut is running " + (a + b + c))
}
setInterval(function() {
  setTimeout(a,1000,10,12,123)
},3000)