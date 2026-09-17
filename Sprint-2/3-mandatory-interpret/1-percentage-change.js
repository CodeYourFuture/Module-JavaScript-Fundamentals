let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function/method calls:
// Line 4: carPrice.replaceAll(",", "")
// Line 4: Number(...)
// Line 5: priceAfterOneYear.replaceAll(",", "")
// Line 5: Number(...)
// Line 10: console.log(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error originally comes from line 5.
// priceAfterOneYear was declared with const, but line 5 tries to assign a new value to it.
// A variable declared with const cannot be reassigned, so JavaScript throws a TypeError.
// To fix the error, change const to let because priceAfterOneYear needs to be reassigned.

// c) Identify all the lines that are variable reassignment statements
// Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 7: const priceDifference = carPrice - priceAfterOneYear;
// Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// carPrice.replaceAll(",", "") removes all commas from the string,
// changing "10,000" to "10000".
// Number(...) then converts the string "10000" into the number 10000.
// This allows carPrice to be used correctly in mathematical calculations.