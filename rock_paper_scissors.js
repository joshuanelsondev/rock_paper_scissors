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

// Write a function for playing one round of RPS
function playRound(playerSelection, computerSelection) {

   if (playerSelection == computerSelection) {
       return "This round is a tie";
    } 

    if (winner(playerSelection, computerSelection) == playerSelection) {
        return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`;
    } else {
        return `You Lose, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
    }
}

// Write a helper function that will determine which item beats the other
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



// Create a function 'game()' call 'playRound' five times to create a 5-round game of RPS
const game = () => {
    for (let i = 0; i < 5; i++) {
        
        return round = playerSelection;
    }

    
}

console.log(game());

