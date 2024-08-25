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

function changeDimensionsFlow(etchASketchContainer, grid) {
  const dims = prompt("How many cells in a row?");

  if (!Number(dims) || Number(dims) > MAX_DIMENSIONS) {
    return;
  }
  etchASketchContainer?.removeChild(grid);

  const newGrid = createGrid(dims, dims);
  etchASketchContainer?.appendChild(newGrid);
}

function run() {
  const etchASketchContainer = document.querySelector(".etchasketch-container");
  const changeDimsBtn = document.querySelector(".change-dims-btn");

  let grid = createGrid(INITIAL_DIMENSIONS, INITIAL_DIMENSIONS);
  etchASketchContainer?.appendChild(grid);

  changeDimsBtn?.addEventListener("click", () =>
    changeDimensionsFlow(etchASketchContainer, grid)
  );
}

function darkenCell(cell, numHovers) {
  cell.style.opacity = String(1 - numHovers * 0.1);
}

function setCellToRandomColour(cell) {
  cell.style.backgroundColor = getRandomColour();
}

function handleCellMouseOver(hovers, cell) {
  hovers++;
  const color = cell.style.backgroundColor;

  if (!color) {
    setCellToRandomColour(cell);
  } else {
    darkenCell(cell, hovers);
  }
}

function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  var hovers = 0;
  cell.addEventListener("mouseover", () => handleCellMouseOver(hovers, cell));

  return cell;
}

function createCellRow(numCells) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let y = 0; y < numCells; y++) {
    const cell = createCell();
    row.appendChild(cell);
  }

  return row;
}

function createGrid(horizontalCells, verticalCells) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  for (let x = 0; x < horizontalCells; x++) {
    const row = createCellRow(verticalCells);
    grid.appendChild(row);
  }

  return grid;
}

run();
