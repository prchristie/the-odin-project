export const options = ["R", "P", "S"];

export const Outcome = {
  Player1: "Player1",
  Player2: "Player2",
  Draw: "Draw",
};

function findWinner(p1, p2) {
  if (p1 === p2) {
    return Outcome.Draw;
  }

  if (
    (p1 === "R" && p2 === "S") ||
    (p1 === "P" && p2 === "R") ||
    (p1 === "S" && p2 === "P")
  ) {
    return Outcome.Player1;
  }

  return Outcome.Player2;
}

export function playRPS(selection1, selection2) {
  return findWinner(selection1, selection2);
}

export function getRandomOption() {
  return options[Math.floor(Math.random() * options.length)];
}
