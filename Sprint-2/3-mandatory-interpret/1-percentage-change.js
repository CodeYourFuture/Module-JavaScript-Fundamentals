let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 5 function calls: Number(...), replaceAll(",", ""), replaceAll("," ""), Number(...), console.log(...)
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is occurring on line 5 because there is a missing comma in the replaceAll method. The correct syntax should be replaceAll(",", "").
// c) Identify all the lines that are variable reassignment statements
// 2 variable reassignment statements: line 4 and line 5
// d) Identify all the lines that are variable declarations
// 4 variable declarations: line 1, line 2, line 7, line 8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",", "")) is first using the replaceAll method to remove all commas from the carPrice string, resulting in a string that represents a number without any formatting. Then, the Number function is used to convert that string into a numeric value. The purpose of this expression is to convert the formatted string representation of the car price into a usable numeric value for calculations.