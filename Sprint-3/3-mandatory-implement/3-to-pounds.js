// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  const withoutP = penceString.slice(0, -1);

  const padded = withoutP.padStart(3, "0");

  const pounds = padded.slice(0, -2);
  const pence = padded.slice(-2);

  return `£${pounds}.${pence}`;
}

console.log(toPounds("399p"));
console.log(toPounds("45p"));
console.log(toPounds("5p"));
