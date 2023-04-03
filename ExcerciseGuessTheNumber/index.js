// Write a javascript program to store a variable. The program then takes input from user to tell them whether the guess was correct, greater or lesser than the original number.
// 100 - (no. of guesses) is the score of the user.The program is expected to terminate once the number is guessed. Number should be between 1-100.

let chances = 0;
let inp, rndInt;

do{
rndInt = Math.random() * 100;
rndInt = Number.parseInt(rndInt);
 inp = prompt("Give you guessed Number : ");
  ++chances;
  
  if(rndInt == inp){
    console.log("Congratulations, You Have guessed absolutely right number in only ", chances, " steps....");
  }
  else{
    console.log(chances, "th Step :", "Sorry, Try Again!\n","Your Guessed Number is ", inp, " but Generated Number is " + rndInt);
  }
}while(rndInt != inp && chances < 100);

console.log(rndInt);
console.log("Score is ", 100 - chances, " & Tried for ", chances, "th times\n");
