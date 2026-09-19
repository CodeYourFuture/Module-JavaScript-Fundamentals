let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//answer: we have 5 function calls across 3 lines: 
//line 4
//line 5
//line 10
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//answer: on line 5, there is a typo, a replaceAll("," ""));
//fix line 5 by changing it to priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// c) Identify all the lines that are variable reassignment statements
//answer: lines 4 and 5
// d) Identify all the lines that are variable declarations
//answer: line 1, 2, 7 and 8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//answer: .ReplaceAll(",", "") this will remove a comma from the price string and number will convert that clean string into a numeric value so mathematical calculations can be perfomed.