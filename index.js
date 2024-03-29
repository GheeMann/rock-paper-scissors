"use strict";
//player and computer score count
let playerScore = 0;
let computerScore = 0;
// score converter section
let randomChoice = Math.floor(Math.random() * 3) + 1;
// let playerSelection = prompt('Choose rock, paper, or scissors'). toLowerCase();
let computerSelection = getComputerChoice();

function getComputerChoice(randomChoice) {
    if (randomChoice = 1) {
        return 'Rock';
    } else if (randomChoice = 2){
        return 'Paper';
    } else {
        return 'Scissors'
    }
}
console.log(randomChoice);
console.log(getComputerChoice());

// generator works but not getComputerChoice