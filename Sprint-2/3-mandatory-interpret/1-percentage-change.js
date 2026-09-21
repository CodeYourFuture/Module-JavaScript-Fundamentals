let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// ANSWER: There are 5 function calls along 3 lines
// Line 4: replaceAll() and Number()
// Line 5: replaceAll() and Number()
// Line 10: console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// ANSWER: The error comes from Line 5 because a comma is missing between the two string arguments in replaceAll("," "").
// FIX: Add the missing comma to replaceAll(",", "")

// c) Identify all the lines that are variable reassignment statements
// ANSWER: Lines 4 and 5 (carPrice and priceAfterOneYear)

// d) Identify all the lines that are variable declarations
// ANSWER: Lines 1, 2, 7, and 8 (using let and const)

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// ANSWER: The expression Number(carPrice.replaceAll(",","")) removes the comma from the carPrice = "10,000" and converts it to "10000". 
// Then, JavaScript can now convert the string into a number so it can be calculated.

