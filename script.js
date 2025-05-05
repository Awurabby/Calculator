let num1;
let operator;
let num2;
let result;

let displaying = document.querySelector(".screen");
buttons = document.querySelectorAll(" button");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear")

function add(someNumbers) {
  return someNumbers.reduce((total, current) => total + current, 0)
}
function subtract(someNumbers) {
  return  someNumbers.reduce((remaining, current) =>  remaining - current)
}
function multiply (someNumbers){
  return someNumbers.reduce((product, current) => product * current)
}
function divide (someNumbers){
  return someNumbers.reduce((theQuotient, current) => theQuotient/current)
}

function operate(num1, operator, num2){
  switch (operator) {
    case "+": return add([num1, num2]);
    case "-": return subtract([num1, num2]);
    case "X": return multiply([num1, num2]);
    case "/": return divide([num1, num2]);
  }
}
let currentStatus = "num1";

buttons.forEach((button) => {
  button.addEventListener("click", ()=> {
  let value = button.textContent;

  if (!isNaN(value) || (value ===".")){displaying.textContent += value

    if (currentStatus === "num1"){num1 = parseInt(displaying.textContent)}
    else if (currentStatus === "num2"){
      num2 = parseInt(displaying.textContent)
    }
  }
  else if (["+", "-", "X", "/"].includes(value)){
    operator = value;
    currentStatus = "num2";
    displaying.textContent = "";
  }
}
)})
equals.addEventListener("click", ()=> {
  let result = operate(num1, operator, num2);
  displaying.textContent = result;
  num1 = result;
  operator ="";
  num2 = "";
});
clear.addEventListener("click", ()=> {
  displaying.textContent="";
  num1 ="";
  operator="";
  num2="";
  currentStatus = "num1";
})
