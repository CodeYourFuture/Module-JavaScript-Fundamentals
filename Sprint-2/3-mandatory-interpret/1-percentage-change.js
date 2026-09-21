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

// a) I found 5 places where the code "calls" a function (runs a built-in command):
//    Line 4: Number(...) and carPrice.replaceAll(...)
//    Line 5: Number(...) and priceAfterOneYear.replaceAll(...)
//    Line 10: console.log(...)
//
// b) The error showed up on Line 5. It said "SyntaxError: missing ) after
//    argument list". That just means I had one too many closing brackets ( ) )
//    at the end of that line.
//
// c) There are 2 lines where a variable gets a new value (reassignment):
//    Line 4: carPrice = ...
//    Line 5: priceAfterOneYear = ...
//
// d) There are 4 lines where a new variable is created (declaration):
//    Line 1, Line 2, Line 7, and Line 8.
//
// e) Number(carPrice.replaceAll(",", "")) does two things, step by step:
//    First, replaceAll(",", "") takes out all the commas from the text, so
//    "10,000" turns into "10000".
//    Then, Number(...) changes that text into a real number (10000), so we
//    can do maths with it instead of treating it like a word.