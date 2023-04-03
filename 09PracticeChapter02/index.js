console.log("Let's Practice");

// Use logical operator to find whether age is between 10 and 20
let age = prompt("Enter Age = ");
age = Number.parseInt(age);

if(age >= 10 && age <= 20)
  alert("Age lies between 10 and 20");
else
  alert("Not Lies");

// Demonstrate the use of switch case
switch(age){
  case 20:
    alert("age is 20");
    break;
  case 19:
  case 18:
    alert("age is 18 and 18+");
    break;
  default:
    alert("age is less than 18 or greater than 20");
}

// find whether a number is divisible by 2 and 3
let a = prompt("Enter Number: ");
a = Number.parseInt(a);
if(a % 6 == 0)
  alert("Divisible");
else
  alert("Not Divisible");

// 