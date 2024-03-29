"use strict";
// This whole script is messed, need to simplify and organize it all to index.html
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

let score1 = 0;
let score2 = 0;

let computerSelection = getComputerChoice();
let playerSelection = prompt('Choose rock, paper, or scissors');

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
function getUserChoice() {
    let choice = playerSelection;
        if (choice === 0) {
            return rock;
        } else if (choice === 1){
            return paper;
        } else {
            return scissors;
        }
}

function playRound (playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            score1 += 0 && score2 += ;
            return 'Draw?!'
        } else if (playerSelection === rock & computerSelection === scissors) {
            score1 += 1;
            return rockscissors;
        } else if (playerSelection === scissors & computerSelection === rock) {
            score2 += 1;
            return scissorsrock;
        }  else if (playerSelection === rock & computerSelection === paper) {
            score2 += 1;
            return rockpaper;
        } else if (playerSelection === paper & computerSelection === rock) {
            score1 += 1;
            return paperrock;
        } else if (playerSelection === paper & computerSelection === scissors) {
            score2 += 1;
            return paperscissors;
        } else if (playerSelection === scissors & computerSelection === paper) {
            score1 += 1;
            return scissorspaper;
        }
}

function playGame(score1, score2) {    
    if (score1 < 4 || score2 < 4) {
        console.log(playRound(playerSelection, computerSelection));
        console.log('The current score is ' + score1 + ' to ' + score2);
    } else if (score1 >= 3) {
            console.log(win);  
    } else (score2 >= 3); {
        console.log(lose);
    }
}

console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
