let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    //   5 function calls
    // -Number(carPrice.replaceAll(",", ""))
    // -replaceAll(",", "")
    // -Number(priceAfterOneYear.replaceAll("," ""))
    // -replaceAll("," "")
    // -console.log(`The percentage change is ${percentageChange}`)
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // -Line 5
    // -missing ) after argument list
    // -why: replaceAll() needs two arguments separated by a comma.
    // -fix: by adding comma replaceAll(",", "")
// c) Identify all the lines that are variable reassignment statements
    //   line 4 and 5

// d) Identify all the lines that are variable declarations
    // line 1,2,7 and 8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // -First removing the comma "10,000"
    // -Second convert string into number 10000 