const EMPTY_CELL = "E";
export function createGameBoard(dimensions) {
  const board = [];

  function initBoard() {
    for (var x = 0; x < dimensions; x++) {
      board.push([]);
      for (var y = 0; y < dimensions; y++) {
        board[x].push(EMPTY_CELL);
      }
    }
  }
  initBoard();

  /**
   * @param {any} token
   * @param {string | number} x
   * @param {string | number} y
   */
  function placeToken(token, x, y) {
    if (board[y][x] !== EMPTY_CELL) {
      return false;
    }

    board[y][x] = token;
    return true;
  }

  /**
   * @param {string | number} x
   * @param {string | number} y
   */
  function getPosition(x, y) {
    return board[x][y];
  }

  function getBoard() {
    return board;
  }

  return { placeToken, getPosition, getBoard, dimensions };
}

export function createPlayer(token) {
  function getToken() {
    return token;
  }

  return { getToken };
}

export function createTicTacToeGame(gameBoard, players) {
  if (players.length < 1) {
    throw new Error("Can't have no players");
  }

  let currentPlayerIndex = 0;
  function getPlayerTurn() {
    return players[currentPlayerIndex];
  }

  function nextPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  }

  function takeTurn(x, y) {
    const currentPlayer = getPlayerTurn();
    if (!gameBoard.placeToken(currentPlayer.getToken(), x, y)) {
      return;
    }

    nextPlayer();
  }

  /**
   * @param {any} token
   */
  function playerWithToken(token) {
    for (var player of players) {
      if (player.getToken() === token) {
        return player;
      }
    }
  }

  function getWinner() {
    // Check the rows
    for (var i = 0; i < gameBoard.dimensions; i++) {
      const row = gameBoard.getBoard()[i];
      if (row[0] !== EMPTY_CELL && row.every((v) => v === row[0])) {
        return playerWithToken(row[0]);
      }
    }

    // Check columns
    for (var i = 0; i < gameBoard.dimensions; i++) {
      const expected = gameBoard.getPosition(0, i);
      if (expected === EMPTY_CELL) {
        continue;
      }

      if (isColumnTheSame(i)) {
        return playerWithToken(expected);
      }
    }

    // Check diagonals
    const rtlExpected = gameBoard.getPosition(0, gameBoard.dimensions - 1);
    const ltrExpected = gameBoard.getPosition(gameBoard.dimensions - 1, 0);
    if (isRTLDiagonalTheSame()) {
      return playerWithToken(rtlExpected);
    }

    if (isLTRDiagonalTheSame()) {
      return playerWithToken(ltrExpected);
    }

    return undefined;
  }

  function isLTRDiagonalTheSame() {
    const ltrExpected = gameBoard.getPosition(gameBoard.dimensions - 1, 0);

    for (var i = gameBoard.dimensions - 1; i >= 0; i--) {
      if (gameBoard.getPosition(i, i) !== ltrExpected) {
        return false;
      }
    }

    return true;
  }

  function isRTLDiagonalTheSame() {
    const rtlExpected = gameBoard.getPosition(0, gameBoard.dimensions - 1);

    for (var i = 0; i < gameBoard.dimensions; i++) {
      if (gameBoard.getPosition(i, i) !== rtlExpected) {
        return false;
      }
    }

    return true;
  }

  function isColumnTheSame(x) {
    for (var j = 0; j < gameBoard.dimensions; j++) {
      if (gameBoard.getPosition(j, x) !== gameBoard.getPosition(0, x)) {
        return false;
      }
    }

    return true;
  }

  return {
    getPlayerTurn,
    getGameBoard: () => gameBoard,
    takeTurn,
    getWinner,
  };
}
