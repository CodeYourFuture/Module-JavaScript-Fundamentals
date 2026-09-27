// In Sprint-1, there is a program written in 3-mandatory-interpret/3-to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString){
 let withOutP = penceString.substring( 0,penceString.length - 1);
 let paddedPenceNumberString = withOutP.padStart(3, "0");
 const pounds = paddedPenceNumberString.substring(0 ,paddedPenceNumberString.length - 2);
 const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
 return  `£${pounds}.${pence}`
} 


console.log(toPounds("502p"));
 

//output for 4050p is £40.50
//output for 29p is £0.29
//output for 502 is £5.02