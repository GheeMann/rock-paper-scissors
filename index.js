"use strict";
//human and computer score count
let humanScore = 0;
let computerScore = 0;

//Needed functions for game
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
function getHumanChoice(){
    let humanDecision = prompt('Choose rock, paper, or scissors').toLowerCase();
    console.log(humanDecision);
    return humanDecision;
}

let computerSelection = getComputerChoice();
console.log('getComputerChoice() function says:' + getComputerChoice());

function playRound(getHumanChoice, computerSelection) {
    // put a bunch of if else statements
  }