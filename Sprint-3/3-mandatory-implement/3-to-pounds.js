// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.

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


// You will need to declare a function called toPounds with an appropriately named parameter.

function toPounds(penceString) {
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

  return `£${pounds}.${pence}`;
}

// You should call this function a number of times to check it works for different inputs

console.log(toPounds("399p")); // Output: £3.99
console.log(toPounds("5p"));   // Output: £0.05
console.log(toPounds("1234p")); // Output: £12.34
console.log(toPounds("0p"));    // Output: £0.00


