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
// 1. const penceString = "399p": Initialises a string variable with the value "399p".
// 2. const penceStringWithoutTrailingP: Uses substring() to remove the trailing "p" from "399p", leaving "399".
// 3. const paddedPenceNumberString: Uses padStart() to ensure the string is at least 3 digits long by adding leading "0"s if needed (e.g., "5" becomes "005"), ensuring there are enough digits to extract both pounds and pence.
// 4. const pounds: Uses substring() to remove/discard the final two digits (which represent the pence) and keep everything before them, extracting the whole pounds value ("3").
// 5. const pence: Uses substring() to extract only the final two digits ("99") for the pence value, using padEnd() as a safeguard to keep it at two digits.
// 6. console.log(`£${pounds}.${pence}`): Uses template literals to format and display the final price string ("£3.99").
