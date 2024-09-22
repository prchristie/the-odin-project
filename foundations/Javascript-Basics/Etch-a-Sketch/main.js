/*
Sets up everything related to user interaction and specific to this application
*/

import { useEtchASketch } from "./etchASketch.js";

const etchASketchBoard = document.querySelector(".etch-a-sketch-board");
const changeDimensionsButton = document.querySelector(
  ".change-dimensions-button"
);
const resetButton = document.querySelector(".reset-button");
const rainbowModeButton = document.querySelector(".rainbow-mode-button");

const INITIAL_BOARD_SIZE = 16;
let currentDimensions = INITIAL_BOARD_SIZE;

const { setupNewGridOnElement, toggleRainbowMode } = useEtchASketch();
setupNewGridOnElement(etchASketchBoard, INITIAL_BOARD_SIZE);

changeDimensionsButton?.addEventListener("click", changeDimensionsFlow);
resetButton?.addEventListener("click", () =>
  setupNewGridOnElement(etchASketchBoard, currentDimensions)
);
rainbowModeButton?.addEventListener("click", () => {
  const isOn = toggleRainbowMode();
  if (isOn) {
    rainbowModeButton.classList.add("rainbow-mode-enabled");
  } else {
    rainbowModeButton.classList.remove("rainbow-mode-enabled");
  }

  rainbowModeButton.textContent = `${isOn ? "Disable" : "Enable"} rainbow mode`
});

function changeDimensionsFlow() {
  const userInput = prompt("What should the new dimensions be then?");

  const dimensions = Number(userInput);

  setupNewGridOnElement(etchASketchBoard, dimensions);
  currentDimensions = dimensions;
}
