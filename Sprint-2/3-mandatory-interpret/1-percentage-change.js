let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Line 4 calls the replaceAll() function and the Number() function
// Line 5 calls the replaceAll() function and the Number() function
// Line 10 calls the console.log() function
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//                                                      ^^^

// SyntaxError: missing ) after argument list
// The error is occurring because there is a missing comma in the replaceAll() function
// The replaceAll() function should be replaceAll(",", "") like the one on line 4
// I've fixed it by adding the comma

// c) Identify all the lines that are variable reassignment statements
// Line 4 and Line 5 are variable reassignment statements. The variables carPrice and priceAfterOneYear are being reassigned to new values

// d) Identify all the lines that are variable declarations
// 1,2,7,8 are variable declarations. The variables carPrice, priceAfterOneYear, priceDifference, and percentageChange are being declared

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// working from the inside out:
// the replaceAll() function is removing the comma from the string stored in the carPrice variable
// the Number() function is converting the string to a number
