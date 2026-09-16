let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// 5 function calls are made.
// Line 4 calls function replaceAll and Number
// Line 5 calls functions replaceAll and Number
// Line 10 calls log

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// There is a syntax error. The error says a closing parenthesis is missing, which I think is triggered
// because a comma in the argument list is missing. I added the comma and the error is resolved.

// c) Identify all the lines that are variable reassignment statements

// Line 4 reassigning carPrice
// Line 5 reassigning priceAfterOneYear

// d) Identify all the lines that are variable declarations

// Line 1 declares carPrice with let
// Line 2 declares priceAfterOneYear with let
// Line 7 declares priceDifference with const
// Line 8 declares percentageChange with const

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// The original carPrice is a string. In order to do math and get a percentage the string needs to be converted
// into a number first. And before that the string's comma needs to be removed (it's replaced with nothing
// using replaceAll)
