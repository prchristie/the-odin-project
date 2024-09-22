/*
Houses all logic for the etch a sketch board
*/

const isMouseDown = useMouseDown();

const MAXIMUM_DIMENSIONS = 100;

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

export function useEtchASketch() {
  function resetBoard(board) {
    board.innerHTML = "";
  }

  function isValidDimensions(dimension) {
    if (isNaN(dimension)) {
      alert("Provide a number please");
      return false;
    } else if (dimension < 1 || dimension > MAXIMUM_DIMENSIONS) {
      alert("Between 1 and 100 please");
      return false;
    }

    return true;
  }

  function setupNewGridOnElement(element, dimensions) {
    if (!isValidDimensions(dimensions)) {
      return;
    }

    resetBoard(element);
    const grid = createGridElement(dimensions);
    element.appendChild(grid);
  }

  function createGridElement(dimensions) {
    const grid = document.createElement("div");

    for (var y = 0; y < dimensions; y++) {
      const row = document.createElement("div");
      row.classList.add("row");
      grid.appendChild(row);
      for (var x = 0; x < dimensions; x++) {
        const cell = document.createElement("div");
        cell.addEventListener("mouseenter", () => {
          if (!isMouseDown()) {
            return;
          }
          colourCell(cell);
        });
        cell.addEventListener("mousedown", () => colourCell(cell));
        cell.classList.add("cell");
        row.appendChild(cell);
      }
    }

    return grid;
  }

  function colourCell(cell) {
    cell.style.backgroundColor = "black";
  }

  return { setupNewGridOnElement };
}
