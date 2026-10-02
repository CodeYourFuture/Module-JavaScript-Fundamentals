// Predict and explain first...

// =============> write your prediction here
//The code will run and print the outcoome of (a * b), however it will have 2 outputs. 
// The first output is the console.log(a * b) and the second output will execute the console in line 11.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// console.log is use to print the instead osf return such that the return value can be called at the end.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

