

// Variables to be used from html

const playerName = document.getElementById('playerName');
const playerScoreDisplay = document.getElementById('player-score');
const computerResult = document.getElementById('computer');
const computerScoreDisplay = document.getElementById('computer-score');
const roundResultDisplay = document.getElementById('result');
const winnerDisplay = document.getElementById('winner');
const playerButton = document.querySelectorAll('.button');
const container = document.getElementById('container');
const startButton = document.getElementById("startButton");
const nameBox = document.getElementById('nameBox');
let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let userName = 'Player';
let restartCheck = 0;


// A round is played when the user clicks on their choice

playerButton.forEach(buttonPress => buttonPress.addEventListener('click', playGame));

function playGame(e) {
    playerChoice = e.target.id;
    playerName.textContent =  userName + ': ' + playerChoice;
    computerPlay();
    winner();
    playerScoreDisplay.textContent = playerScore;
    playerScoreDisplay.style.cssText = 'color: #3a723de3';
    computerScoreDisplay.textContent = computerScore;
    computerScoreDisplay.style.cssText = 'color: #3a723de3';
    if (!restartCheck) {startGame();}
   
}

// Computer picks randomly, rock, paper, or scissors

function computerPlay() {
    play = Math.floor(Math.random() * 3);

    if (play == 0) {
       computerChoice = "rock";
    } else if (play == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    computerResult.textContent = computerChoice;

}
// Write a helper function that will determine which item beats the other

function winner() {
    let player = playerChoice;
    let computer = computerChoice;

    if ((player == "rock") && (computer == "scissors")) {
        result = "You Win!";
        playerScore++;
    } else if ((player == "paper") && (computer == "rock")) {
        result = "You Win!";
        playerScore++;
    } else if ((player == "scissors") && (computer == "paper")) {
        result = "You Win!";
        playerScore++;
    } else if ((player == "rock") && (computer == "paper")) {
        result = "Comp Wins!";
        computerScore++;
    } else if ((player == "scissors") && ("rock")) {
        result = "Comp Wins!";
        computerScore++;
    } else if ((player == "paper") && (computer == "scissors")) {
        result = "Comp Wins!";
        computerScore++;
    } else {
        result = "It's a Tie!";
        
    }

    roundResultDisplay.textContent = `Round Result: ${result}`;

    if (playerScore >= 5) {
        winnerDisplay.textContent =`Winner: ${userName}!`;
        winnerDisplay.style.cssText = 'color: #3a723de3';
        playerButton.forEach(playerChoice => playerChoice.removeEventListener('click', playGame));
        gameOver();
    } else if (computerScore >= 5) {
        winnerDisplay.textContent = "Winner: Computer Wins!";
        winnerDisplay.style.cssText = 'color: #3a723de3';
        playerButton.forEach(playerChoice => playerChoice.removeEventListener('click', playGame));
        gameOver();
    }
}

// Create a start button that prompts the user for the userName and the name is used as a header for the user playing the game.
function startGame() {
    userName = document.getElementById("nameBox").value || 'Player';
    playerName.textContent = userName + ': ';
    nameBox.style.cssText = 'display: none';
    startButton.textContent = 'RESTART';
    if (restartCheck > 0) { playAgain(); }
    restartCheck++;

}



// Create a button that appears when the game is over and refreshes the page

function gameOver() {
    startButton.textContent = 'PLAY AGAIN';
}

function playAgain() {
    window.location.reload();
}








