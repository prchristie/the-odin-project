const INITIAL_DIMENSIONS = 16;
const MAX_DIMENSIONS = 300;
const POSSIBLE_COLORS = [
  "red",
  "blue",
  "aqua",
  "brown",
  "coral",
  "green",
  "purple",
];

function getRandomColour() {
  return POSSIBLE_COLORS[Math.floor(Math.random() * POSSIBLE_COLORS.length)];
}

function run() {
  const etchASketchContainer = document.querySelector(".etchasketch-container");
  const changeDimsBtn = document.querySelector(".change-dims-btn");

  let grid = createGrid(INITIAL_DIMENSIONS, INITIAL_DIMENSIONS);
  etchASketchContainer?.appendChild(grid);

  changeDimsBtn?.addEventListener("click", () => {
    const dims = prompt("How many cells in a row?");

    if (!Number(dims) || Number(dims) > MAX_DIMENSIONS) {
      return;
    }
    etchASketchContainer?.removeChild(grid);

    grid = createGrid(dims, dims);
    etchASketchContainer?.appendChild(grid);
  });
}

function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  var hovers = 0;
  cell.addEventListener("mouseover", () => {
    hovers++;
    const color = cell.style.backgroundColor;

    if (!color) {
      cell.style.backgroundColor = getRandomColour();
    } else {
      cell.style.opacity = String(1 - hovers * 0.1);
    }
  });

  return cell;
}

function createGrid(horizontalCells, verticalCells) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  for (let x = 0; x < horizontalCells; x++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let y = 0; y < verticalCells; y++) {
      const cell = createCell();
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }

  return grid;
}

run();
