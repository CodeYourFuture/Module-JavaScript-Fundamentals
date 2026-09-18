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

// Answers: In line 1, a variable "penceString" was created holding the value "399p"

// In line 3-6, Another variable "penceStringWithoutTrailingP" was created to remove the trainling "p". 
// That is, taking off the "p" in '399p' leaving it at just "399".

// Also, line 3-6 used the function substring(0, penceString.lrength - 1) to cut out the "p" in the "penceString" variable. 
// By starting count fron 0 (beginnning) of "399p".
// "Using penceString.lenght - 1" to check the length of the value in the variable penceString = "399p" (4),
//  And deducting 1 from the value (4 - 1), because length - 1 subtract 1 from the character/value count 4. leaving the value at "399"

// Line 8 a variable "paddedPenceNumberString" was created and a function padStart(3, "0") 
// was used to ensure the value of the variable remains at 3 and to be filled with "0" at the beginning if the value is less 3

// Line 9-12 created a variable "pounds" and used the subString(0, paddedPenceNumberString.length - 2 ) 
// to start count from 0 of the "penceStringWithoutTrailingP" value which is 399. 
// It further removed the last two number in the value by checking the length of the value with "paddedPenceNumberString.length" 
// And subtracting 2 (3 - 2), because length - 2 subtract 2 from the character/value count. Cutting out 99 and leaving the value to remain 3.

// Line 14-16 created a variable "pence", using the subString(paddedPenceNumberString.length - 2) 
// to check the length of the value of the variable "paddedPenceNumberString" which remain 399 from line 8
// The "substring(paddedPenceNumberString.length - 2)" function deducts 3 leaving the last two numbers 99 
// PadEnd(2, "0") ensure the value remains 2 and 0 to be added to value less than 2. 
// However, we already have in our "pence" variable at a value of 2 numbers "99"

// Line 18 printed our codes a formatted style adding the pound sign "£" 






