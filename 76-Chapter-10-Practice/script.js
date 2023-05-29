let url = "https://kontests.net/api/v1/all"
let response = fetch(url)

response.then((contests) => {
  return contests.json()
}).then((contests) => {
  console.log(contests)
  
  for(item in contests)
    console.log(contests[item])
})

// h1.innerHTML = "kkp"
// cards.innerHTML = "allcards"

let a = prompt("Enter Your Note : ")
localStorage.setItem("note", a)
let notes = localStorage.getItem("note")

alert("Your Note is " + notes)