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
// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 3-6. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// : initializes a variable, the value of which is turned to numerical by removing the letter "p".
// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Here the padstart function turns "399" string into 399 number (it could add some zeroes in front, but here it serves as a converter)
// 9-12. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// Here the goal is to initialize a variable of Pounds (with the value of 3), by splitting it from 99, and it's done using the substring method
// 14-16. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// Here the pence variable is introduced with the value of 99 and it's done by taking the 399 and removing 3 using substring and padEnd methods.
