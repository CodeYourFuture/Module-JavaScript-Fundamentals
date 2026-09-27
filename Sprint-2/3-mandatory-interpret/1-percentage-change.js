let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// line 4, number() and replaceAll()
// line 5, number() and replaceAll()
// line 10, console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The was a missing comma in line 5. 

// c) Identify all the lines that are variable reassignment statements
// line 4 and line 5

// d) Identify all the lines that are variable declarations
// line 1,line 2, line 7, line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression changes the string to a number and removes the comma. This makes it possible for Javascript to perform subtraction since it is no longer a string