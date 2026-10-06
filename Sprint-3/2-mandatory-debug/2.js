// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//I think const being declared before function may cause a problem on returning num value (line 10)

function getLastDigit() {
  const num = 103;
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction.
// =============> write the output here
// My prediction was close regarding line 10 as the value of num is not returned.
// Explain why the output is the way it is
// =============> write your explanation here
// The code has returned 3 as the last digit for all provided numbers because num value is restricted to 103 as value and can't be used outside the function
// Also function getLastDigit() has no parameter set
// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// getLastDigit was no working as variable num was taking precedence
