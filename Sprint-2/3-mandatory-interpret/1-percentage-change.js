let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// there are 5 function calls 
//carPrice.replaceAll(",", "")
//Number(carPrice.replaceAll(",", ""))
//priceAfterOneYear.replaceAll(",", "")
//Number(priceAfterOneYear.replaceAll(",", ""))
//console.log(`The percentage change is ${percentageChange}`)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// c) Identify all the lines that are variable reassignment statements
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); missing a comma between the two arguments of replaceAll()


// d) Identify all the lines that are variable declarations
// let carPrice = "10,000";
//let priceAfterOneYear = "8,543";
//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//carPrice.replaceAll(",", ""), "10,000" and removes the comma:"10000"
//Number("10000") converts the string "10000" into the number:10000
//So the whole expression:Number(carPrice.replaceAll(",", ""))converts "10,000"
//from a string containing a comma into the actual number 10000.
//"10,000"
  // ↓
//remove ","
  // ↓
// //"10000"
//    ↓
// convert to Number
//    ↓
// 10000