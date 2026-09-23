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
// 2. const penceStringWithoutTrailingP: from index 0, to length of string - 1 (4-1=3). (0,3) we get the string from index 0 to index 2 which removes the p at the end.
// 3. const paddedPenceNumberString: if length < 3, pad start of string with "0". since it is we just get 399.
// 4. const pounds: take string from index 0 to length of string - 2 (3-2=1). (0,1) we get the 1st index "3".
// 5. .substring(): length = 3. (3-2=1). (1,end of string). this gives us 99
// 6. .padEnd(): if previous length of string < 2: pad end with "0"
// 7. console.log() basically just prints pounds and pence as the proper format (£"pound"."pence") using string literals
// NB: padding is for a safety measure if the inputs were shorter.