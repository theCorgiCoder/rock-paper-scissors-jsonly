// Global variables
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let rounds = 0;

// Randomizes computer selection
function computerPlay() {
  const gameMoves = ["rock", "paper", "scissors"];
  const randomSelection =
    gameMoves[Math.floor(Math.random() * gameMoves.length)];
  return randomSelection;
}

// Prompt window input for player
function playerPlay() {
  let playerInput = prompt(
    "Let's play a game! Please choose rock, paper, or scissors!"
  ).toLowerCase();
  return playerInput;
}

// Simple round and score display
function numberOfRounds() {
  return console.log(
    `Round: ${rounds},
    Player Score: ${playerScore},
    Computer Score: ${computerScore},
    Ties: ${ties},`
  );
}

function playRound(playerSelection, computerSelection) {
  rounds += 1;
  if (playerSelection === computerSelection) {
    ties += 1;
    console.log(`${playerSelection} vs ${computerSelection}, it's a tie!`);
    return numberOfRounds();
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    console.log("Player wins! Rock breaks scissors! You're rocking it!");
    return numberOfRounds();
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    console.log("Player wins! Scissors cut paper!");
    return numberOfRounds();
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    console.log("Player wins! Paper covers rock!");
    return numberOfRounds();
  } else {
    computerScore += 1;
    console.log(
      `Computer wins! ${computerSelection} beats ${playerSelection}!`
    );
    return numberOfRounds();
  }
}

function game() {
  // Allows only 5 rounds to be played.
  for (let i = 0; i < 5; i++) {
    const player = playerPlay();
    const computer = computerPlay();
    playRound(player, computer);
  }

  function playAgainCall() {
    let playAgainInput = prompt("Do you want to play again?").toLowerCase();
    return playAgainInput;
  }

  function resetGame(playAgainInput) {
    if (playAgainInput === "yes") {
      ties = 0;
      playerScore = 0;
      computerScore = 0;
      rounds = 0;
      console.clear();
      return game();
    } else {
      return console.log("Thank you for playing!");
    }
  }

  //Displays winner of game
  if (ties + computerScore + playerScore === 5) {
    if (ties === 5) {
      console.log(
        `You tied with the computer ${playerScore} vs. ${computerScore}. So close!`
      );
    } else if (playerScore > computerScore && ties) {
      console.log(
        `Congratulations! YOU WON!!! with ${playerScore} out of 5 rounds!`
      );
    } else {
      console.log(
        `You lose! Computer wins with ${computerScore} out of 5 rounds. Better luck next time!`
      );
    }

    if (rounds === 5) {
      playAgain = playAgainCall();
      return resetGame(playAgain);
    }
  }
}

game();
