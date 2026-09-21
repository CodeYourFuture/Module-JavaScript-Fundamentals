let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

The error is on this line:

There is a missing comma between "," and "".

priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

Final corrected code is going to be:

let carPrice = "10,000";
let priceAfterOneYear = "8,543";
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;
console.log(`The percentage change is ${percentageChange}`);
