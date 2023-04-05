let a = document.getElementsByClassName("container")[0]
console.log(a)
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0];
  b.innerHTML = "hello world!!"
}