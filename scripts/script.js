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
    console.log("playerChoice:", playerChoice, "|", "computerChoice", computerChoice);

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
    } else {
        console.log("Draw!");
    }
    
}

function updateScoreboard(isPlayerWinner) {
    console.log("isPlayerWinner:", isPlayerWinner);
    if (isPlayerWinner) {
        const pScore = document.querySelector("#p-score");

        let pScoreNum = Number(pScore.textContent);
        console.log("pScore before:", pScoreNum);
        pScoreNum++;
        console.log("pScore after:", pScoreNum);
        pScore.textContent = pScoreNum;
    } else if (!isPlayerWinner) {
        const cScore = document.querySelector("#c-score");
        let cScoreNum = Number(cScore.textContent);
        cScoreNum++;
        cScore.textContent = cScoreNum;
    } else {
        alert("Draw!");
    }
}

function logRound(playerChoice, computerChoice, isPlayerWinner) {
    const roundResults = document.querySelector(".round-results");

    const newRoundDiv = document.createElement("div");
    newRoundDiv.classList.add("round");
    roundResults.appendChild(newRoundDiv);

    const playerDiv = document.createElement("div");
    playerDiv.textContent = playerChoice;
    playerDiv.style.backgroundColor = "green";
    newRoundDiv.appendChild(playerDiv);

    const winnerDiv = document.createElement("div");
    if (isPlayerWinner) {
        winnerDiv.textContent = "You won !";
    } else if (isPlayerWinner == false) {
        winnerDiv.textContent = "You lost !";
    } else {
        winnerDiv.textContent = "DRAW !";
    }
    winnerDiv.style.textAlign = "start";
    newRoundDiv.appendChild(winnerDiv);

    const computerDiv = document.createElement("div");
    computerDiv.textContent = computerChoice;
    computerDiv.style.backgroundColor = "red";
    newRoundDiv.appendChild(computerDiv);
}

console.log("Welcome To Rock Paper Scissors!");

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


