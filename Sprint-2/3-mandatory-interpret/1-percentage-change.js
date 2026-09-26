let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* there has five function in line 4 and  and console . log also has one 
line 4 and 5 has two Number() function
line 4 and 5 has two replaceALL() function
line 10 has one console . log ()

/* b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
   In line five error shown in replaceAll("," "")); missing comma before last two comma(",","").

/* c) Identify all the lines that are variable reassignment statements
line 4 carPrice = Number(carPrice.replaceAll(",", ""));
line 5 priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
As per the carPrice and priceAfterOneYear has been declared in line 1 and 2 by using let variable.

/*d) Identify all the lines that are variable declarations
line 1 let carPrice = "10,000";
line 2 let priceAfterOneYear = "8,543";
line 7 const priceDifference = carPrice - priceAfterOneYear;
line 8 const percentageChange = (priceDifference / carPrice) * 100;

/* e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
replaceALL throwout all the commas from the string and number became numerical value.
