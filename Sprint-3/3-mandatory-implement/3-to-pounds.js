// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(pence) {
  const pounds = Math.floor(pence / 100);
  const remainingPence = pence % 100;

  return `£${pounds}.${remainingPence.toString().padStart(2, "0")}`;
}

console.log(toPounds(399));
console.log(toPounds(100));
console.log(toPounds(1250));