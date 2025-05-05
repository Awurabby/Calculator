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
  let sign = operator
  switch (sign) {
    case "+": return add([num1, num2]);
    case "-": return subtract([num1, num2]);
    case "x": return multiply([num1, num2]);
    case "/": return divide([num1, num2]);
  }
}

  
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    for (let i=1; i<=1; i++) {
      if (index === 0){displaying.textContent = "0"}
      else if (index === 1){displaying.textContent = "1";}
      else if (index === 2){displaying.textContent = "2";}
      else if (index === 3){displaying.textContent = "3";}
      else if (index === 4){displaying.textContent = "4";}
      else if (index === 5){displaying.textContent = "5";}
      else if (index === 6){displaying.textContent = "6";}
      else if (index === 7){displaying.textContent = "7";}
      else if (index === 8){displaying.textContent = "8";}
      else if (index === 9){displaying.textContent = "9";}
      else if (index === 10){displaying.textContent = ".";}
     
      else if (index === 12){displaying.textContent = "+";}
      else if (index === 13){displaying.textContent = "-";}
      else if (index === 14){displaying.textContent = "x";}
      else if (index === 15){displaying.textContent = "/";}
    
      count += 1;
    }
    
    console.log(count);
    if (count === 1){num1 = parseInt(displaying.textContent)}
    else if(count === 2){operator = displaying.textContent}
    else if (count === 3){num2 = parseInt(displaying.textContent)}

    result = operate(num1, operator, num2);
    
    })
  })
  equals.addEventListener("click", () => {
    displaying.textContent = result;
    console.log("done");
  })
clear.addEventListener("click", ()=> {
  displaying.textContent= "";
  num1 = "";
  operator="";
  num2 = "";
  count = 0;
})




