let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);




        // There are two function calls. line 4 and 5
        //The error is coming from the line 5, because there was no comma in the replaceAll() method .
        // line 4 and 5 are the variable reassignment statments.
        // line 1 ,2 ,7 and 8 are lines where variable declarions happened
         // the method .replaceAll is replacing the coma (,) in the 10,000 and throws it 10000, the number function converts it into a number.