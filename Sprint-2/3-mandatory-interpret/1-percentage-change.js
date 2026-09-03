let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//1-carPrice.replaceAll(",", "") in line 4
//3-Number(...) in line 4 - enumerate the first result of replaceAll
//2-priceAfterOneYear.replaceAll("," ,"")) in line 5
//4-Number(...) in line 5 - enumerate the second result of replaceAll
//5-console.log(..) - line 9

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// the error is : a syntax error coming from the missing comma in line 5 between the arguments 

// c) Identify all the lines that are variable reassignment statements
/* const priceDifference = carPrice - priceAfterOneYear;  Line 7
 const percentageChange = (priceDifference / carPrice) * 100;  Line 8
*/

// d) Identify all the lines that are variable declarations
/* carPrice = Number(carPrice.replaceAll(",", ""));  Line 4
 priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));  Line 5
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* the number function convert the enumerate a string to a number and the method replaceAll replace ever comma with a space
 the purpose is to clean the value so that it can be converted to a proper number using Number().
 */