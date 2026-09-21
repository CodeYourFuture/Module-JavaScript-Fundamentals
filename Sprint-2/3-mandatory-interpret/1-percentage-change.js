let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/*
Solution to a)

There are 5 function calls in this file:
-------------|-----------------| --------|
        1    |  Number()       | line 4  |
        2    | replaceAll()    | line 4  |
        3    |  Number()       | line 5  |
        4    | replaceAll()    | line 5  |
        5    | console.log()   | line 10 |
------------------------------------------


*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/*
Solution to b)
 After running the code the terminal gives SyntaxError: missing ) after argument list BUT the actual error is not having a comma in line 5 in the replaceAll methode as it needs two arguments
 eplaceAll("," "") => should be eplaceAll("," , "")
*/
// c) Identify all the lines that are variable reassignment statements
/*
Solution to c)
Variable reassignment statements lines are:

line 4 : carPrice = Number(carPrice.replaceAll(",", ""));
line 5 : priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/

// d) Identify all the lines that are variable declarations
/*
 Solution to d)
 Variable declarations lines are:
  line 1 :let carPrice = "10,000";
  line 2 :let priceAfterOneYear = "8,543";
  line 7 :const priceDifference = carPrice - priceAfterOneYear;
c line 8 :const percentageChange = (priceDifference / carPrice) * 100;

*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/*
Solution to e)
The expresssion Number(carPrice.replaceAll(",","")) is removing the comma "," in CarPrice i.e from 10,000 to 10000 which is stored 
in String type , removing the comma will insure the mathimatical operation will go normal when converted to type Number.

*/
