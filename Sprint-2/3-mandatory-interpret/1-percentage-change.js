let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice.toInt() - priceAfterOneYear.toInt();
const percentageChange = (priceDifference.toInt() / carPrice.toInt()) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//2
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//maybe the function is doing mathematical operations to string, there wasnt a comma for the second replace function
// c) Identify all the lines that are variable reassignment statements
//4
// d) Identify all the lines that are variable declarations
//2
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//it is removing all the commas and replacing it with an empty space, to make calculations easier