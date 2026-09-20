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

// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
//     create a new variable and put the string without p

// 3.  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//     padStart() adds characters to the beginning of a string to make it 3 characters long.
//     because we need to convert it to pound and pence

// 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
//    We remove the last 2 characters and store the remaining part of the string as pounds.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//     Gets the last two characters as pence.”

// 6. console.log(`£${pounds}.${pence}`);
//.   Finally combine pound and pence
