let age = prompt("Enter Age: ");
console.log("You Can", (age >= 18 ? "Drive" : "\'t Drive" ));

let marks = prompt("Enter Marks : ");
marks = Number.parseInt(marks);

switch(marks){
  case 100:
    alert("You got full Marks");
    break;
  case 99:
    alert("You got one mark less than 100");
    break;
  case 98:
  case 97:
  case 96:
  case 95:
    alert("You are passed");
    break;
  default:
    alert("improve yourself");
}