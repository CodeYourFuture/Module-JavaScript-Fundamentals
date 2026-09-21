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

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 3. penceStringWithoutTrailingP is created using substring() on penceString. The purpose is to remove the trailing "p"..
// 4. value for substring method to start from which is beginning of the string.
// 5. penceString variable uses argument of .length to -1 (p) from the value, 399p becomes 399.
// 6. substring method closure
// 8. paddedPenceNumberString uses padStart() to make the string at least 3 characters long, adding "0" at the beginning when needed.
// 9. pounds variable assigns paddedPenceNumberString that uses substring method which returns part of the string from the start of index.
//10. value for substring method which is beginning of the string.
//11. paddedPenceNumberString variable is using length argument and deduct 2 out of length of the string 399 become 3 as pounds.
//12. Closes the substring method.
//14. pence variable created from  paddedPenceNumberString
//15. substring method called which value of is in the parenthesis (variable length -2 characters)
//16. method padEnd is called that contains at least 2 character and adds 0 at the end if needed.
//18. we log £3.99 in the console.
