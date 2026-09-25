let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The price difference is ${priceDifference}`);
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
console.log(`The percentage change is ${percentageChange}%`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
<<<<<<< Updated upstream
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
         
=======
// Answer: 6 function calls:
// - Line 4: replaceAll(",", "") and Number(...)
// - Line 5: replaceAll(",", "") and Number(...)
// - Line 10: console.log(...)
// - Line 11: console.log(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer: The error was on the priceAfterOneYear.replaceAll line.
// It was written as replaceAll("," "") which is invalid syntax (missing a comma between the two arguments).
// Fixed by writing replaceAll(",", "") so the arguments are the search string "," and the replacement "".

// c) Identify all the lines that are variable reassignment statements
// Answer:
// - carPrice = Number(carPrice.replaceAll(",", ""));
// - priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// Answer:
// - let carPrice = "10,000";
// - let priceAfterOneYear = "8,543";
// - const priceDifference = carPrice - priceAfterOneYear;
// - const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer:
// carPrice.replaceAll(",", "") removes all commas from the string (e.g. "10,000" becomes "10000").
// Number(...) converts that string into a number (10000) so we can do subtraction and division.
>>>>>>> Stashed changes
