import {
  createGameBoard,
  createPlayer,
  createTicTacToeGame,
} from "./tictactoe.js";
import { createModal } from "./modal.js";

const modal = createModal(
  false,
  document,
  () => document.createElement("div"),
  document.querySelector("#winner-modal")
);

const ticTacToeRenderer = (function (baseElement, doc) {
  function createRow() {
    const row = doc.createElement("div");
    row.classList.add("row");

    return row;
  }

  function onCellClick(ticTacToeGame, x, y) {
    ticTacToeGame.takeTurn(x, y);
    const winner = ticTacToeGame.hasPlayerWon();
    if (winner) {
      console.log(`Winner is ${winner.getToken()}`);
      modal.open();
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
})(document.querySelector("#tic-tac-toe"), document);

const ticTacToeGame = createTicTacToeGame(createGameBoard(3), [
  createPlayer("X"),
  createPlayer("O"),
]);

ticTacToeRenderer.renderTicTacToe(ticTacToeGame);
