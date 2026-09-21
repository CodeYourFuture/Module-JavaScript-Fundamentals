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
// 2. const penceStringWithoutTrailingP: uses substring to remove the trailing "p" from "399p", leaving "399"
// 3. const paddedPenceNumberString: padStart() makes sure the string has at least 3 characters, adding "0" if required. If we have "5p" and we remove the "p" we would be left with "5", so padding it to 3 numbers will give us the output ("005")
// const pounds:  removes everything except the final two digits, giving "3".
// 4. const pence = paddedPenceNumberString: extracts the final two digits, giving "99", and ensures they have at least two characters and adds zero if necessary.
// 5. console.log(`£${pounds}.${pence}`): combines the pound and pence values into the formatted price with the template literals to give "£3.99"
