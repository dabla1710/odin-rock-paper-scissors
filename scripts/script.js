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

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
        console.log(`--> Round ${roundsPlayed+1} start! <--`);

        const computerChoice = getComputerChoice();
    
        let playerChoice = undefined;
        while (playerChoice == undefined) {
            playerChoice = getPlayerChoice();
        }

        let isPlayerWinner = playRound(playerChoice, computerChoice);
        if (isPlayerWinner) {
            console.log(`You won! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
        } else if (isPlayerWinner == false) {
            console.log(`You lost! ${playerChoice} is beaten by ${computerChoice}`);
            computerScore++;
        } else {
            console.log(`Draw! Player: ${playerChoice}, Computer: ${computerChoice}`);
        }
    }

    console.log(`--- Final score ---\nYou: ${playerScore}\nAI: ${computerScore}`);
}

console.log("Welcome To Rock Paper Scissors!");

playGame();

