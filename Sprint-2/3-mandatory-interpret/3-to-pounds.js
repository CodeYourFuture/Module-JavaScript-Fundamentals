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

// 3. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1): 
// Takes the characters from index 0 up to (but not including) the last character.
// penceString.length is 4, so this is substring(0,3), resulting in "399". 
// The purpose is to remove the "p" so only digits remain.

// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0")
// Adds "0"s to the start until the string is at least 3 characters long.
// The purpose is to guarantee at least one digit for pounds and two digits for pence.

// 9. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
// The purpose is to make the pounds all the digits before the last two, by taking everything except the last two characters: substring(0,1), giving "3"

// 14. const pence = paddedPenceNumberString .substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// substring(1) takes from index 1 to the end, giving "99".
// padEnd(2, "0") adds "0"s to the end until it is two characters long, so "99" stays "99".
// The purpose is too ensure the pence are always the last two digits.
// The padEnd does not change anything here since line 8 already guarantees at leas 3 characters, so the last two characters always exist.

// 18. console.log(`£${pounds}.${pence}`);
// Call function using a template literal to combine "£", the pounds, a ".", and the pence, then prints "£3.99".




