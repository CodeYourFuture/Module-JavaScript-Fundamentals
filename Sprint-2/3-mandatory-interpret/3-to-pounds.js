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
// 1. const penceString = "399p": initialises a string variable with the value "399p" representing the price in pence including the trailing letter 'p'
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): Extract the numeric portion of the penceString by taking characters from index 0 up to the last character removing the 'p'
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP . padStart(3, "0"): it ensures the penceString is at least 3 digits long by adding leading zeros if necessary
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): Extracts the pounds portion of the price by taking all digits except the last 2
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) padEnd(2, "0") it extracts the last 2 digits representing pence ensuring it is padded to 2 digits
// 6. line 18 = formats and prints the final price string with the pound symbol, amount, period and pence amount