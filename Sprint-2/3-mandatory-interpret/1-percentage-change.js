let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls. 
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// console.log(`The percentage change is ${percentageChange}`);


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming from line 5. There is a separator missing from the function call. Insert a comma to fix the problem.

// c) Identify all the lines that are variable reassignment statements
// Line 4 carPrice = Number(carPrice.replaceAll(",", ""));
// Line 5 priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations
// Line 1 let carPrice = "10,000";
// Line 2 let priceAfterOneYear = "8,543";
// Line 7 const priceDifference = carPrice - priceAfterOneYear;
// Line 8 const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// carPrice.replaceAll(",", "") removes every comma from the string, turning "10,000" into "10000".
// Number(...) then converts that string into the number 10000.
// The purpose is to turn a formatted price string into a real number so it can be used in calculations.
// Without the commas removed, Number("10,000") would return NaN.