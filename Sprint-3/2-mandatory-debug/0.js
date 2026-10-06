// Predict and explain first....

// Code will fail because a , b are not declared values or double function values=============> write your prediction here

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//The 2nd console log returned value value is undefined. I have added a return function to output the multiply value.
//The value returned by the function was undefined because the value hasn't been stored anywhere, and there's no return to return the value to the function call.

//Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  console.log(a * b);
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
