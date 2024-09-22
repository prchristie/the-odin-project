const isMouseDown = useMouseDown();

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

export function useEtchASketch(initialDimensions) {
  function resetBoard(board) {
    // @ts-ignore
    board.innerHTML = "";
  }

  function setupNewGridOnElement(element, dimensions) {
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

  return { setupNewGridOnBoard: setupNewGridOnElement, resetBoard };
}
