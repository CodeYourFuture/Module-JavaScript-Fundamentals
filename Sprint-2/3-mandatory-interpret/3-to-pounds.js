const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1,
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2,
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// Step-by-step breakdown:
//const penceString = "399p"; creates a string containing the amount in pence, including the letter p.
/*const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1); 
 removes the final p so the string becomes "399".*/
/*const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 
makes sure the number has at least 3 characters by adding leading zeros if needed.*/
/*const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
 takes the part before the last 2 digits, which is the pounds value.*/
/*const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); 
takes the last 2 digits, which are the pence value, and makes sure they are 2 digits long.*/
/*console.log(`£${pounds}.${pence}`); prints the final money value in pounds format, like£3.99`.*/
