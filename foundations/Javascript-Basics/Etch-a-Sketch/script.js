const HORIZONTAL_CELLS = 16;
const VERTICAL_CELLS = 16;

function run() {
  const etchASketchContainer = document.querySelector(".etchasketch-container");
  const changeDimsBtn = document.querySelector(".change-dims-btn");

  const grid = createGrid(HORIZONTAL_CELLS, VERTICAL_CELLS);
  etchASketchContainer?.appendChild(grid);

  changeDimsBtn?.addEventListener("click", () => {
    const dims = prompt("How many cells in a row?");
  });
}

function createGrid(horizontalCells, verticalCells) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  for (let x = 0; x < horizontalCells; x++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let y = 0; y < verticalCells; y++) {
      const inner = document.createElement("div");
      inner.classList.add("cell");
      row.appendChild(inner);
    }
    grid.appendChild(row);
  }

  return grid;
}

run();
