let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Answers

// a) Line, 4 x2, 5, and 10

// b) The error was online 5 inside replaceAll method parentheses a comma is missing between the double quotes.

// c) Line 4 carPrice. Line 5 priceAfterOneYear.

// d) Line 1, 2, 7 and 8.

// e) The method replaceALL is removing the comma. Then the Number method is converting the string into numbers.
//    The purpose is to use number operations and calculate the percentage change.
