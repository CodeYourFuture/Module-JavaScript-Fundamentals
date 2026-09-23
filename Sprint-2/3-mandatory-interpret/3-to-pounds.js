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
//const penceString = "399p"; creates a variable. This string represents a price in pence.
//We then count the variable penceString using index starting from 0 and ending at 3.
//.length tells us how many characters there are in a string which in this case its 4.
//Because we know penceString = 4 we have to then subtract 4-1=3.---> we have penceString.length-1 which then becomes 4 - 1 = 3.
//we are doing this so we can remove the final character.
//penceString.substring(0, 3) will give us "399"
//padStart() adds characters to the beginning of a string until it reaches a certain length, we asked for a length of 3.
//The final two characters represents pence and we are trying to get poundsright now.Because we have "399" and the last two digits represents pence and the character before that represents pounds.
//we are subtracting 2 because when using substringwe remove the part that belongs to pence, 3 | 99
//padEnd count at the position of the last two digits and take everything after that so we can get the right value for pence.
//here we are making sure that pence has 2 characters- this generally means that if the string does not add to 2 characters, add 0 to the end until its 2 characters Long
//console.log displays something in the console as the backticks create a template literal inside it we put our variables.
