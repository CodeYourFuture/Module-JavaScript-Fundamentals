let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // 5 times its been called:
    // 4 and 5 for Number and replaceAll
    // 10 for log

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // SyntaxError, its from  line 5 in replaceAll("," "")
    // its missing a , between the two arguments so it needs to be (",", "")

// c) Identify all the lines that are variable reassignment statements
    // There are two reassignment statements in lines 4 and 5

// d) Identify all the lines that are variable declarations
    // They are 1,2 and 7,8 
    
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // It is using Number to make the string into a number but in order to do that the string needs to contain numerical letters only.
    // So it then uses in the () to remove all of the , with nothing using the replaceAll function so that 10,000 becomes 10000