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

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
/*
3-6. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1)
  This is taking penceString and removing the p from it so its just a string with the numerical letters only.

8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  This is taking penceStringWithoutTrailingP ensuring that the minimum length of the numerical string is at least 3 numbers.
  It is filling out with 0s from the front so if it was 3 it would have 003

9-12. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
  this is taking paddedPenceNumberString and removing the last 2 numerical numbers from the string/
  This takes the 399 and makes it 3


14-16. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
  This is taking paddedPenceNumberString and first reduces the length to the last 2 numbers in the string.
  It then uses padEnd to ensure that there is a at least two 00 if no numbers are present.

18. console.log(`£${pounds}.${pence}`);
  This shows the pounds and pence with a £ at the start and a . between them.
  making this show the pence to pounds as £3.99
*/