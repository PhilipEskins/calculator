function add(number1, number2) {
  return number1 + number2;
};
function sub(number1, number2) {
  return number1 - number2;
};
function mul(number1, number2) {
  return number1 * number2;
};
function div(number1, number2) {
  return number1 / number2;
};
function bmi() {
	var height = parseFloat(prompt("What is your height? (in meters)"));
  var weight = parseFloat(prompt("What is your weight? (in kilograms)"));

  var value = weight/(Math.pow(height, 2));
  return value;
};
function temp() {
  var number1 = parseFloat(prompt("What is the temp in Celsius?"))
	var far = number1 * 9 / 5 + 32;

  return far;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
document.write("<h2>Your added total is: " + result + "</h2>");
var result = sub(number1, number2);
document.write("<h2>Your subtracted total is: " + result + "</h2>");
var result = mul(number1, number2);
document.write("<h2>Your multiplied total is: " + result + "</h2>");
var result = div(number1, number2);
document.write("<h2>Your divided total is: " + result + "</h2>");
var result = document.write ("<p>Your BMI is: " + bmi() + "</p>");
var result = document.write ("<p> The current temp is " + temp() + "</p>");
