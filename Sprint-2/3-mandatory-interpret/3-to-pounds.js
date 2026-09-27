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
// 2. const penceStringWithoutTrailingP = penceString.substring(
//  0,
//penceString.length - 1        :Removes the letter p from the end of the string.
//);
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); : Makes sure that the string has at least 3 characters by adding zeros at the beginning if required.

// // const pounds = paddedPenceNumberString.substring(
//  0,
// paddedPenceNumberString.length - 2     :This takes the first digit of the number in pence since 100 pence = 1 pound therefore coverting pence to pounds
// );

// const pence = paddedPenceNumberString
//  .substring(paddedPenceNumberString.length - 2): Takes the pence which is the 2 numbers after the 1st number and ensures that it is exactly 2 digits long.
//  .padEnd(2, "0");

// console.log(`£${pounds}.${pence}`);  : Prints the final output string  using the literal to combine currency symbol, pounds and the pence.