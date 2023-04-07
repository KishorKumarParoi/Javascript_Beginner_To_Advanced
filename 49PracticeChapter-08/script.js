// write a program to show different alerts whens buttons are clicked
// Done with HTML

// create a website which is capable of storing bookmarks of your favorite websites using href
let a = function(){
  alert("Go into Google")
  window.location = "http://google.com"
}
document.getElementById("google").addEventListener("click", a)

// write e js program to keep fetching of a website in every 5 sec
const fetchContent = async(url) => {
  con = await fetch(url)
  let a = await con.json()
  return a
}

setInterval(async function(){
  let url = "https://jsonplaceholder/typicode.com/todos/1"
  console.log(await fetchContent(url)
},3000)

