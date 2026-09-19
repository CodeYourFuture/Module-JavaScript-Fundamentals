let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
There are five function calls in this file. The lines where function calls are made are:
1. Line 4: carPrice.replaceAll(",", "")
2. Line 5: priceAfterOneYear.replaceAll(",", "")
3. Line 7: Number(carPrice.replaceAll(",", ""))
4. Line 8: Number(priceAfterOneYear.replaceAll(",", ""))
5. Line 10: console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

The error is occurring on line 5 because the "," character was ommited in the replaceAll function, to fix the problem,
 we need to include the "," character in the replaceAll function like this: priceAfterOneYear.replaceAll(",", "")

// c) Identify all the lines that are variable reassignment statements

The lines that are variable reassignment statements are:
1. Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
2. Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
The lines that are variable declarations are:
1. Line 1: let carPrice = "10,000";
2. Line 2: let priceAfterOneYear = "8,543";
3. Line 6: const priceDifference = carPrice - priceAfterOneYear;
4. Line 7: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
The expression "Number(carPrice.replaceAll(",", ""))" is performing two main operations:
1. "carPrice.replaceAll(",", "")": This part of the expression removes all commas from the string representation of
"carPrice". For example, it converts "10,000" to "10000".
2. "Number(priceAfterOneYear.replaceAll(",", ""));": This part converts the resulting string (after removing commas) 
into a numeric value. The purpose of this expression is to convert the string representation of a number that 
may contain commas into an actual numeric value that can be used for mathematical calculations.
