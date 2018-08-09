var numbtns = document.getElementsByClassName("buttonNum"); // Gets all the elements that have the class buttonNum
var opbtns = document.getElementsByClassName("operator"); // Gets all the elements that have the class operator
var calcScreen = document.getElementById("screen");
var equals = document.getElementById("equals");
var num1 = "";
var num2 = "";
var operator = "";

//Records button clicks to store numbers
for (var i = 0; i < numbtns.length; i++) {
  numbtns[i].addEventListener("click", function() {
    calcScreen.innerHTML += this.innerHTML;
    if (operator == "") {
      num1 += this.innerHTML;
    }
    else {
      num2 += this.innerHTML;
    }
  });
}

//Records button clicks to store operator
for (var i = 0; i < opbtns.length; i++) {
  opbtns[i].addEventListener("click", function() {
    calcScreen.innerHTML += this.innerHTML;
    operator = this.innerHTML;
  });
}

//Gets element with ID clear
var clear = document.getElementById("clear");

//Clear screen and reset variables when AC is clicked
clear.onclick = function() {
  calcScreen.innerHTML = "";
  num1 = "";
  num2 = "";
  operator = "";
}
//Adds numbers
function addition(num1, num2) {
  return num1 + num2;
}

//Subtracts numbers
function subtractio(num1, num2) {
  return num1 - num2;
}

//Multiplies numbers
function multiplication(num1, num2) {
  return num1 * num2;
}

//Divides numbers
function division(num1, num2) {
  return num1 / num2;
}

equals.onclick = function() {
  switch (operator)
  {
    case "+":
      calcScreen.innerHTML = addition(parseFloat(num1), parseFloat(num2));
      break;
    case "-":
      calcScreen.innerHTML = subtraction(parseFloat(num1), parseFloat(num2));
      break;
    case "*":
      calcScreen.innerHTML = multiplication(parseFloat(num1), parseFloat(num2));
      break;
    case "/":
      calcScreen.innerHTML = division(parseFloat(num1), parseFloat(num2));
      break;
  }
}
