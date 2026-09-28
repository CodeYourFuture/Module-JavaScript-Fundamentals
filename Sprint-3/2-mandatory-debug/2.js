// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Nothing is going to run properly because the function does not have any parameters.
// I think everything will get a syntax error

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// I was wrong in my prediction. Code runs.
// It says the last digit is 3 for every number which is wrong
// This is because we declared the var num = 103 globally, and it is affecting all the fucntion calls
// Because of the global declaration, every function call is going to use the global num 
// This is bad because the code is now taking in diferent parameters but returning a value based on one global value.
// TO fix this we remove the global var num.
// Then we add num as a parameter in the function :getLastDigit(num)

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
