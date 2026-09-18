let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: There are 5 function/method calls across 3 lines:
// - Line 4: replaceAll(",", "") and Number(...)
// - Line 5: replaceAll(",", "") and Number(...)
// - Line 10: console.log(...)

// b) Run the code and identify the line where the error is coming from – why is this error occurring? How can you fix this problem?
// Answer: On line 5, there is a typo in replaceAll(",", "") where the comma is outside the quotes or contains empty space before the closing quote (""")). 
// Fix line 5 by changing it to: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
// Answer: Lines 4 and 5 (carPrice = ... and priceAfterOneYear = ...)

// d) Identify all the lines that are variable declarations
// Answer: Lines 1, 2, 7, and 8 (let carPrice, let priceAfterOneYear, const priceDifference, const percentageChange)

// e) Describe what the expression Number(carPrice.replaceAll(",", "")) is doing – what is the purpose of this expression?
// Answer: .replaceAll(",", "") removes the comma from the price string ("10,000" becomes "10000"), and Number(...) converts that clean string into a numeric value so mathematical calculations can be performed on it