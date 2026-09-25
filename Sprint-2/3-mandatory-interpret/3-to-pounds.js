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
// 2. penceString.substring(0, penceString.length - 1): removes the final "p" character so only the digits remain
// 3. padStart(3, "0"): ensures the value has at least 3 characters by adding leading zeros if needed
// 4. pounds = the first part of the padded string, excluding the last two digits, so the whole pounds part is preserved
// 5. pence = the final two digits, padded to 2 characters, to keep a valid pence value
// 6. console.log(`£${pounds}.${pence}`): prints the formatted result as a pounds and pence string

// For "399p", the steps work like this:
// "399p" -> "399" -> "399" -> pounds = "3" and pence = "99" -> output "£3.99"
