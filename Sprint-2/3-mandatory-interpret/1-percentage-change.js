let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: There are 5 function calls.
// Line 4: carPrice.replaceAll() and Number()
// Line 5: priceAfterOneYear.replaceAll() and Number()
// Line 10: console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer: The error was on line 5 because a comma was missing between the two arguments
// passed to replaceAll(). Adding the missing comma fixes the error.

// c) Identify all the lines that are variable reassignment statements
// Answer: Lines 4 and 5 are variable reassignment statements.

// d) Identify all the lines that are variable declarations
// Answer: Lines 1, 2, 7 and 8 are variable declarations.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer: It removes all commas from the carPrice string and converts the result into a number.
// This allows carPrice to be used in mathematical calculations.
