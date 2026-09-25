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

1. const penceString = "399p": initialises a string variable holding the price in pence, written with a trailing "p" the way a price tag might show it.

2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): this chops off the last character of the string, removing the "p". substring(start, end) grabs everything from the start index up to (but not including) the end index, so here it takes everything except the final letter. "399p" becomes "399".

3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): this pads the string with leading zeros if it's shorter than 3 characters. For "399" nothing changes since it's already 3 digits. This step exists as a safety net for prices under 100p — for example "45p" would become "45" after step 2, and padStart would turn that into "045", guaranteeing there are always at least 3 digits to work with.

4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): this takes everything except the last 2 characters of the padded string. Since the last two digits always represent the pence, everything before them represents the pounds. For "399", this gives "3".

5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): this takes just the last 2 characters of the string (the pence portion), then pads the end with a zero if it's somehow shorter than 2 characters as a safety measure. For "399", this gives "99".

6. console.log(`£${pounds}.${pence}`): combines the pounds and pence pieces into a properly formatted currency string using a template literal, producing "£3.99".

