"use strict";

let win = 'You Win!';
let lose = 'You Lose!';
const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
        if (choice = rock) {
            return 'rock';
        } else if (choice = paper){
            return 'paper';
        } else {
            return 'scissors';
        }
}

function playRound (playerSelection, computerSelection) {
    //code here

}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));