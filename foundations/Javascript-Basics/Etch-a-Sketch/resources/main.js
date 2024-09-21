const etchASketchBoard = document.querySelector(".etch-a-sketch-board");
const changeDimensionsButton = document.querySelector(
  ".change-dimensions-button"
);

setupNewGridOnBoard(etchASketchBoard, 50);
changeDimensionsButton?.addEventListener("click", changeDimensionsFlow);

function changeDimensionsFlow() {
  const userInput = prompt("What should the new dimensions be then?");

  const dimensions = Number(userInput);

  if (isNaN(dimensions)) {
    alert("Provide a number please");
    return;
  } else if (dimensions < 1 || dimensions > 100) {
    alert("Between 1 and 100 please");
    return;
  }

  setupNewGridOnBoard(etchASketchBoard, dimensions);
}

function resetBoard() {
  // @ts-ignore
  etchASketchBoard.innerHTML = "";
}

const isMouseDown = useMouseDown();

function setupNewGridOnBoard(board, dimensions) {
  resetBoard();
  const grid = createGridElement(dimensions);
  board.appendChild(grid);
}

function createGridElement(dimensions) {
  const grid = document.createElement("div");

  for (var y = 0; y < dimensions; y++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    for (var x = 0; x < dimensions; x++) {
      const cell = document.createElement("div");
      cell.addEventListener("mouseenter", () => colourCell(cell));
      cell.classList.add("cell");
      row.appendChild(cell);
    }
  }

  return grid;
}

function useMouseDown() {
  let mouseDown = false;
  function toggleMousePressed(state) {
    mouseDown = state;
  }

  document.addEventListener("mousedown", () => toggleMousePressed(true));
  document.addEventListener("mouseup", () => toggleMousePressed(false));

  return function isMouseDown() {
    return mouseDown;
  };
}

function colourCell(cell) {
  if (!isMouseDown()) {
    return;
  }
  cell.style.backgroundColor = "black";
}
