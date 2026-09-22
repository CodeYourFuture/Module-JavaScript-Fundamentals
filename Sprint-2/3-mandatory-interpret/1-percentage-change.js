let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made?
//There are 5 function calls:
//replaceAll
//Line 4
//Number(...)
//Line 4
//priceAfterOneYear.replaceAll(",", "")
//Line 5
//Number(...)
//Line 5
//priceAfterOneYear.replaceAll(",", "")
//Line 10 ,console.log

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//error:line 5,SyntaxError: missing ) after argument list,missing a comma between the two arguments.
// c) Identify all the lines that are variable reassignment statements
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// d) Identify all the lines that are variable declarations
//let carPrice
//let priceAfterOneYear
//const priceDifference
//const percentageChange

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//it removes all commas from the string
//converts the string "10000" into the number 10000
//The purpose is to turn the price from a formatted string into a number
