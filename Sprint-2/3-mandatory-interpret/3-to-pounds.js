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

//Answer:

// 1. const penceString = "399p"
//    Initialises a string variable with the value "399p"
//    (price written in pence, with a trailing "p").

// 2. penceString.substring(0, penceString.length - 1)
//    Removes the final character "p".
//    For "399p" this becomes "399".
//    Stored in penceStringWithoutTrailingP.

// 3. penceStringWithoutTrailingP.padStart(3, "0")
//    Ensures the string is at least 3 characters long by padding
//    with "0" on the left if needed.
//    "399" stays "399".
//    Example: "5" would become "005", "42" would become "042".
//    This makes it easier to always treat the last 2 digits as pence.

// 4. paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2)
//    Takes everything except the last 2 characters → the pounds part.
//    For "399" this is "3".

// 5. paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)
//    Takes only the last 2 characters → the pence part.
//    For "399" this is "99".

// 6. .padEnd(2, "0") on the pence part
//    Ensures pence is always 2 digits (adds "0" on the right if needed).
//    "99" stays "99".
//    Example: if pence were "5", it would become "50" with padEnd —
//    (note: for money, padStart is usually more common for the numeric part;
//    here the code uses padEnd as written).

// 7. console.log(`£${pounds}.${pence}`)
//    Prints the final price in pounds format.
//    For this input: £3.99