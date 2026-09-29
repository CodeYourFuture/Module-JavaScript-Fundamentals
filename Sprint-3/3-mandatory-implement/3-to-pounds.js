// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
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

  return `£${pounds}.${pence}`;
}

// results of some different inputs: 0p -> £0.00, 3p -> £0.03, 50p -> £0.50, 170p -> £1.70, 1200p -> £12.00, 11000p -> £110.00
console.log(toPounds("0p"));
console.log(toPounds("3p"));
console.log(toPounds("50p"));
console.log(toPounds("170p"));
console.log(toPounds("1200p"));
console.log(toPounds("11000p"));
