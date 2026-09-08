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
// 2. penceString.substring(0, penceString.length - 1): Removes the final character ("p") from the string.
// 3. padStart(3, "0"): Makes sure the number contains at least 3 characters. If it has fewer than 3 characters, zeros are added to the beginning.
// 4. substring(0, paddedPenceNumberString.length - 2): Gets everything except the final two characters. The final two characters represent the pence.
// 5. substring(paddedPenceNumberString.length - 2): Gets the final two characters of the string.
// 6. console.log(...): Combines the pounds and pence into a price format.
