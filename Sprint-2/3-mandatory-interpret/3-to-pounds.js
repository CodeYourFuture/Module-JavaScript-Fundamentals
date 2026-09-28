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
// 2. const penceStringWithoutTrailingP  = penceString.substring(
 // 0,
 // penceString.length - 1
//);
//INITIALISES A STRING VARIABLE AND ASSIGN ITS VALUE USEING THE penceString.substring
// so what happins is penceString.substring is using the value from the application or calculation of (
  //0,
 // penceString.length - 1
//);
// we are tillING IT TO start from the first inex (0) and not to include index 3 which penceString.length than use the operator - to subtract 1
// we intialise a string variable const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); and assign its value to be
//const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//const pounds = paddedPenceNumberString.substring(
 // 0,
  //paddedPenceNumberString.length - 2
//);
// we assign the value to be starting with  MINUMUM LENGTH IS 3 CHARACTERS than if not ADD THE VALUE 0 TO THE BEGINNING
// we initialise a variable const pounds and assign its value to be the value from using paddedPenceNumberString.substring
//paddedPenceNumberString.substring value is found by starting from the first index WITH LENGTH 3 and ending with paddedPenceNumberString.length subtracted by the operator 2

// IN THIS LINE const pence = paddedPenceNumberString
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);
// we initialise a string variable and assign its value to be the paddedPenceNumberString variable with the value from using the substring method
// the substring method is calculated by using the length property or the value of paddedPenceNumberString subtracting it by 2 using operator -
// than using the method .padEnd to specify that if the length is not two add the value 0
// last we ask the console to print the values in pounds and pence