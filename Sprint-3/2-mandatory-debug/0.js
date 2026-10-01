// Predict and explain first...

// =============> Undefined at the end of sentence. console.log in local function will result the product. But console.log in global scope will not call function multiply.

//function multiply(a, b) {
//  console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> The function multiply does not really carry out the multiplication. It only logs the result of a*b. That's why calling multiply become undefined.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
