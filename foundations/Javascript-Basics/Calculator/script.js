import { createCalculator } from "./calculator.js";

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.querySelector("#clear-btn");
const equalsButton = document.querySelector("#equals-btn");
const decimalButton = document.querySelector(".decimal-btn");
const backspaceButton = document.querySelector(".backspace-btn");

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
  decimalButton?.addEventListener("click", handleDecimalPointClick);
  backspaceButton?.addEventListener("click", handleBackspaceClick);

  setupKeyboardInput();
}

function setupKeyboardInput() {
  const allowedOperators = new Set(["+", "-", "/", "*"]);

  document.addEventListener("keydown", (e) => {
    if (e?.defaultPrevented) {
      return;
    }

    if (!isNaN(Number(e.key))) {
      updateStateAndDisplay("number", e.key);
    } else if (allowedOperators.has(e.key)) {
      updateStateAndDisplay("operator", e.key);
    } else if (e.key === "Backspace") {
      updateStateAndDisplay("backspace");
    } else if (e.key === "=" || e.key === "Enter") {
      updateStateAndDisplay("calculate");
    } else if (e.key === "c" || e.key === "C") {
      updateStateAndDisplay("clear");
    } else if (e.key === ".") {
      updateStateAndDisplay("decimal");
    }

    e.preventDefault();
  });
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
  } else if (action === "decimal") {
    result = calculator.addDecimalPoint();
  } else if (action === "backspace") {
    result = calculator.backspace();
  } else if (action === "tooManyNumbers") {
    calculator.clear();
    result = "Too many numbers";
  }

  const equationState = calculator.getEquationState();
  if (equationState.length > 19) {
    updateStateAndDisplay("tooManyNumbers");
  } else {
    updateDisplay(equationState, resultDisplay);
  }
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

function handleDecimalPointClick() {
  updateStateAndDisplay("decimal");
}

function handleBackspaceClick() {
  updateStateAndDisplay("backspace");
}

setupCalculator();
