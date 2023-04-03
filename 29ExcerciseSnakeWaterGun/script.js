// Use Javascript to create a game of Snake, Water & Gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare Win or loss using Alert. use Prompt and Confirm wherever necessary.

let Name = prompt("Your Name : ");
// alert(Name)

let runAgain = true;
let computer_score = 0, person_score = 0;

while (runAgain) {
  let val = Math.floor(Math.random() * 3);
  let comp = prompt("Enter Your Choice : ");
  let map;

  if (comp == "S" || comp == "s")
    map = 0;
  else if (comp == "W" || comp == "w")
    map = 1;
  else
    map = 2;

  // alert(val + comp + map)
  // alert(map == val)


  if (val == map) {
    alert("Match Drawn, Try Another match");
  }
  else {
    if (val == 0) {
      if (map == 1) {
        alert("Computer Won, " + Name + " Lose this game");
        ++computer_score;
      }
      else {
        alert("Congratulations, " + Name + " won this round");
        ++person_score;
      }
    }
    else if (val == 1) {
      if (map == 2) {
        alert("Computer Won, " + Name + " Lose this game");
        ++computer_score;
      }
      else {
        alert("Congratulations, " + Name + " won this round");
        ++person_score;
      }
    }
    else if (val == 2) {
      if (map == 1) {
        alert("Congratulations, " + Name + " won this round");
        ++person_score;
      }
      else {
        alert("Computer Won, " + Name + " Lose this game");
        ++computer_score;
      }
    }
  }

  runAgain = confirm("Do You Want to Play Again?");
  alert("Computer Score : " + computer_score)
  alert("Person's Score : "+ person_score)
  
  if(!runAgain){
    alert("Computer Won "+ computer_score+ " rounds & "+ Name+ " Won "+ person_score+ " rounds.")
if(computer_score > person_score)
  alert("You Lose, Computer Wins. Better Luck Next Time");
else if(computer_score < person_score)
  alert("Congratulations, You beat up Computer");
else
  alert("Damn !!! It's a Tie")
  }
}


