let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);
// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of thi e() and Number().

//a) There are 4 function calls. They are on lines 4 and 5. Each line contains two function calls: replaceAll() and Number().
//b) The error comes from line 5. The replaceAll() function is missing a comma between its two arguments. The problem can be fixed by adding a comma: replaceAll(",", "").
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
//c) The variable reassignment statements are lines 4 and 5.
//d) The variable declaration statements are lines 1, 2, 7 and 8.

//e) The expression removes the comma from the price string and then converts the result from a string into a number, so JavaScript can use it for calculations.

//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;

