let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

a) 5 calls across 3 lines
b) error is on line 5, there's a missing comma between ',' and ""
c)reassignments on line 4 and 5
d) declarations on lines 1,2,7,8
e) carPrice starts as the string "10,000" — you can't do maths on that as-is, the comma would mess things up. So first, .replaceAll(",", "") strips out the comma, leaving "10000". Then Number(...) converts that string into an actual number, 10000, that you can subtract and divide like normal.