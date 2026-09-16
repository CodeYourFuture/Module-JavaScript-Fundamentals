let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


//Solution
// a) There are 5 function calls on lines 4, 5, and 9.
//    Line 4: carPrice.replaceAll(",","")
//    Line 4: Number()
//    Line 5: priceAfterOneYear.replaceAll("," "")
//    Line 5: Number()
//    Line 9: console.log()

// b) Line 5 seems to broken.
// Error message - SyntaxError: missing ) after argument list
// Reason for error: There is a missing comma between two arguments of replaceAll.
// To fix the error, we need to add the missing comma between the arguments of replaceAll.

// c) Lines 4 and 5 contain variable reassignment statements
//    Line 4: carPrice = Number()
//    Line 5: priceAfterOneYear = Number()

// d) Lines 1, 2, 7, and 8 contain variable declarations
//    Line 1: let carPrice = "10,000";
//    Line 2: let priceAfterOneYear = "8,543";
//    Line 7: const priceDifference = carPrice - priceAfterOneYear;
//    Line 8: const percentageChange = (priceDifference / carPrice) * 100;