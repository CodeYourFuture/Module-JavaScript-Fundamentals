//Creates a string that represents a price in pence (with a “p” at the end).
const penceString = "399p";

/*Removes the last character "p"
So "399p" becomes "399".*/
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

//Makes sure the number has at least 3 digits.
//If it's shorter, it adds leading zeros.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

//Takes everything except the last 2 digits.
//This becomes the pounds part.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

//Takes the last 2 digits as pence.
//If needed, it adds a trailing zero to make sure it always has 2 digits.
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

//Prints the final formatted price in pounds and pence format.
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
