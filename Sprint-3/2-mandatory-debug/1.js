// Predict and explain first...
//  =============> write your prediction here
//when the return line is executed, the function exits. a + b is a separate line because it
//is after the semicolon, so a + b is never reached and not returned. So line 11 will print
//The The sum of 10 and 32 is undefined

//function sum(a, b) {
//  return;
//  a + b;
//}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//It did as predicted, for the reason I expected
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
