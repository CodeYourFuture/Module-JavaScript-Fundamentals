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
//3. we are defining  a new variable without the currency at the end that takes a sub string function  from the penceString
//4. the substring starts from index 0
//5.until lenth of string -1 brfore last character
//8.  adds 0 char to the beginning of string until length is 3
//9-11 Extracts a substring starting from the beginning of the string and stopping exactly 2 characters from the end
//14-16 Extracts only the last two characters of the string. The .padEnd(2, "0") appends zeros to the right if the resulting string is somehow shorter than 2 characters
//18 Uses a template literal to insert the pounds and pence variables into a new string, formatted with a pound symbol and a decimal point, and prints it to the console