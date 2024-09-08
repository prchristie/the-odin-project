import { createCalculator } from "./calculator.js";

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.querySelector("#clear-btn");
const equalsButton = document.querySelector("#equals-btn");

const resultDisplay = document.querySelector("#calculator-display");

const calculator = createCalculator();

function setupCalculator() {
  equalsButton?.addEventListener("click", handleEqualsClick);
  clearButton?.addEventListener("click", handleClearClick);

  numberButtons.forEach((btn) =>
    btn.addEventListener("click", handleNumberClick)
  );
  operatorButtons.forEach((btn) =>
    btn.addEventListener("click", handleOperatorClick)
  );
}

function updateStateAndDisplay(action, value) {
  let result;
  if (action === "number") {
    result = calculator.inputNumber(value);
  } else if (action === "operator") {
    result = calculator.setOperator(value);
  } else if (action === "calculate") {
    result = calculator.calculate();
  } else if (action === "clear") {
    result = calculator.clear();
  }

  updateDisplay(result, resultDisplay);
}

function updateDisplay(text, display) {
  display.textContent = text;
}

function handleNumberClick(e) {
  updateStateAndDisplay("number", e.target.textContent);
}

function handleOperatorClick(e) {
  updateStateAndDisplay("operator", e.target.textContent);
}

function handleEqualsClick() {
  updateStateAndDisplay("calculate");
}

function handleClearClick() {
  updateStateAndDisplay("clear");
}

setupCalculator();
