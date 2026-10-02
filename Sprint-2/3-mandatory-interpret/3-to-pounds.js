//declaring a variable with the value of "399p"
const penceString = "399p";

//the .substring is removing the "p" from the value of penceString by taking the total length of the subString "4" - 1 = 3, by stripping the "p" leaving only 399
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// padStart is creating a pad for the output by giving it an extra "0" if the value is less than £1
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

//The .substring is removing the "99" from the value of .penceStringWithoutTrailingP by taking the total length of the .penceStringWithoutTrailingP "3" - 2 = 1 by stripping the "99" leaving only the 3
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// the .substring is doing the same as the "pound" variable declared in now line 14, by grabbing the last 2 characters "99" except it is ending the pad as safeguard to always ensure that two digits remain 
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

  // console.log is using template literals to combine the currency symbol, pound string decimal point and pence string. Giving us an output of £3.99
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
