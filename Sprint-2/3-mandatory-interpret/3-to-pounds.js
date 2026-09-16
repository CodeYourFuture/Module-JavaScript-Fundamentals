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

1. const penceString = "399p" // Stores "399p" in a variable called penceString so the program can work with the price.
2. const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); // Removes the "p" from the end of "399p", leaving "399"
3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//Adds a "0" at the start if there are less than 3 digits.
4. const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2); //gets the digits before the last two to find the pounds.

5. const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); //gets the last two digits to find the pence.

6. console.log(`£${pounds}.${pence}`); //Combines the pounds and pence and print the final price as £3.99