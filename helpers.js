import snackbar from "snackbar";
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export default function playGames() {
  const buttons = document.querySelectorAll("button");

  const resultEl = document.getElementById("result");

  const playerScoreEl = document.getElementById("user-score");

  const computerScoreEl = document.getElementById("computer-score");

  let playerScore = 0;
  let computerScore = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const result = playRound(button.id, computerPlay());
      resultEl.textContent = result;
    });
  });

  function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      snackbar.show("It's a tie!")
      // return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      snackbar.show("You won! " + playerSelection + " beats " + computerSelection);
      // return "You won! " + playerSelection + " beats " + computerSelection;
      confetti();
      
    } else {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      snackbar.show("You lost! " + computerSelection + " beats " + playerSelection)
      // return "You lost! " + computerSelection + " beats " + playerSelection;
    }
  }
}
