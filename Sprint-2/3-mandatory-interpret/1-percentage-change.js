let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/*  Number() - line 4 and Line 5
    replaceAll() - Line 4 and Line 5
    console.log() - Line 10*/


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
   /* line 5 , There is a comma missing between "," and ""*/

// c) Identify all the lines that are variable reassignment statements
    /* Line 4 :carPrice = Number(carPrice.replaceAll(",", ""));
       Line5 : priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
       carPrice and priceAfterOneYear were already declared on Line 1 and 2 using let */

// d) Identify all the lines that are variable declarations
       /* Line 1 : let carPrice = "10,000";
          Line 2 : let priceAfterOneYear = "8,543";
          Line 7 : const priceDifference = carPrice - priceAfterOneYear;
          Line 8 : const percentageChange = (priceDifference / carPrice) * 100;*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
        /*replaceAll remove all the commas from the string and Number convert string  to the number*/ 