let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
console.log(carPrice);
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 4(2), 5(2), 10
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// It was a syntax error, it can be fixed by adding the missing part (1 of 2 parentheses). Comma between 2 arguments was missing.
// c) Identify all the lines that are variable reassignment statements
// 4, 5
// d) Identify all the lines that are variable declarations
// 1, 2, 7, 8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It turns/converts a string into a number by removing the comma and quotation marks (since they are non-number values)
