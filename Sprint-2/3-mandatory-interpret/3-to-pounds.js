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
// 2. Removes the trailing "p" from penceString, changing "399p" to "399".
// 3. Pads the pence string with leading zeros so it has at least 3 characters.
// 4. Extracts all digits except the last two to get the pounds part of the price.
// 5. Extracts the last two digits to get the pence part and ensures it has two digits.
// 6. Formats the pounds and pence as a price and prints it to the console.
