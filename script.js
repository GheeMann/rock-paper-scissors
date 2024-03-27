"use strict";

let win = 'You Win! ';
let lose = 'You Lose! ';
const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let rockpaper = lose + paper + ' beats ' + rock;
let paperrock = win + paper + ' beats ' + rock;
let rockscissors = win + rock + ' beats ' + scissors;
let scissorsrock = lose + rock + ' beats ' + scissors;
let scissorspaper = win + scissors + ' beats ' + paper;
let paperscissors = lose + scissors + ' beats ' + paper;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
        if (choice === 0) {
            return rock;
        } else if (choice === 1){
            return paper;
        } else {
            return scissors;
        }
}

function playRound (playerSelection, computerSelection) {
    // let playerSelection=prompt('Choose rock, paper, or scissors');
    if (playerSelection === computerSelection) {
        return 'Draw?!'
    } else if (playerSelection === rock & computerSelection === scissors) {
        return rockscissors;
    } else if (playerSelection === scissors & computerSelection === rock) {
        return scissorsrock;
    }  else if (playerSelection === rock & computerSelection === paper) {
        return rockpaper;
    } else if (playerSelection === paper & computerSelection === rock) {
        return paperrock;
    } else if (playerSelection === paper & computerSelection === scissors) {
        return paperscissors;
    } else if (playerSelection === scissors & computerSelection === paper) {
        return scissorspaper;
    }
}

let playerSelection = rock;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playGame() {
    // use previous function inside & play 5 round w scores kept and reports winner at the end
}