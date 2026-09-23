let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",",""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Number() line 4,5. .replaceAll() line 4,5. console.log() line 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// line 5: put a comma between the find and replace

// c) Identify all the lines that are variable reassignment statements
// line 4, 5.

// d) Identify all the lines that are variable declarations
// line 1,2,7,8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// convert str to number type and find and replace commas with nothing so that the number is read correctly.