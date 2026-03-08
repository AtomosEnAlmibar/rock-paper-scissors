const userScoreContainer = document.querySelector(".user-score");
const computerScoreContainer = document.querySelector(".computer-score");
const announcerContainer = document.querySelector(".announcer-container");

let userScore = 0;
let computerScore = 0;

function playRound(userChoice) {
    let computerChoice = "";

    computerChoice = getComputerChoice();

    determineWinner(userChoice, computerChoice);
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        announcerContainer.textContent = "It's a tie! Play again!";
    } else if (
        userChoice == "rock" && computerChoice == "scissors" ||
        userChoice == "paper" && computerChoice == "rock" ||
        userChoice == "scissors" && computerChoice == "paper"
    ) {
        announcerContainer.textContent = "User wins!";
        userScore++;
        userScoreContainer.textContent = userScore;
    } else {
        announcerContainer.textContent = "Computer wins!";
        computerScore++;
        computerScoreContainer.textContent = computerScore;
    }
    checkFinishedGame();
}

function checkFinishedGame() {
    if (userScore >= 5 || computerScore >= 5) {
        if (computerScore >= 5) {
            announcerContainer.textContent = "Oh no! You lost!";
        } else {
            announcerContainer.textContent = "Congrats! You won!";
        }

        userScore = 0;
        computerScore = 0;
        
        userScoreContainer.textContent = userScore;
        computerScoreContainer.textContent = computerScore;
    }
}