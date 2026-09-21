let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//5 function calls. 2 in line 4, 2 in line 5, 1 in line 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Error is from line 5, no comma separating arguments for replace all. fix by adding comma after ","

// c) Identify all the lines that are variable reassignment statements
//4 and 5

// d) Identify all the lines that are variable declarations
//1, 2, 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//takes the string 10,000 and replaces all the commas with empty string, effectively removing the comma
//makes the string into number format so it can be converted to a number
