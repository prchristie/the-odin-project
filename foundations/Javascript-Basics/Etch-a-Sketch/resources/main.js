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

let mouseDown = false;
function toggleMousePressed(state) {
  mouseDown = state;
}

document.addEventListener("mousedown", () => toggleMousePressed(true));
document.addEventListener("mouseup", () => toggleMousePressed(false));

function colourCell(cell) {
  if (!mouseDown) {
    return;
  }
  cell.style.backgroundColor = "black";
}

const etchASketchBoard = document.querySelector(".etch-a-sketch-board");
etchASketchBoard?.appendChild(createGridElement(50));
