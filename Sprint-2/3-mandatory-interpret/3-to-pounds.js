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

// 2. const penceStringWithoutTrailingP = penceString.substring(
//  0,
//  penceString.length - 1
//);
// finds a substring starting at 0 index to 1 before the last index, and assigns the
// substring to penceStringWithoutTrailingP. This removes the p and leaves us with just
// the number

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Makes it so that the string is always at least 3 characters, by adding leading 0 until
// it is 3 characters long.

// 4. const pounds = paddedPenceNumberString.substring(
//  0,
//  paddedPenceNumberString.length - 2,
//);
// Finds the substring of number paddedPenceNumberString, with the last 2 digits cut off
// basically finds the number of pounds by cutting off the pence

// 5. const pence = paddedPenceNumberString
//  .substring(paddedPenceNumberString.length - 2)
//  .padEnd(2, "0");
// Takes the substring starting at the total length-2, to the end. Essentially taking the
// last 2 digits
// Then adds 0 to the end so it is at least 2 characters long

//6. console.log(`£${pounds}.${pence}`); prints the pound and pence variable
// in the format £pounds.pence
