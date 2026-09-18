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


// 1. const penceString = "399p"
// Initialises a string variable with the value "399p"

// 2. penceString.substring(0, penceString.length - 1)
// Removes the final "p", leaving "399"

// 3. penceStringWithoutTrailingP.padStart(3, "0")
// Makes the string 3 characters long by adding "0" at the beginning if needed.

// 4. paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2)
// Takes everything except the final two characters to get the pounds

// 5. paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0")
// Takes the final two characters to get the pence and adds "0" at the end if needed

// 6. console.log(`£${pounds}.${pence}`)
// Displays the price in pounds and pence, such as £3.99

