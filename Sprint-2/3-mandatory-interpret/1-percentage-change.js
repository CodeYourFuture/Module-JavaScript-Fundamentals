let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// Answer: Line 4 has 2 function call :'Number(), replaceAll()'. 
// Line 5 has 2 function call: 'Number(), replaceAll()'. 
// Line 10 has 1 function call console.log() 
// In total there are 5 function calls.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer: The error is coming from line 5, spotting at the Number(priceAfterOneYear.replaceAll("," ""));
// It's a "SyntaxError: missing ) after argument list",  missing a comma inside the replaceAll.() function.

// c) Identify all the lines that are variable reassignment statements

// Answer: Line 4 and 5 are variable assignment statements

// d) Identify all the lines that are variable declarations

//  Answer: Line 1,2,7 and 8 are variable declearations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Answer: ReplaceAll() function clears out all the commas in the strings, the number() converts the strings to numbers to help with calculation
