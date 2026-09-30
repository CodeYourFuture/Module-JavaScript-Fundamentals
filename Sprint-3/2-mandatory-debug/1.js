// Predict and explain first...
//  =============> write your prediction here

// =============> Prediction: Calling sum(10, 32) will return 'undefined', so the console will output "The sum of 10 and 32 is undefined". This is because 'return;' terminates the statement immediately, leaving 'a + b;' as unreachable code.

//  =============> Prediction: The function will evaluate to 'The sum of 10 and 32 is undefined' because there is a semi-colon at the end of the return which ends the statement immediately, leaving 'a + b' with no way of reaching the return statement.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// =============> Explanation: When I run 'console.log(`The sum of 10 and 32 is ${sum(10, 32)}`)', I got this in my terminal 'The sum of 10 and 32 is undefined' because in JavaScript having a semi-colon at the end of a value tells the computer that this statement has ended, treating a + b; as a separate, un-returned statement. To fix this, the expression 'a + b' must sit on the exact same line as 'return'.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // output The sum of 10 and 32 is 42