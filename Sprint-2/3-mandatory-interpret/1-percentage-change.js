let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

//1. There are 5 function calls in line 4 , 5 and 10
//     * number()and the second one is .replaceAll() in line 4
//      * number() and the second one is .replaceAll()in line 4
//      * console.log()
// 2. The error is coming from the line 5, because there was no comma in the replaceAll() method .
// 3. line 4 and 5 are the variable reassignment statements.
// 4. line 1 ,2 ,7 and 8 are lines where variable declarations happened
// 5. *The method .replaceAll() in line 4 is replacing the coma (,) with nothing("") in the "10,000" and the output is "10000",
//     the number() function converts the string "10000" into a number.
//    *The method .replaceAll() in line 4 is replacing the coma(,) with nothing("") in the "8,543" and the output is "8543"
//        the number() function coverts the string "8543" into a number which is 8543.
