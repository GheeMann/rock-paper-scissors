"use strict";
//human and computer score count
let humanScore = 0;
let computerScore = 0;

//Needed functions for game
function getComputerChoice(randomChoice) {
    randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) {
        return 'rock';
    } else if (randomChoice == 2){
        return 'paper';
    } else {
        return 'scissor'
    }
}

//Needs Restart for Alert section, might change to for loop instead...
function getHumanChoice(){
    let humanChoice = prompt('Choose rock, paper, or scissor').toLowerCase();
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissor') {
        console.log(humanChoice);
        return humanChoice;
    } else {
        alert('Invalid, only rock, paper, or scissors allowed');
    }
}

let computerChoice = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("It's a tie!");
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock.");
            return computerScore += 1;
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors.");
            return humanScore += 1;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            console.log("It's a tie!");
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beat paper.");
            return computerScore += 1;
        } else if (computerChoice == "rock") {
            console.log("You win! Paper beats rock.");
            return humanScore += 1;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            console.log("It's a tie!");
        } else if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors.");
            return computerScore += 1;
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beat paper.");
            return humanScore += 1;
        }
    }
  }
// Add a break for when Computer OR Human gets score = 3
  function playGame() {
    for (let i = 1; i < 6; i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        

        playRound(humanChoice, computerChoice)

        console.log(`Marker: Computer: ${computerScore}, You: ${humanScore}`)
    }
  }

  playGame();