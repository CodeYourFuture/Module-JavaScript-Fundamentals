let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//answers

/* a) there are there five
     carPrice.replaceAll(",", "")
     Number(carPrice.replaceAll(",", ""))
     Number(priceAfterOneYear.replaceAll(",", ""))
     console.log(...) -
     (priceDifference / carPrice) * 100 - line 7 (this is an expression that involves division and multiplication, but it does not involve a function call)*/
    

/* b) priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); 
The issue is  a syntax mistake in the brackets/quotes, and JavaScript throws a SyntaxError before running.

the fix would be priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

*/

/* c)carPrice = Number(carPrice.replaceAll(",", ""));
     priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));*/

/* d) let carPrice = "10,000";
let priceAfterOneYear = "8,543";
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;*/

/* e)carPrice is a string:
    replaceAll(",", "") removes commas:
    Number(...) converts string to a number:
    Convert a formatted string number into a real numeric value so calculations can work.*/
