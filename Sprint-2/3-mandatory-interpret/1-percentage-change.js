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

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Answers:
/*a) in total there are 5 function calls in the file:
carPrice.replaceAll(",", "")
Number(carPrice.replaceAll(",", ""))
priceAfterOneYear.replaceAll(",", "")
Number(priceAfterOneYear.replaceAll(",", ""))
console.log(...) */

/* b) The problem is on line 5. replaceAll is missing the comma between its
   two inputs, so JavaScript can’t read it properly. Once I add the comma,
   the function works normally. correct version (priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));*/

/* c) The reassignment statements are:
-carPrice = Number(carPrice.replaceAll(",", ""));
-priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); */

/* d) The variable declaration are:
-let carPrice = "10,000";
-let priceAfterOneYear = "8,543";
-const priceDifference = carPrice - priceAfterOneYear;
-const percentageChange = (priceDifference / carPrice) * 100; */

/* e) the expression Number(carPrice.replaceAll(",",""))  removes the commas from the price string
 and then converts it into a number. This is done so the price can be used in 
 calculations like subtraction and division. */
