let calculationHistory = [];
let currentCalculation = "";

function appendToScreen(value) {
  currentCalculation += value;
  document.getElementById("calcScreen").textContent = currentCalculation;
}

function clearScreen() {
  currentCalculation = "";
  document.getElementById("calcScreen").textContent = "0";
}

function calculate() {
  const result = eval(currentCalculation);
  calculationHistory.push(`${currentCalculation} = ${result}`);
  document.getElementById("calcHistory").innerHTML = calculationHistory.join("<br>");
  clearScreen();
}
