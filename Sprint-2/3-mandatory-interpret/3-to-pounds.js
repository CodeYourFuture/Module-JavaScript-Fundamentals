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

// Line 3 to 6: declaring a new variable called penceSrtingWithoutTraiingP, then uses the .substring method to select indexes from 0, to penceString variable.length which gives us all 4 indexes. Then -1 to remove the p.

// Line 8: declare new variable, paddedPenceNumberString, which equates to penceStringWithoutTrailingP then using the .padStart method to specify string length and pad it if it is short of that length. it specifies target length as 3 and padding character as 0.

// Line 9 to 12: New variable declared called pounds, equates to paddedPenceNumberString then accessing substring method to create a new substring, from index 0 to length of paddedPenceNumberString which is 3 then -2 which makes it 1, which is the first index in the string: "3".

// Line 14 to 16: New variable declared called pence, equates to paddedPenceNumberString. The .substring method is used to create a new string, which is paddedPenceNumberString.length which is 3, the -2 which is 1. 
// because only one index is called, that being 1, the second index, this means that 1 and everything after it is included. 
// Then .padEnd method is used, which is the opposite of padStart, it pads the ending of the index in the case of string length being short of specified length. 2 is the length and 0 is the padding character, which is not needed in this case because string meets length.

//Line 18: console.log to see the result in terminal while using template lateral to include multiple variables. 
