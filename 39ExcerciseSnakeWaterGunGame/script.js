let Name = prompt("Your Name : ")
let user = prompt("Enter Your Choice (S,W,G): ")
let cpuI = Math.floor(Math.random() * 3)
let cpu = ["S", "W", "G"][cpuI]

const match = (cpu, user) => {
  if (cpu == user)
    return "Nobody Won, match Drawn"
  else if (cpu == "S" && user == "W")
    return "cpu"
  else if (cpu == "S" && user == "G")
    return "user"
  else if (cpu == "W" && user == "G")
    return "cpu"
  else if (cpu == "W" && user == "S")
    return "user"
  else if (cpu == "G" && user == "W")
    return "user"
  else if (cpu == "G" && user == "S")
    return "cpu"
}

let result = match(cpu, user)
if (result == "user")
  result = Name
else
  result = "Computer"
// alert(cpu + " "+ user)
document.write(`Computer : ${cpu} and ${Name} : ${user} <br> The Winner is ${result.toUpperCase()}`)

