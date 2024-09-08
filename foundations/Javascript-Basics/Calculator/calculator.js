export function createCalculator() {
  let firstNumber = "";
  let secondNumber = "";
  let operator = "";

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function operate(a, b, operator) {
    switch (operator) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
    }
  }

  function inputNumber(number) {
    if (operator) {
      secondNumber += number;
    } else {
      firstNumber += number;
    }
  }

  function setOperator(op) {
    if (!firstNumber) {
      return;
    }

    operator = op;
  }

  function calculate() {
    if (!(firstNumber && secondNumber && operator)) {
      return;
    }

    var result = operate(Number(firstNumber), Number(secondNumber), operator);

    firstNumber = result;
    secondNumber = "";
    operator = "";
  }

  function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
  }

  function getEquationState() {
    return `${firstNumber} ${operator} ${secondNumber}`;
  }

  return { inputNumber, setOperator, calculate, clear, getEquationState };
}
