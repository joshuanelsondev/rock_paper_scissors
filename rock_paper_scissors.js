// Computer picks randomly, rock, paper, or scissors
function computerPlay() {

   play = Math.floor(Math.random() * 3);
  
   if (play == 0) {
       return "rock";
   } else if (play == 1) {
       return "paper";
   } else {
       return "scissors";
   }
   
}

/* A single round of RPS. 
Prompt the user for their selection, be sure to use toLowerCase for case-insensitive response
Call computerPlay to get the computer's selection
Use each selection as parameters
Compare the selections using <If> statements
Return a string that determines the winner of the round
*/


function singleRound(playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
       return "This round is a tie";
    } 

    if (winner(playerSelection, computerSelection) == playerSelection) {
        return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`;
    } else {
        return `You Lose, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
    }
}

function winner(player, computer) {
    let win = "";
    
    if ((player == "rock") && (computer == "scissors")) {
        win = player;
    } else if ((player == "paper") && (computer == "rock")) {
        win = player;
    } else if ((player == "scissors") && (computer == "paper")) {
        win = player;
    } else if ((player == "rock") && (computer == "paper")) {
        win = computer;
    } else if ((player == "scissors") && ("rock")) {
        win = computer;
    } else if ((player == "paper") && (computer == "scissors")) {
        win = computer;
    }
        
    return win;
}

const playerSelection = prompt("Choose 'Rock', 'Paper', or 'Scissors': ").toLowerCase();
const computerSelection = computerPlay();

console.log(singleRound(playerSelection, computerSelection));