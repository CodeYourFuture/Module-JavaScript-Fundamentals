let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in the code:

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The original code has an error here:
//line 5 : It should be: replaceAll(",", "")
// There is also another problem: carPrice and priceAfterOneYear
// are declared with const, so they cannot be reassigned.
// They should be declared with let if we want to reassign them.

// c) Identify all the lines that are variable reassignment statements
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// const carPrice = "10,000";
// const priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// First, replaceAll(",", "") removes the comma from "10,000", producing the string "10000".
// Then Number() converts the string "10000" into the number 10000.
// This is necessary so that we can perform mathematical calculations with the price.
