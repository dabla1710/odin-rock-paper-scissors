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

// decides on the winner and updates scoreboard
function playRound(playerChoice, computerChoice) {
    let isPlayerWinner = undefined;

    /* check who is the winner */
    switch (playerChoice) {
        case "rock":
            switch(computerChoice) {
                case "paper":
                    isPlayerWinner = false;
                    break;
                case "scissors":
                    isPlayerWinner = true;
                    break;
            }
            break;
        
        case "paper":
            switch(computerChoice) {
                case "rock":
                    isPlayerWinner = true;
                    break;
                case "scissors":
                    isPlayerWinner = false;
                    break;
            }
            break;

        case "scissors":
            switch(computerChoice) {
                case "rock":
                    isPlayerWinner = false;
                    break;
                case "paper":
                    isPlayerWinner = true;
                    break;
            }
            break;
    }

    logRound(playerChoice, computerChoice, isPlayerWinner);

    if (isPlayerWinner != undefined){
        updateScoreboard(isPlayerWinner);
    }    
}

function updateScoreboard(isPlayerWinner) {
    if (isPlayerWinner) {
        const pScore = document.querySelector("#p-score");
        let pScoreNum = Number(pScore.textContent);
        pScoreNum++;
        pScore.textContent = pScoreNum;
    } else if (!isPlayerWinner) {
        const cScore = document.querySelector("#c-score");
        let cScoreNum = Number(cScore.textContent);
        cScoreNum++;
        cScore.textContent = cScoreNum;
    }
}

function logRound(playerChoice, computerChoice, isPlayerWinner) {
    const roundResults = document.querySelector(".round-results");

    const newRoundDiv = document.createElement("div");
    newRoundDiv.classList.add("round");
    roundResults.appendChild(newRoundDiv);

    const playerDiv = document.createElement("div");
    playerDiv.classList.add("round-element");
    playerDiv.textContent = playerChoice;
    newRoundDiv.appendChild(playerDiv);

    const winnerDiv = document.createElement("div");
    winnerDiv.classList.add("round-element");

    if (isPlayerWinner) {
        winnerDiv.textContent = "You won !";
        winnerDiv.style.backgroundImage = "linear-gradient(to left, white 85%, lightgreen 100%)";
    } else if (isPlayerWinner == false) {
        winnerDiv.textContent = "You lost !";
        winnerDiv.style.backgroundImage = "linear-gradient(to right, white 85%, indianred 100%)";
    } else {
        winnerDiv.textContent = "DRAW !";
        winnerDiv.style.backgroundImage = "linear-gradient(to right, goldenrod 0%, white 15%, white 85%, goldenrod 100%)";
    }

    newRoundDiv.appendChild(winnerDiv);

    const computerDiv = document.createElement("div");
    computerDiv.classList.add("round-element");
    computerDiv.textContent = computerChoice;
    newRoundDiv.appendChild(computerDiv);
}

// Play Buttons
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener(
    "click", () => playRound("rock", getComputerChoice())
);

paperBtn.addEventListener(
    "click", () => playRound("paper", getComputerChoice())
);

scissorsBtn.addEventListener(
    "click", () => playRound("scissors", getComputerChoice())
);

// Scoreboard
let playerScore = 0;
let computerScore = 0;

const pScore = document.querySelector("#p-score");
const cScore = document.querySelector("#c-score");
pScore.textContent = playerScore;
cScore.textContent = computerScore;


