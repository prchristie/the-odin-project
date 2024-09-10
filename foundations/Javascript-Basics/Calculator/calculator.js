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
      secondNumber = addDigitToNumber(secondNumber, number);
    } else {
      firstNumber = addDigitToNumber(firstNumber, number);
    }
  }

  function addDigitToNumber(number, digit) {
    if (number.length > 8) {
      return number;
    }

    return number + digit;
  }

  function setOperator(op) {
    if (!firstNumber || !isValidNumber(firstNumber)) {
      return;
    }

    operator = op;
  }

  function canCalculate() {
    return (
      operator && isValidNumber(firstNumber) && isValidNumber(secondNumber)
    );
  }

  function isValidNumber(num) {
    return !isNaN(Number(num));
  }

  function calculate() {
    if (!canCalculate()) {
      return;
    }

    checkIfDividingByZero();

    var result = operate(Number(firstNumber), Number(secondNumber), operator);

    firstNumber = String(result);
    secondNumber = "";
    operator = "";

    return result;
  }

  function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
  }

  function getEquationState() {
    return `${firstNumber}${operator}${secondNumber}`;
  }

  function checkIfDividingByZero() {
    if (secondNumber === "0" && operator === "/") {
      alert("You are dumb idiot");
    }
  }

  function hasDecimalPoint(val) {
    return val.includes(".");
  }

  function addDecimalPoint() {
    if (operator) {
      if (hasDecimalPoint(secondNumber)) {
        return;
      }

      secondNumber += ".";
    } else {
      if (hasDecimalPoint(firstNumber)) {
        return;
      }

      firstNumber += ".";
    }
  }

  function removeLastLetter(str) {
    return str.substring(0, str.length - 1);
  }

  function backspace() {
    if (operator) {
      if (secondNumber.length === 0) {
        operator = "";
      }

      secondNumber = removeLastLetter(secondNumber);
    } else {
      firstNumber = removeLastLetter(firstNumber);
    }
  }

  return {
    inputNumber,
    setOperator,
    calculate,
    clear,
    getEquationState,
    addDecimalPoint,
    backspace,
  };
}
