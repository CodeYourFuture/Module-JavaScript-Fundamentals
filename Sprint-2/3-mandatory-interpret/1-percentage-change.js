let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The price difference is ${priceDifference}`);


console.log(`The percentage change is ${percentageChange}%`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: 6 function calls.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer:The error was a SyntaxError on the replaceAll line (missing/incorrect quotes/commas).
//    Fixed by using replaceAll(",", "") correctly so commas are removed before Number(...).

// c) Identify all the lines that are variable reassignment statements
// Answer: carPrice = Number(carPrice.replaceAll(",", "")); line 4
//         priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); line 5

// d) Identify all the lines that are variable declarations
// Answer: let carPrice = "10,000"; line1
//         let priceAfterOneYear = "8,543"; line 2
//         const priceDifference = carPrice - priceAfterOneYear; line 7
//         const percentageChange = (priceDifference / carPrice) * 100; line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer: carPrice.replaceAll(",","") remove commas from the string.
//         Number(...) changes the text to a number so subtraction and division work correctly.
         
