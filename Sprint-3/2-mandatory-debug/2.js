// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I predict every line will say the last digit is 3, because the function
// ignores the number I pass in and always uses num = 103.



function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// This is called shadowing. Originally, getLastDigit had no parameter, so 
// the argument (e.g., 42) was ignored. Inside the function, 'num' referred to 
// the global constant 'num = 103', which is why it always returned "3".
// Finally, correct the code to fix the problem
// =============> write your new code here
// I added num as a parameter: function getLastDigit(num). Now num is the
// value I pass in, not the global num = 103.
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

console.log(getLastDigit(42));
console.log(getLastDigit(105));
console.log(getLastDigit(806));