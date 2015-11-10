////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    if (playerMove === 'rock' && computerMove === 'scissors') {
      winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
      winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
      winner = 'player';
    } else if (computerMove === 'rock' && playerMove === 'scissors') {
      winner = 'computer';
    } else if (computerMove === 'paper' && playerMove === 'rock') {
      winner = 'computer';
    } else if (computerMove === 'scissors' && playerMove === 'paper') {
      winner = 'computer';
    } else {
      winner = 'tie';
    }
    return winner;
}

function playToFive(playerWins, computerWins) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins <= 5 && computerWins <= 5){
      if (getWinner() === "player")
        playerWins += 1;
      }
      if (getWinner() === "computer")
        computerWins += 5;{
      }
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    return [playerWins, computerWins];
}
