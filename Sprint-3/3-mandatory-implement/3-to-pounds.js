// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(penceString) {
  const pence = Number(penceString.replace("p", ""));
  return `£${(pence / 100).toFixed(2)}`;
}

console.log(toPounds("399p"));
console.log(toPounds("5p"));
console.log(toPounds("50p"));
console.log(toPounds("1250p"));
console.log(toPounds("0p"));