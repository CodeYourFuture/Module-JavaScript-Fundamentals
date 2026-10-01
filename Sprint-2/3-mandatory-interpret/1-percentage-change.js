let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);
// a) There are 5 function calls.
// carPrice.replaceAll(",", "")
// Number(carPrice.replaceAll(",", ""))
// priceAfterOneYear.replaceAll(",", "")
// Number(priceAfterOneYear.replaceAll(",", ""))
// console.log(`The percentage change is ${percentageChange}`)

// b) The error is on line 5 because there is a missing comma between "," and "".
// It should be replaceAll(",", "").

// c) The variable reassignment statements are:
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) The variable declarations are:
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// e) Number(carPrice.replaceAll(",", "")) removes the comma from the carPrice string
// and then converts the result from a string into a number.