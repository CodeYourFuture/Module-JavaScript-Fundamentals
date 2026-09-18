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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
//    substring(0, length - 1): is a method that is invoked in the paragraph above to take every character in the string provided except the last one, leaving out the 'p'
//    That is -> '399p' becomes '399'
//    const penceStringWithoutTrailingP: used to store the value from 'penceString.substring(...)'

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//    penceStringWithoutTrailingP is now '399'
//    padStart(3, "0") is a method used above which guarantees that the numeric string is at least 3 characters long, and if it is shorter add '0' to the front until it is 3 characters long.
//    padding to 3 ensures there is always at least one pounds digit and two pence digits. 
//    

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//    since paddedPenceNumberString is '399' and it's '.length' is 3
//    this line is saying: '399.substring(0, 3 - 2)', which becomes '399.substring(0, 1)'
//    'substring' is a method used to grab characters from a string, starting from the left, from position '0' up to, but not including, position '1'
//    'const pounds' would be assigned the new value: '3'

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//    since paddedPenceNumberString.length is '3'
//    then 'paddedPenceNumberString.substring(3 - 2)' becomes 'paddedPenceNumberString.substring(1)': this means grab everything from position '1' of the string to the end.
//    That is -> '399.substring(1)' becomes '99' 
//    '.padEnd(2, "0") is another method that ensures the string is at least 2 characters long and adding '0' to the end if it's too short.
//    'const pence' would be assigned the new value: '99'