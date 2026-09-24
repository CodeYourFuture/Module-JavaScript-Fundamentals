const penceString = "399p"; // initialises a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1,
); // use .substring method to extract characters of numerical string, with zero indexing starting from first place of penceString, ending at one digit less than the length of penceString by method .length. Expecting value "399".

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//declares paddedPenceNumberString variable. To target the length of pence number string in three characters. If not, "0" will be added at the beginning of the string. Expecting value "399".
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2,
); //declares variable for pound. .substring method starting from first character, ending by trimming last two characters by method .length. Expecting value "3"

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); // declares variable for pence. The argument is paddedPenceNumberString.length - 2,
// which for "399" (length 3) evaluates to 1. So this returns .substring(1), giving the last two
// characters "99" — not a literal -2 argument.
// .padEnd method returns character length of two, if not, "0" will be added at the end of string, for examples "90". Here, expecting "99".

console.log(`£${pounds}.${pence}`); // Prints the return value by Template Literal with '£X.yz" format in console pane.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// Five Variables declared:
// penceString, penceStringWithoutTrailingP, paddedPenceNumberString,pound, pence
// Three methods used:
//.substring(), .padStart(), .padEnd() .log()
// One property used: .length
