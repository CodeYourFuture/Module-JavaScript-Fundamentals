const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1,
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2,
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representindng a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// const penceString = "399p": initialises a string variable with the value "399p"
// 1. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): creates a new string variable that removes the last character "p" from the original string
// 2. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): creates a new string variable that pads the original string with leading zeros to make it 3 characters long
// 3. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts the pounds portion of the string by taking all characters except the last two
// 4. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): extracts the pence portion of the string by taking the last two characters and pads it with trailing zeros to make it 2 characters long
// 5. console.log(`£${pounds}.${pence}`): outputs the final formatted price in pounds and pence to the console
