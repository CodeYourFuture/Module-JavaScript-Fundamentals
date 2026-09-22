const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// remove the p from the "399p" and make "399"
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//padStart() add characters to the starting of the string and provide 3 long characters.
//Because we have to convert pound and pence.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// we take out the 2 character and store the remaining part of the string as the pound.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  // At last we get the last two characters as the pence.

console.log(`£${pounds}.${pence}`);
//We can display the price of pound and pence like £3.99.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
