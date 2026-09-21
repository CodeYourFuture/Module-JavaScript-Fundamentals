let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//There are 5 function calls in this File. Line 4(Number and carPrice.replaceAll()), line 5(Number and priceAfterOneYear.replaceAll()) and line 10 (console.log)
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//  The error message in the terminal tells me there is a syntax error on line 5. There is a comma missing separating the two arguments. I can fix the problem by adding a comma. The console now prints "The percentage change is 14.57".

// c) Identify all the lines that are variable reassignment statements
// There are 2 variable reassignment statements in this file carPrice and priceAfterOneYear as both were first declared on line 1 and 2 using the let keyword before being reassigned on lines 4 and 5.

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
