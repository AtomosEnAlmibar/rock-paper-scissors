//  SET variable userScore
//  SET variable computerScore
//  CALL playGame
let userScore;
let computerScore;
playGame();
//  INIT playGame
//      SET variable userScore as 0
//      SET variable computerScore as 0
//      FOR 5 times
//          CALL playRound
//      ENDFOR
//      IF userScore is bigger than computerScore
//          DISPLAY Congrats! You won!
//      ELSE
//          DISPLAY Oh, no! You lost!
//      ENDIF
function playGame() {
    userScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        playRound();
    }

    if (userScore > computerScore) {
        console.log("Congrats! You won!");
    } else {
        console.log("Oh, no! You lost!");
    }
}
//  INIT playRound
//      SET variable userChoice as empty
//      SET variable computerChoice as empty
//      CALL getUserChoice RETURNING userChoice
//      CALL getComputerChoice RETURNING computerChoice
//      CALL determineWinner with userChoice and computerChoice
function playRound() {
    let userChoice = "";
    let computerChoice = "";

    userChoice = getUserChoice();
    computerChoice = getComputerChoice();

    determineWinner(userChoice, computerChoice);
}
//  INIT getUserChoice
//      DISPLAY Choose rock, paper or scissors
//      SET variable userChoice as empty
//      GET text input from user
//      SET userChoice as the previous input
//      IF userChoice is rock, paper or scissor THEN
//          RETURNING userChoice
//      ELSE
//          DISPLAY This choice doesn't exist in rock, paper, scissors
//          CALL getUserChoice RETURNING userChoice
//      ENDIF
function getUserChoice() {
    console.log("Choose rock, paper or scissors");
    let userInput = prompt().toLowerCase();

    if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
        return userInput;
    }
    
    console.log("This choice doesn't exist in rock, paper, scissors. Try again.")
    getUserChoice();
}
//  INIT getComputerChoice
//      SET variable randomNumber as 0
//      CALCULATE random number between 0 and 2
//      SET randomNumber as the number from above
//      CASE randomNumber OF
//          0: RETURNING rock
//          1: RETURNING paper
//          2: RETURNING scissors
//      ENDCASE
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
//  INIT determineWinner with userChoice and computerChoice
//      IF userChoice and computerChoice are the same THEN
//          DISPLAY It's a tie! Play again!
//          CALL playRound
//      ELSE IF userChoice is rock and computer choice is scissors, or userChoice is paper and computer choice is rock or userChoice is scissors and computer choice is paper
//          DISPLAY User wins!
//          INCREMENT userScore by 1
//      ELSE IF userChoice is rock and computer choice is paper, or userChoice is paper and computer choice is scissors or userChoice is scissors and computer choice is rock
//          DISPLAY Computer wins!
//          INCREMENT comptuerScore by 1
function determineWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        console.log("It's a tie! Play again!");
        playRound();
    } else if (
        userChoice == "rock" && computerChoice == "scissors" ||
        userChoice == "paper" && computerChoice == "rock" ||
        userChoice == "scissors" && computerChoice == "paper"
    ) {
        console.log("User wins!")
        userScore++;
    } else {
        console.log("Computer wins!")
        computerScore++;
    }
}