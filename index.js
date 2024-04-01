"use strict";
//player and computer score count
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(randomChoice) {
    randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        return 'Rock';
    } else if (randomChoice === 2){
        return 'Paper';
    } else {
        return 'Scissors'
    }
}
let computerSelection = getComputerChoice();
let playerSelection = prompt('Choose rock, paper, or scissors').toLowerCase();

console.log('computerchoice function ' + getComputerChoice());

function playRound(playerSelection, computerSelection) {
    // put a bunch of if else statements
  }