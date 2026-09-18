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

// 1. const penceString = "399p": Initialises a string variable with the value "399p" representing the price in pence including the trailing letter 'p'.

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): Extracts the numeric portion of the pence string by taking characters from index 0 up to (but not including) the last character, removing the 'p' ("399").

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): Ensures the pence string is at least 3 digits long by adding leading zeros if necessary (e.g., "5" becomes "005"), ensuring there are enough digits to extract both pounds and pence.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): Extracts the pounds portion of the price by taking all digits except the last two ("3").

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): Extracts the last two digits representing pence ("99") and ensures it is padded to 2 digits.

// 6. console.log(`£${pounds}.${pence}`): Formats and prints the final price string with the pound symbol, pounds amount, period, and pence amount ("£3.99").