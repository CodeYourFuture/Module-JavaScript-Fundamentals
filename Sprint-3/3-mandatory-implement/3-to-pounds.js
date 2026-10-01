// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

//Function name toPound
//identifier of prev code :
// 1 penceString - user input ; Type: String, count length by .length
// 2 penceStringWithoutTrailingP ; cut the tail p by .substring ()
// 3 paddedPenceNumberString ; assign and prescribe target length of pence in three characters length by .padStart()
// 4 pounds ; assign pounds from first character of paddedPenceNumberString, cut the last two character by .substring
// 5 pence ; assign pence starting from last two character of paddedPenceNumberString
// Parameter to name wholePenceStringWithP

function toPound(wholePenceStringWithP) {
  const penceStringWithoutTrailingP = wholePenceStringWithP.substring(
    0,
    wholePenceStringWithP.length - 1,
  );

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2,
  );

  const pence = paddedPenceNumberString.substring(
    paddedPenceNumberString.length - 2,
  );

  return `£${pounds}.${pence}`;
}
console.log(toPound("399p"));
console.log(toPound("1399p"));
console.log(toPound("99p"));
console.log(toPound("9p"));