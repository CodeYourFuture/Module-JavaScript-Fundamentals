// Predict and explain first...
//  I predict that the code will run but it will print undefined because the return expression is not setup properly

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// When we run the code it printed out undefined because the return keyword is there but the expression that needs to be returned is not on the same line
// therefore the return keyword can't reach the expression and the expression is ignored because the function has done execution right after it reaches the return keyword

// Finally, correct the code to fix the problem
// Here is the fixed code

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
