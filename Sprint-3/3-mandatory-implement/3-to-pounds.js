// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(str) {
    let penceStringWithoutTrailingP = str.substring(0, str.length - 1);

    let paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    let pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

    let pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

    console.log(`£${pounds}.${pence}`);
}

toPounds("5045p")