function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3); // Math.floor does round to smaller value e.g. 2.9 -> 2
    switch(randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Failed to generate computer choice";
    }
}

function getPlayerChoice() {
    const playerChoice = prompt("Enter 'rock', 'paper' or 'scissors':");
    switch(playerChoice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return undefined;
    }
}

/* returns true if player won, false when computer won and undefined if even */
function playRound(playerChoice, computerChoice) {
    const pChoiceClean = playerChoice.toLowerCase();
    const cChoiceClean = computerChoice.toLowerCase();

    let playerIsWinner = undefined;

    /* check who is the winner */
    switch (pChoiceClean) {
        case "rock":
            switch(cChoiceClean) {
                case "paper":
                    playerIsWinner = false;
                    break;
                case "scissors":
                    playerIsWinner = true;
                    break;
            }
            break;
        
        case "paper":
            switch(cChoiceClean) {
                case "rock":
                    playerIsWinner = true;
                    break;
                case "scissors":
                    playerIsWinner = false;
                    break;
            }
            break;

        case "scissors":
            switch(cChoiceClean) {
                case "rock":
                    playerIsWinner = false;
                    break;
                case "paper":
                    playerIsWinner = true;
                    break;
            }
            break;
    }


    return playerIsWinner;
}




let playerScore = 0;
let computerScore = 0;

console.log("Rock Paper Scissors");
const computerChoice = getComputerChoice();
console.log(computerChoice);

let playerChoice = undefined;

while (playerChoice == undefined) {
    playerChoice = getPlayerChoice();
}

console.log(playerChoice);