// Grab Computer's random selection
function computerPlay() {
    let selection = ["Rock", "Paper", "Scissor"];
    let randomSelection = Math.floor(Math.random() * selection.length);
    return selection[randomSelection];
}

// Scores
let playerScore = 0;
let computerScore = 0;

// Play a round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {

    // rock
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        roundSelectionPlayer.textContent = 'You chose ' + playerSelection + '.';
        roundSelectionCPU.textContent = 'Computer chose ' + computerSelection + '.';
        roundResults.textContent = 'Tie! Great minds think alike.';
        console.log("Tie! Great minds think alike.");
        return showScore();
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore += 1;
        scoreboardCPU.textContent = computerScore;
        roundSelectionPlayer.textContent = 'You chose ' + playerSelection + '.';
        roundSelectionCPU.textContent = 'Computer chose ' + computerSelection + '.';
        roundResults.textContent = 'You Lose! Paper beats Rock.';
        console.log("You Lose! Paper beats Rock.")
        return showScore();
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        playerScore += 1;
        scoreboardPlayer.textContent = playerScore;
        roundSelectionPlayer.textContent = 'You chose ' + playerSelection + '.';
        roundSelectionCPU.textContent = 'Computer chose ' + computerSelection + '.';
        roundResults.textContent = 'You Win! Rock beats Scissor.';
        console.log("You Win! Rock beats Scissor.");
        return showScore();
    }

    // paper
    if (playerSelection === "Paper" && computerSelection === "Paper") {
        roundSelectionPlayer.textContent = 'You chose ' + playerSelection + '.';
        roundSelectionCPU.textContent = 'Computer chose ' + computerSelection + '.';
        roundResults.textContent = 'Tie! Great minds think alike.';
        console.log("Tie! Great minds think alike.");
        return showScore();
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        scoreboardPlayer.textContent = playerScore;
        roundSelectionPlayer.textContent = 'You chose ' + playerSelection + '.';
        roundSelectionCPU.textContent = 'Computer chose ' + computerSelection + '.';
        roundResults.textContent = 'You Win! Paper beats Rock.'
        console.log("You Win! Paper beats Rock.");
        return showScore();
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        computerScore += 1;
        scoreboardCPU.textContent = computerScore;
        roundSelectionPlayer.textContent = 'You chose ' + playerSelection + '.';
        roundSelectionCPU.textContent = 'Computer chose ' + computerSelection + '.';
        roundResults.textContent = 'You Lose! Scissor beats Paper.';
        console.log("You Lose! Scissor beats Paper.");
        return showScore();
    }

    // scissor
    if (playerSelection === "Scissor" && computerSelection === "Scissor") {
        roundSelectionPlayer.textContent = 'You chose ' + playerSelection + '.';
        roundSelectionCPU.textContent = 'Computer chose ' + computerSelection + '.';
        console.log("Tie! Great minds think alike.");
        roundResults.textContent = 'Tie! Great minds think alike.';
        return showScore();
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        playerScore += 1;
        scoreboardPlayer.textContent = playerScore;
        roundSelectionPlayer.textContent = 'You chose ' + playerSelection + '.';
        roundSelectionCPU.textContent = 'Computer chose ' + computerSelection + '.';
        roundResults.textContent = 'You Win! Scissor beats Paper.'
        console.log("You Win! Scissor beats Paper.");
        return showScore();
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        computerScore += 1;
        scoreboardCPU.textContent = computerScore;
        roundSelectionPlayer.textContent = 'You chose ' + playerSelection + '.';
        roundSelectionCPU.textContent = 'Computer chose ' + computerSelection + '.';
        roundResults.textContent = 'You Lose! Rock beats Scissor.'
        console.log("You Lose! Rock beats Scissor.");
        return showScore();
    }
}

