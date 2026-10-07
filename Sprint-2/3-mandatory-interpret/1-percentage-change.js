let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Both Number functions on line 4 and 5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// In line 5, in the .replace.All method, there was a missing comma between what was being replaced and by what. 

// c) Identify all the lines that are variable reassignment statements
// Line 4 and 5

// d) Identify all the lines that are variable declarations
// Lines 1, 2, 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The purpose of the Number function is to turn a value, in this case a string into a number data type. 
// The expression is replacing the commas in the carPrice string with nothing so that it can be turned into a number 
