// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// num is declared as a const variable of 103, this will give the same outcome because num is suppose to a placeholder not a number.
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// The output gives the same answer that is 3

// Explain why the output is the way it is
// The variable num was declared to a const number (103) instead of a placeholder therefore it cannot be changed
// Finally, correct the code to fix the problem
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// The const variable must be removed from the code. The computer reads that first and gives the same output for all console.log statements.
// A placeholder variable for num must be declared in the function parameter.