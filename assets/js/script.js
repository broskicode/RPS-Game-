/**
 * Delcare constants for DOM elements
 * and possible choices
 */


const buttons = document.getElementsByClassName("control")
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
const playerImage = document.getElementById("player-image")
const computerImage = document.getElementById("computer-image")
const messages = document.getElementById("messages")
const choices = ["rock", "paper", "scissors"];

/**
 * Add event listener to all the buttons
 */
for (lets button of buttons) {
    button.addEventListener("click", function ()  {
        let playerChoice = this.getAttribute("data-choice")
        playGame(playerChoice); 
});
}

/**
 * The main game function. Accepts one parameter, which
 * is the data-choice value of the selected button
 */
function playGame(playerChoice) {

    playerImage.src = assets/images/${choices[playerChoice]};
    playerImage.alt = Choices[playerChoice];

    
    let computerChoice = Math.floor(Math.random() * 3)

    computerImage.src = assets/images/${choices[computerChoice]};
    computerImage.alt =choices []

    updateScores(result);
}
    

/**
 * Check to see who the winner is, it accepts two strings as
 */