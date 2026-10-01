const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// remove the p from the "399p" and make "399"
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// padStart(3, "0") adds "0" at the start until the string is 3 characters long
//Because we have to convert pound and pence.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// In this we store the first index number into pound and remaining other should be removed. for example, 399 we stored the 3 into Pounds variables and remaining 99 should be removed because the substring start from 0 index to length-2.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  // At last we get the last two characters as the pence and first one or index 0 is removed .
  // In this, padEnd add extra until its reach to target. In this its add 2 character .
  

console.log(`£${pounds}.${pence}`);
//We can display the price of pound and pence like £3.99.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
