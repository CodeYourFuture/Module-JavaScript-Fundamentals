let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 5
// * number() and .replaceAll() in line 4
// * number() and .replaceAll()in line 5
// console.log() is on line 10
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//b) error = SyntaxError: missing ) after argument list
// (",", ",")); - added , between quoted values
// The error was coming from line 5 due to a missing comma in the replaceAll() method
// c) Identify all the lines that are variable reassignment statements
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ","));
// d) Identify all the lines that are variable declarations
//let carPrice = "10,000";
//let priceAfterOneYear = "8,543";
//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// e) cleans the amount format by removing characters such as , and leaving only number
