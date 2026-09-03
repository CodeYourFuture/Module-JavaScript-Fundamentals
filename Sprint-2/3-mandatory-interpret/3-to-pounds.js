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

// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1); reassigned a new value 
// using the method substring starting form the index 0 ="3" and ending with -1 exclusively meaning doesn't include 'p' 
// resulting with a numeric part of the price which is '399'

//3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// ensure the number in a 3 digits format by adding zeros minding the consistency of the formatting.

//4.const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
//extracts everything except the last two number to form the pound portion of the price

//5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//extracts the last two digits to form the pence portion of the price and the padEnd method ensure the number in a two digits format consistent 

//6.console.log(`£${pounds}.${pence}`);
//Combines everything into the final formatted price string. Result: £3.99
//basically the program will take the string "399p" and print out a string of "£3.99"