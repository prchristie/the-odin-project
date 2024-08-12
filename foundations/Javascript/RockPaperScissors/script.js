import { getRandomOption, playRPS } from "./rps.js";

const winnerElement = document.getElementById("winner-text");
const drawsElement = document.getElementById("draws");
const humanWinsElement = document.getElementById("human-wins");
const computerWinsElement = document.getElementById("computer-wins");
const assholeText = document.getElementById("asshole-text");

var draws = 0;
var playerWins = 0;
var computerWins = 8;

document.getElementById("rock")?.addEventListener("click", () => {
  const winner = playRPS("R", getRandomOption());
  handleWinner(winner);
});
document.getElementById("paper")?.addEventListener("click", () => {
  const winner = playRPS("P", getRandomOption());
  handleWinner(winner);
});
document.getElementById("scissors")?.addEventListener("click", () => {
  const winner = playRPS("S", getRandomOption());
  handleWinner(winner);
});

var timeout;

function handleWinner(winner) {
  switch (winner) {
    case "Player1":
      playerWins++;
      break;
    case "Player2":
      computerWins++;
      break;
    case "Draw":
      draws++;
      break;
  }

  updateScore();

  if (!winnerElement) {
    return;
  }

  winnerElement.style.opacity = "1";
  if (winner === "Draw") {
    winnerElement.textContent = "DRAW!";
  } else {
    winnerElement.textContent = `${
      winner === "Player1" ? "The human" : "The computer"
    } is the winner`;
  }

  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    winnerElement.style.opacity = "0";
    timeout = null;
  }, 2000);
}

const assholeThings = [
  "Kinda embarrassing to be losing to a bot :)",
  "Yeah, you're a loser",
  "Have you tried actually using a strategy?",
  "You must be some kind of idiot",
  "Single digit IQ Neanderthal",
  "Maybe turning on your monitor might help.",
  "Surprised you have the cognitive ability to press a button",
  "Honestly kind of depressing how much you suck",
  "Ape + loser",
  "Doofus",
  "No wonder no one likes you buddy",
  "Keep going lil bro, maybe one day",
  "So many good resources wasted",
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function updateScore() {
  if (
    !drawsElement ||
    !humanWinsElement ||
    !computerWinsElement ||
    !assholeText
  ) {
    return;
  }

  drawsElement.textContent = `${draws}`;
  humanWinsElement.textContent = `${playerWins}`;
  computerWinsElement.textContent = `${computerWins}`;
  if (
    playerWins === 69 ||
    playerWins === 420 ||
    computerWins === 69 ||
    computerWins === 420
  ) {
    assholeText.textContent = "Hehe xdd";
  } else if (playerWins < computerWins) {
    assholeText.textContent = randomFrom(assholeThings);
  } else if (playerWins > computerWins) {
    assholeText.textContent =
      "Hate this game its for idiots anyway. Its my rock paper scissors game so just gonna wipe my memory 👋🖕";
    setTimeout(() => location.reload(), 2000);
  } else if (playerWins === 7 && computerWins === 7) {
    assholeText.textContent =
      "I seriously haven't won a single won. Pls don't do this 🙏";
  } else {
    assholeText.textContent =
      "😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰";
  }
}
