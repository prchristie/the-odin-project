import {
  createGameBoard,
  createPlayer,
  createTicTacToeGame,
} from "./tictactoe.js";
import { createModal } from "./modal.js";

const ticTacToeGame = createTicTacToeGame(createGameBoard(3), [
  createPlayer("X"),
  createPlayer("O"),
]);

const ticTacToeRenderer = (function (baseElement, doc, ticTacToeGame) {
  const winnerModal = createModal(
    false,
    document,
    () => {
      const winner = ticTacToeGame.getWinner();
      const baseElement = doc.createElement("div");
      baseElement.classList.add("winner-modal-content");
      const winnerDisplay = doc.createElement("div");
      winnerDisplay.classList.add("winner-display");
      winnerDisplay.textContent = `Winner is`;
      const winnerTokenDisplay = doc.createElement("em");
      winnerTokenDisplay.classList.add("winner-token-text");
      winnerTokenDisplay.innerText = winner.getToken();

      winnerDisplay.appendChild(winnerTokenDisplay);

      baseElement.appendChild(winnerDisplay);

      return baseElement;
    },
    document.querySelector("#winner-modal")
  );

  function createRow() {
    const row = doc.createElement("div");
    row.classList.add("row");

    return row;
  }

  function onCellClick(ticTacToeGame, x, y) {
    ticTacToeGame.takeTurn(x, y);
    const winner = ticTacToeGame.getWinner();
    if (winner) {
      console.log(`Winner is ${winner.getToken()}`);
      winnerModal.open();
    }
    renderTicTacToe(ticTacToeGame);
  }

  function createCell(value, ticTacToeGame, x, y) {
    const cell = doc.createElement("div");
    cell.classList.add("cell");
    cell.textContent = value;
    cell.addEventListener("click", () => {
      onCellClick(ticTacToeGame, x, y);
    });

    return cell;
  }

  function renderTicTacToe(ticTacToeGame) {
    baseElement.textContent = "";
    var board = ticTacToeGame.getGameBoard().getBoard();

    for (var [y, row] of board.entries()) {
      const rowElement = createRow();

      for (var [x, cell] of row.entries()) {
        const cellElement = createCell(
          cell === "E" ? "" : cell,
          ticTacToeGame,
          x,
          y
        );
        rowElement.appendChild(cellElement);
      }

      baseElement.appendChild(rowElement);
    }
  }

  return { renderTicTacToe };
})(document.querySelector("#tic-tac-toe"), document, ticTacToeGame);

ticTacToeRenderer.renderTicTacToe(ticTacToeGame);
