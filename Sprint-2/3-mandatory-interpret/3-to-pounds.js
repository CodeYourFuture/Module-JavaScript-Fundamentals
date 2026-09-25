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

// 2. const penceStringWithoutTrailingP = ...: removes the final "p" from "399p", leaving "399"
// 3. padStart(3, "0"): makes sure the pence string has at least 3 characters by adding zeros to the beginning if needed.
// 4. const pounds = ...: takes all the characters except the last two, giving the pounds part of the price.
// 5. const pence = ...: takes the last two characters as the pence part and makes sure it has two characters.
// 6. console.log(`£${pounds}.${pence}`): displays the final price in pounds and pence format.