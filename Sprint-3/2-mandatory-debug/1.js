// Predict and explain first...
//  =============> write your prediction here
// There is no value between the return keyword and the semicolon.
// The log statement will print "The sum of 10 and 32 is undefined"

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// When we use the return keyword, the function will stop executing and return the value that directly follows the return keyword.
// We tell JS to EXIT this function, taking with it the value we have defined as the return value.
// Nothing after the return keyword will be executed. The rest of the code is unreachable.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
