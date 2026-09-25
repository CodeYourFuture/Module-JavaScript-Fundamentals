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

//  3-6. substring(0, penceString.length - 1):
// the first argument is the start index, so 0 means the first character
// penceString.length is 4 because there are 4 characters, at indexes 0 to 3
// the second argument is the end index and it is exclusive, it stops just before that position
// length - 1 is 3, so it stops before index 3, dropping the "p" and leaving "399"

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






