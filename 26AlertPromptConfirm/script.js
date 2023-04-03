// alert("hello your script works");
alert("Enter the value of a");
let a = prompt("Enter a here : ");
a = Number.parseInt(a);

let write = confirm("Do You Want to Write it to the Page?")
if(write){
  document.write(a);
alert("You entered \"a\" of type -> " + (typeof a));
}
else{
  document.write("Please allow me to write!!!");
}
