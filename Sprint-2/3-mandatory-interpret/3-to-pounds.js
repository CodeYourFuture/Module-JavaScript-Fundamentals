const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0, penceString.length - 1);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);


const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0): sets penceStringWithoutTRailingP = 399.0 - penceString -1 = 39
// 3. const paddedPenceNumberString - ensures the figure is 3 characters to taking us back to 399
// 4 const pounds - removes 2 characters from the amount = 3
// 5. const pence - adds the amount by 2 characters taking us back to either 39 or 99
// 6. console displays the figures in pounds and pence = 3.99
// CN - added comment to have a clean commit