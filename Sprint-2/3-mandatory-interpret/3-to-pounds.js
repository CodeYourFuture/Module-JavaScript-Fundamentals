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

// ─────────────────────────────────────────────────────────────
// STEP-BY-STEP BREAKDOWN:
//
// Line 1: const penceString = "399p";
//   Makes a variable that holds the price as text, with a "p" at the end
//   to show it's in pence.
//
// Lines 3-6: const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
//   Cuts off the "p" at the end. It takes the text from the start up to
//   (but not including) the last letter. Now we have "399".
//
// Line 8: const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//   Makes sure the text is at least 3 characters long. If it's shorter, it
//   adds "0" at the front. "399" is already 3 characters, so nothing changes.
//
// Lines 9-12: const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//   Takes everything except the last 2 characters. That's the pounds part.
//   For "399", this gives us "3".
//
// Lines 14-16: const pence = paddedPenceNumberString
//     .substring(paddedPenceNumberString.length - 2)
//     .padEnd(2, "0");
//   Takes the last 2 characters (that's the pence part). Then it makes sure
//   there are 2 characters by adding "0" at the end if needed. For "399",
//   this gives us "99".
//
// Line 18: console.log(`£${pounds}.${pence}`);
//   Prints the final price. The result is "£3.99".
//
// Why do we add extra "0"s (padding)?
//   So the price always looks right. Without it, a price like "5p" would
//   show up as "£0.5" (wrong) instead of "£0.05" (right).
// ─────────────────────────────────────────────────────────────