// Play the game
function game() {

    // Three buttons for each selections
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorBtn = document.getElementById('scissor');
    const buttons = document.querySelectorAll('.buttons')
    const resetGameBtn = document.getElementById('resetGame');

    // for (let round = 1; round < 6; round++) {
    //     console.log("ROUND " + round);

    resetGameBtn.style.visibility = "hidden";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // console.log(button);
            playerSelection = capitalizeFirstLetter(button.id);

            let computerSelection = computerPlay();

            playRound(playerSelection, computerSelection);

            endGame();
        });
    });

    // // Trigger events if User clicked Rock
    // rockBtn.addEventListener('click', () => {
    //     console.log("You selected Rock");
    //     playerSelection = capitalizeFirstLetter(rockBtn.id);   //  player's selection is id

    //     let computerSelection = computerPlay();
    //     console.log("computer chose " + computerSelection);

    //     playRound(playerSelection, computerSelection);
        
    //     endGame();
    // })

    // // Trigger events if User clicked Paper
    // paperBtn.addEventListener('click', () => {
    //     console.log("You selected Paper");
    //     playerSelection = capitalizeFirstLetter(paperBtn.id);

    //     let computerSelection = computerPlay();
    //     console.log("computer chose " + computerSelection);

    //     playRound(playerSelection, computerSelection);

    //     endGame();
    // })

    // // Trigger events if User clicked Scissor
    // scissorBtn.addEventListener('click', () => {
    //     console.log("You selected Scissor");
    //     playerSelection = capitalizeFirstLetter(scissorBtn.id);

    //     let computerSelection = computerPlay();
    //     console.log("computer chose " + computerSelection);

    //     playRound(playerSelection, computerSelection);

    //     endGame();
    // })

}

//Show current score
function showScore() {
    console.log("Player's Score: " + playerScore);
    console.log("Computer's Score: " + computerScore);
}


function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
}

const mainContent = document.querySelector('#main-content');
const scores = document.querySelector('#scores');
const roundSelections = document.querySelector('#round-selections');
const results = document.querySelector('#results');
const resetGame = document.querySelector('#reset-game')


//  Player Scoreboard
const scoreboardPlayer = document.createElement('div');
scoreboardPlayer.setAttribute("id", "scoreboardPlayer");
scoreboardPlayer.textContent = playerScore;

scores.appendChild(scoreboardPlayer);

//  Computer Scoreboard
const scoreboardCPU = document.createElement('div');
scoreboardCPU.setAttribute("id", "scoreboardCPU");
scoreboardCPU.textContent = computerScore;

scores.appendChild(scoreboardCPU);

//  Player Round Selection
const roundSelectionPlayer = document.createElement('div');
roundSelectionPlayer.setAttribute('id', 'roundSelectionPlayer');

roundSelections.appendChild(roundSelectionPlayer);

//  Computer Round Selection
const roundSelectionCPU = document.createElement('div');
roundSelectionCPU.setAttribute('id', 'roundSelectionCPU');

roundSelections.appendChild(roundSelectionCPU);

//  Round Results
const roundResults = document.createElement('div');
roundResults.setAttribute('id', 'roundResults');

results.appendChild(roundResults);

//  Reset Game
const resetGameBtn = document.createElement('button');
resetGameBtn.setAttribute('id', 'resetGame');

resetGame.appendChild(resetGameBtn);



// Displays the running score, and announce a winner of the game once a player reaches 5 points; reset the game 
function endGame() {

    const buttons = document.querySelectorAll('.buttons')
    const resetGameBtn = document.getElementById('resetGame');
    resetGameBtn.textContent = "Reset Game";

    if (playerScore > computerScore && playerScore === 5) {
        console.log("You are victorious!");
        resetGameBtn.style.visibility = "visible";

        resetGameBtn.addEventListener('click', () => {
            location.reload(false);
        });

        buttons.forEach((button) => {
            button.disabled = true;
        });
    } else if (computerScore > playerScore && computerScore === 5) {
        console.log("You have been defeated!");
        resetGameBtn.style.visibility = "visible";

        resetGameBtn.addEventListener('click', () => {
            location.reload(false);
        });

        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}


game();





