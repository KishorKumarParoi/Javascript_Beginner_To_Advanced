// Create Navbar and make first element color changed
let f = document.getElementsByTagName("nav")[0];
f.style.color = "red"
f.style.background = "limegreen"
console.log(f);

// create a table without tbody, Now use "view page source" to check whether tbody exists or not
// ans : shows because of auto correction

// create an element with 2 children. Now change the color of first and // last elemnet to green

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "blue"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "blue"
let t = document.getElementsByTagName("nav")[0].childNodes[4];
console.log(Array.from(t))

// write a javascript code to change background of all <li> tags to cyan

Array.from(document.getElementsByTagName("li")).forEach((ele) =>{
  ele.style.background = "salmon";
})

// closest - nearest
// contains - farthest