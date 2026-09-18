let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
       // There are two function calls. line 4 and 5
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
        //The error iscoming from the line 5, because there was no comma in the replaceAll method .
// c) Identify all the lines that are variable reassignment statements
         // line 4 and 5 are the variable reassignment statments.

// d) Identify all the lines that are variable declarations
          // line 1 ,2 ,7 and 8 are lines where variable declarions happened

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
         // the method .replaceAll is replacing the , in the 10,000 and throws it 10000, the number function will convert it into a number.