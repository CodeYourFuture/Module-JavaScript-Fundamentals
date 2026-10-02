let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// i) There are five function calls. lines 4,5 and 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// ii) The error is coming from line 5. There wasn't a , seperating what the replaceAll function should replace the initial "," with "" so that Javascript knows to remove the , in line 2.

// c) Identify all the lines that are variable reassignment statements
// iii) Lines 4 and 5 are variable reassignment statetments

// d) Identify all the lines that are variable declarations
// iv) Lines 1, 2, 7 and 8 are variable declarations.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// v) It is replacing the string value 10,000 with 10000 by removing the comma and converts the string into a number type so that mathematical operations can be performed on it.
