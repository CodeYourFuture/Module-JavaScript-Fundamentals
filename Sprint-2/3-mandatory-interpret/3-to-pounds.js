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
//this function penceString.length-1 removes the last p from string so it values 3 because it contains 4 characters minues 1.
//penceString.substring(0, 3) and it takes the characters from position 0 up to, but not including, position 3.
//const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");This uses padStart() to make sure the string has at least 3 characters.
//padStart() adds characters to the begining of a string to make it 3 character long.

//const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// we remove the last two characters and stores the remaining part of the string as pounds.
//This line extracts the pounds part.
//line14:penceString = "399p"

//paddedPenceNumberString is "399".
//The substring() takes the last two characters as pence., so:"399" → "99"
//Then .padEnd(2, "0") checks the string is at least 2 characters long. If it already has 2 characters, like "99", without changing the rest.
//padEnd(2, "0") adds "0" to the end of the string until it reaches a length of 2.
//finally line 18 combines pound and pence which is £3.99

