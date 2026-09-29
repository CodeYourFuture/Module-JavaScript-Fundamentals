// Predict and explain first...
// Predict the output of the following code:
// =============> Write your prediction here
// Prediction: All three lines print "3" because getLastDigit has no parameter
// and always uses the outer const num = 103 (last digit 3). The arguments
// 42, 105, and 806 are ignored.


//const num = 103;

//function getLastDigit() {
//  return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// getLastDigit() does not declare a parameter, so the values passed in
// (42, 105, 806) are not available inside the function. It reads the
// global num (103) every time, so slice(-1) always returns "3".

// Finally, correct the code to fix the problem
// =============> write your new code here
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
