import { useEtchASketch } from "./etchASketch.js";

const etchASketchBoard = document.querySelector(".etch-a-sketch-board");
const changeDimensionsButton = document.querySelector(
  ".change-dimensions-button"
);

const { setupNewGridOnBoard } = useEtchASketch(10);
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
