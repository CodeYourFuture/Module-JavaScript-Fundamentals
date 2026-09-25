// Predict and explain first...

// Predict the output of the following code:
//  ==============> write your prediction here
// I predict every call to getLastDigit will return the same result: "3",
// no matter what number is passed in. This is because the function doesn't
// take any parameters — it always uses the outer 'num' variable (103)
// instead of the value passed into the function call.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
//  ==============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
//  ==============> write your explanation here
// The function getLastDigit() is defined with no parameters, so the values
// 42, 105, and 806 passed into each call are simply ignored — they go
// nowhere. Instead, the