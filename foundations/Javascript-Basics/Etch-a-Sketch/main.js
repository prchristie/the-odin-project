import { useEtchASketch } from "./etchASketch.js";

const etchASketchBoard = document.querySelector(".etch-a-sketch-board");
const changeDimensionsButton = document.querySelector(
  ".change-dimensions-button"
);

const INITIAL_BOARD_SIZE = 16;

const { createGridOnElement } = useEtchASketch();
createGridOnElement(etchASketchBoard, INITIAL_BOARD_SIZE);
changeDimensionsButton?.addEventListener("click", changeDimensionsFlow);

function changeDimensionsFlow() {
  const userInput = prompt("What should the new dimensions be then?");

  const dimensions = Number(userInput);

  createGridOnElement(etchASketchBoard, dimensions);
}
