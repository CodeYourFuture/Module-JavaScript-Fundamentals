let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below


// a) How many function calls are there in this file? Write down all the lines where a function call is made
//5 FUNCTION calls. Line 4, 5, 10.
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//The error is coming from line 5, column 61. Thhere is nothing seprating the two indexes. A comma can be used to seprate them.
// c) Identify all the lines that are variable reassignment statements
//Two lines 4 and 5
// d) Identify all the lines that are variable declarations
//four lines 1,2,7,8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//The replace.all method is used to include the car price and the price after one year of depreciation.
 //The purpose of the expression is to take the price string and search for every comma and replace it
 // we are saying replace this "," , with this "" and because of the empty string it means without a comma