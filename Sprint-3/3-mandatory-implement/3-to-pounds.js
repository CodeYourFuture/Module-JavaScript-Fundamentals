// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPound(priceInPence) {
  const penceDigits = priceInPence
    .substring(0, priceInPence.length - 1)
    .padStart(3, "0");

  const poundsPart = penceDigits.substring(0, penceDigits.length - 2);

  const pencePart = penceDigits.substring(penceDigits.length - 2);

  return `£${poundsPart}.${pencePart}`;
}
console.log(toPound("399p"));
