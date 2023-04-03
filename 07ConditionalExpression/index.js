let a = prompt("Hey, What's your Age?");
console.log(typeof a);
// a = Number.parseInt(a);
// console.log(typeof a);
// console.log("My age is " + a);
// let b = alert("Hello");

if(a > 0){
  alert("This is valid age");
  if(a < 9)
    alert("You go for video game ");
  else if(a >= 9 && a < 18)
    alert("Go For Cricket");
  else
    alert("Now You can get Driving License");
}
else{
  alert("This is not valid age");
}
