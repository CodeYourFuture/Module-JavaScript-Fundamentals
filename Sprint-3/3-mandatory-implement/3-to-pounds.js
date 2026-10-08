// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  // Remove the trailing "p", e.g. "399p" -> "399"
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1,
  );

  // Pad with zeros so there is always at least one pounds digit and two pence digits
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // Everything except the last two digits is pounds
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2,
  );

  // The last two digits are pence
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}

console.log(toPounds("399p")); // £3.99
console.log(toPounds("5p")); // £0.05
console.log(toPounds("50p")); // £0.50
console.log(toPounds("12345p")); // £123.45