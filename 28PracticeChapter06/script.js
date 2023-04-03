// Write a Program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!

// alert("Enter your age");
// let a = prompt("Enter Age -> ");
// a = Number.parseInt(a);
// document.write("Age : ", a)

// const canDrive = (age) => {
//   return age >= 18;
// }

// let write = confirm("Do You Want to add this to Page?");

// if (canDrive(a)) {
//   alert("You Can Drive");
//   document.write(", Yes You Can,Congratulations");
// }
// else {
//   alert("You Can't Drive");
//   document.write(", Sorry firstly be 18+");
// }

// In Q1 use confirm to ask the user if he wants to see the prompt again

let runAgain = true;
// while(runAgain){
//   let age = prompt("Enter Your Age -> ");
//   age = Number.parseInt(age);

//   if(canDrive(age)){
//     alert("Yes You Can Drive");
//   }
//   else{
//     alert("You Can't Drive");
//   }
//   runAgain = confirm("Do You Want to Run Again ?");
// }

// In the previous question use console.error() to log the error if the age entered is negative
// runAgain = true;
// while(runAgain){
//   let age = prompt("Enter Your Age -> ");
//   age = Number.parseInt(age);

//   if(age < 0){
//     alert("Your age is not valid")
//     console.error("Error");
//   }
//   else if(age == 0){
//     location.href = "https://google.com";
//   }
//   if(canDrive(age)){
//     alert("Yes You Can Drive");
//   }
//   else{
//     alert("You Can't Drive");
//   }
//   runAgain = confirm("Do You Want to Run Again ?");
// }


// Change background Color

let color = prompt("Enter the Background Color : ");
document.body.style.background = color;


// 