const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
//this function penceString.length-1 removes the last p from string so it values 3 because it contains 4 characters minues 1.
//penceString.substring(0, 3) and it takes the characters from position 0 up to, but not including, position 3.
//const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");This uses padStart() to make sure the string has at least 3 characters.
//const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//This line extracts the pounds part.

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
