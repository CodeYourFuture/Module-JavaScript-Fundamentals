// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

//I got some help from CoPilot in debugging some parts.
// hard one 

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

console.log(toPounds("399p"));

//This part we are removing the last character from a string. We are removing p from 399p

//,padStart(3, "0"); it means make sure the string is 3 chaeacter ,
// if not, add zero to the front
//substring(0)
//paddedPenceNumberString.length - 2 means take all except the last two characters

//why do we do this code line? because pence is the decimals in pound
//so first we take all except the last two digets, means we take the pound part

//here we are dealing with the pence or decimal part of the pound
//line 35, 36 mean we create a variable pence and assign it the last two digits of (paddedPrnceString)

//here we make sure the pence value is 2 digits, if not add zero to the end

//this part is the money format, we created a template literal to add the value of pounds to pence
//we seprate them with a dot
