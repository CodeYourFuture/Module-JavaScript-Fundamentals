let carPrice = "10,000";
let priceAfterOneYear = "8,543";
//console.log(typeof  carPrice);
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//5 FUNCTION calls. Line 4, 5, 10.
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//the error is SyntaxError: missing ) after argument list
//The error is coming from line 5, column 61. There is nothing seprating the two indexes. A comma can should used to seprate them.
// c) Identify all the lines that are variable reassignment statements
//Two lines 4 and 5
// d) Identify all the lines that are variable declarations
//four lines 1,2,7,8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//the expression Number(carPrice.replaceAll(",","")) change the string value to anumber that can be calculated and subtracted
//line 7 needs it so the calculation could work, a string can't be subtractedn from a number so it has to be changed to a number

//console.log(typeof  carPrice);

//done
