function computerPlay() {
  const gameMoves = ["rock", "paper", "scissors"];
  const randomSelection =
    gameMoves[Math.floor(Math.random() * gameMoves.length)];
  return randomSelection;
}

function playerPlay() {
  let playerInput = prompt("Choose rock, paper, or scissors!").toLowerCase();
  return playerInput;
}

function game() {
  console.clear;
  let playerScore = 0;
  let computerScore = 0;
  let ties = 0;
  const player = playerPlay();
  const computer = computerPlay();

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      ties += 1;
      return console.log(
        `${playerSelection} vs ${computerSelection}, it's a tie!`
      );
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore += 1;
      return console.log(
        "Player wins! Rock breaks scissors! You're rocking it!"
      );
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore += 1;
      return console.log("Player win! Scissors cut paper! Shearing up to win!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore += 1;
      return console.log("Player wins! Paper covers rock!");
    } else {
      computerScore += 1;
      return console.log(
        `Player loss! ${computerSelection} beats ${playerSelection}`
      );
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(player, computer);
  }
}

game();
