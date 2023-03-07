function computerPlay() {
  const gameMoves = ["rock", "paper", "scissors"];
  const randomizedSelection =
    gameMoves[Math.floor(Math.random() * gameMoves.length)];
  return randomizedSelection;
}

function playerPlay() {
  let playerSelection = prompt("Choose rock, paper, or scissors!");
  return playerSelection.toLowerCase();
}

console.log(playerPlay());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "Rock breaks scissors! You're rocking it!";
    } else {
      return "Bad luck, paper covers rock... your loss!";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "Oh no, scissors cut paper! Your loss.";
    } else {
      ("Paper covers rock! You win!");
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "Rock smashes scissors, sadly a loss.";
    } else {
      return "Scissors cut paper! You win!";
    }
  }
}

const computerSelection = computerPlay();
const playerSelection = "rock";

console.log(playRound(playerSelection, computerSelection));
