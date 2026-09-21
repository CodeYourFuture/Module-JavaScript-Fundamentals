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
// 2. const penceStringWithoutTrailingP = "399": returning with shorten less index to erase p
// 3. const paddedPenceNumberString = "399"; It pads the string with the given length with specific string.
// In this case, penceStringWithoutTrailingP (399) is already with 3 digis, so no change.
// 4. const pounds = "3", getting part of the string by subString and target to get the string without last 2 digis.
// 5. const pence = "99", subString indexStart counted by length of paddedPenceNumberString - 2 that is 1. So the result of
//subString is 99. padEnd result the string with given length from the end of String. "99" length is 2 and already match
//with the function. no change.
//6. console.log = £3.99. The number refer to pounds and pence.
