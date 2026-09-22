let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
 //>
// There are 5 function calls, two function calls on line 4 = Number(...) and replaceAll(...) two more on line 5 = Number(...) and replaceAll(...) and finally on line 10 = console.log(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

//>SyntaxError: missing a comma to separate the arguments

// c) Identify all the lines that are variable reassignment statements
//>carPrice = Number(carPrice.replaceAll(",", "")); and priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
//>There are 4 variable declarations- 1) let carPrice = "10,000"; 2) let priceAfterOneYear = "8,543"; 
//3) const priceDifference = carPrice-priceAfterOneYear; 4) const percentageChange = (priceDifferenc/carPrice)* 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//>Number(carPrice.replaceAll(",", "")); is a string and the expression removes the comma from "10,000" and converts "10000" from a string into the number 10000.