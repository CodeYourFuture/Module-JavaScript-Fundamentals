const penceString = "399p";
// Step 1: Remove the 'p' suffix
// We need to remove the 'p' to work with just the numerical part
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// Step 2: Make sure we have at least 3 digits
// We need 3 digits minimum because:
// - We need 2 digits for pence (e.g., "99")
// - We need at least 1 digit for pounds (e.g., "3")
// So "39p" becomes "039" so we can split correctly
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// Step 3: Extract pounds (all digits except last 2)
// The last 2 digits are always pence, everything before is pounds
// e.g., "399" -> "3" pounds
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// Step 4: Extract pence (last 2 digits)
// Always take exactly 2 digits for pence
// e.g., "399" -> "99" pence
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds
// It makes heavy use of substring to return new strings from the original string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
console.assert(penceString === "399p");
// 2. line 4 assigns to penceStringWithoutTrailingP the value of penceString with the last character removed
console.assert(penceStringWithoutTrailingP === "399");
// 3. line 13 assigns to paddedPenceNumberString the value of penceStringWithoutTrailingP with leading zeros added to make the string always 3 characters long
console.assert(paddedPenceNumberString === "399");
// This looks the same because 399 is already 3 characters
// but I tried changing the value of penceString to "39p" and the value of paddedPenceNumberString was "039"

// 4. line 18 assigns to pounds all characters of paddedPenceNumberString except the last two characters
// the last two characters are the pence value
console.assert(pounds === "3");

// 5. line 25 assigns to pence the last two characters of paddedPenceNumberString with trailing zeros added to make the string 2 characters long
console.assert(pence === "99");

// The final line logs the value of pounds and pence with a £ symbol and a . separator
console.assert(`£${pounds}.${pence}` === "£3.99");

// The program takes a string representing a price in pence and converts it to a string representing the price in pounds
// The padding works to normalise the string to always be at least 3 characters long
