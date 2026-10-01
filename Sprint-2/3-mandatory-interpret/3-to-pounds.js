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

// 1. const penceString = "399p":
// Initialises a string variable with the value "399p".

// 2. penceString.substring(0, penceString.length - 1):
// Removes the last character "p" from the string.
// The result is "399".

// 3. penceStringWithoutTrailingP.padStart(3, "0"):
// Makes sure the string has at least 3 characters by adding "0" to the start if needed.
// "399" already has 3 characters, so it remains "399".

// 4. paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
// Takes everything except the last 2 characters.
// This gives us the pounds part of the price.
// The result is "3".

// 5. paddedPenceNumberString.substring(paddedPenceNumberString.length - 2):
// Takes the last 2 characters of the string.
// This gives us the pence part of the price.
// The result is "99".

// 6. .padEnd(2, "0"):
// Makes sure the pence part has 2 characters.

// 7. console.log(`£${pounds}.${pence}`):
// Combines the pounds and pence and prints the formatted price.
// The final output is £3.99.