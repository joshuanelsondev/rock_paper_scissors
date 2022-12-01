

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
let userName;



// A round is played when the user clicks on their choice

playerButton.forEach(playerChoice => playerChoice.addEventListener('click', playGame));

function playGame(e) {
    playerChoice = e.target.id;
    playerName.textContent =  userName + ': ' + playerChoice;
    computerPlay();
    winner();
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    nameBox.style.cssText = 'display: none';
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
        result = "Computer Wins!";
        computerScore++;
    } else if ((player == "scissors") && ("rock")) {
        result = "Computer Wins!";
        computerScore++;
    } else if ((player == "paper") && (computer == "scissors")) {
        result = "Computer Wins!";
        computerScore++;
    } else {
        result = "It's a Tie!";
        
    }

    roundResultDisplay.textContent = `Round Result: ${result}`;

    if (playerScore >= 5) {
        winnerDisplay.textContent =`Winner: ${userName}!`;
        playerButton.forEach(playerChoice => playerChoice.removeEventListener('click', playGame));
        gameOver();
    } else if (computerScore >= 5) {
        winnerDisplay.textContent = "Winner: Computer Wins!";
        playerButton.forEach(playerChoice => playerChoice.removeEventListener('click', playGame));
        gameOver();
    }
}

// Create a start button that prompts the user for theuserName and the name is used as a header for the user playing the game.
function startGame() {
    userName = document.getElementById("nameBox").value;
    playerName.textContent = userName + ': ';

}



// Create a button that appears when the game is over and refreshes the page

function gameOver() {
    const restart = document.querySelector('.restart');
    const restartButton = document.createElement('button');
    restartButton.classList.add('restart-button');
    restartButton.innerText = "PLAY AGAIN";
    restartButton.style.cssText = 'border-radius: 10px;';
    restart.append(restartButton);
    restartButton.addEventListener('click', playAgain);

}

function playAgain() {
    window.location.reload();
}








