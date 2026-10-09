// Predict and explain first...
//  =============> write your prediction here
//ok, I predict a syntaxError: a and b are not identified, and I think this because
//because the use of return function, I haven't encountered a similar case but I think it has to do
//with what the return function do, it returns the values of the parameters so
//so when a and b are used there is an issue happining but I can't say what because I don't have the information
//function sum(a, b) {
//return;
//a + b;

//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//ok I see this error "The sum of 10 and 32 is undefined"
//I had to search what return do that cause this to be able to explain it correctly.
// this is my explaination before searching " I'm suspecting the error is caused by the return function returning the parameters values so when we use a + b; the program doesn't find what we are looking for because it was already returned"
//after searching I understand it caused becaused return means exiting the function , so line 10 will never be excuted

// Finally, correct the code to fix the problem
//the correction would be to include a + b inside return function so the value become identified
//  ===========> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
