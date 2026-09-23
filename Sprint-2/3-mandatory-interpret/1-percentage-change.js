let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
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

// Answer

// a) In this file we can say we have 5 function calls (2 function calls & 3 method calls to be specific) and they are in line 4, 5 and 10

// b) When we run the code the error is generating from line 5 and the reason is that when we pass more than 1 argument
// in a method we need to separate them with comma, but in line 5 there is no comma to separate the arguments
// we can fix it by adding a comma to separate the arguments

// c) Lines 4 and 5 are reassignment statements

// d) Lines 1, 2, 7 and 8 are variable declarations

// e) The expression Number(carPrice.replaceAll(",",""))
// 1. carPrice.replaceAll(",","") this method is removing the "," from the String variable carPrice by replacing the "," with empty String which is ""
// all left then is just the String digits without ","
// 2. Number("String digit without comma") and this function converts the String digit to number digit
// and finally  Number(carPrice.replaceAll(",","")) expression gives us number
