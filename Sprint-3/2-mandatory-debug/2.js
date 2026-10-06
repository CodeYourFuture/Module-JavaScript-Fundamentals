// Predict and explain first...

// Predict the output of the following code:
// Prediction: I predict that the program will print 3 for all
// three numbers because the function always uses the value 103.

// =============> Write your prediction here

const num = 103;

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// Output after correction:
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6

// =============> write the output here

// Explanation: The original getLastDigit function did not have
// a parameter, so the numbers 42, 105, and 806 passed to the
// function were ignored. Instead, the function always used the
// global value 103, so it returned 3 every time.
//
// The corrected function has a parameter called number.
// This allows it to receive the number passed into the function.

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

// The function now receives a number as an argument and returns
// its last digit.