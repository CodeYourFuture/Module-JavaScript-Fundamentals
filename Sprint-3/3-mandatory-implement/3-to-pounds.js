// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  if (penceString == "") {
    return "please put the amount";
  }
  const totalPence = parseInt(penceString, 10);
  const pounds = totalPence / 100;
  const formattedPound = pounds.toFixed(2);
  return "£" + formattedPound;
}

console.log(toPounds("1991p"));
console.log(toPounds("2020p"));
console.log(toPounds("399p"));
console.log(toPounds("69p"));
console.log(toPounds("00p  "));
console.log(toPounds(" 50p "));
console.log(toPounds("232423"));
console.log(toPounds(""));
