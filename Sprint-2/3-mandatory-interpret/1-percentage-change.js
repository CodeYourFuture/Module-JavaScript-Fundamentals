let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls:
// - line 4: carPrice.replaceAll(",", "")
// - line 5: priceAfterOneYear.replaceAll(",", "")
// - line 4: Number(...)
// - line 5: Number(...)
// - line 10: console.log(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error occurs at line 5 because the syntax is invalid: replaceAll("," "") is missing a comma between the arguments.
// Fix it by writing replaceAll(",", "").

// c) Identify all the lines that are variable reassignment statements
// - line 4: carPrice = Number(...)
// - line 5: priceAfterOneYear = Number(...)

// d) Identify all the lines that are variable declarations
// - line 1: let carPrice = "10,000";
// - line 2: let priceAfterOneYear = "8,543";
// - line 7: const priceDifference = carPrice - priceAfterOneYear;
// - line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It removes the commas from the string, then converts the cleaned string into a number.
// This is necessary because the prices are stored as strings like "10,000" and "8,543", and we need to perform arithmetic on them.
