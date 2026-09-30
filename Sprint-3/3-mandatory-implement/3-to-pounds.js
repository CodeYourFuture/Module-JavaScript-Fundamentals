// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(pence) {
  // Store pence value with pence on the end and make sure its at least 3 characters long add 0 at start if needed.
  const penceWithoutTrailingP = pence
    .substring(0, pence.length - 1)
    .padStart(3, "0");
  // copy everything apart from the last two characters
  const poundsResult = penceWithoutTrailingP.substring(
    0,
    penceWithoutTrailingP.length - 2,
  );
  // start at  the last two characters and take everything from there to end and make sure that value is two characters long add 0 if needed
  const penceResult = penceWithoutTrailingP
    .substring(penceWithoutTrailingP.length - 2)
    .padEnd(2, "0");
  // return result of poundResult and penceResult in a template string
  return `£${poundsResult}.${penceResult}`;
}
//call function to see if works with different inputs
console.log(toPounds("399p"));
console.log(toPounds("1000p"));
console.log(toPounds("15000p"));
