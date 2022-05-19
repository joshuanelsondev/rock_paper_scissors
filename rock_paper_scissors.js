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
function playRound(player, computer) {

   if (player == computer) {
       return "This round is a tie";
    } 

    if (winner(player, computer) == player) {
        return `You Win! ${player.toUpperCase()} beats ${computer.toUpperCase()}!`;
    } else {
        return `You Lose, ${computer.toUpperCase()} beats ${player.toUpperCase()}.`;
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

// Create a function 'game()' call 'playRound' five times to create a 5-round game of RPS

const game = () => {
    for (let i = 0; i < 5; i++) {
        
      
        console.log(playRound(playerSelection(), computerSelection));
        
    }
};

const playerSelection = () => {

    return prompt("Choose 'Rock', 'Paper', or 'Scissors': ").toLowerCase();
};
const computerSelection = computerPlay();
game();

