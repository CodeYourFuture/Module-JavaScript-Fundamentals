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

// Answer

// penceString = "399p" — stores the price as a string

// penceStringWithoutTrailingP — removes the final "p", giving "399"

// paddedPenceNumberString — adds leading zeros if necessary so the string has at least 3 digits.

// pounds — takes all the characters except the last two, giving "3"

// pence — takes the last two characters, giving "99", and ensures there are two digits

// console.log — combines the pounds and pence and displays £3.99