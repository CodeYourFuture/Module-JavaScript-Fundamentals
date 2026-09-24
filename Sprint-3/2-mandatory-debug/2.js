// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The output will be the same because we don't give the function a parameter 

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); */

// Now run the code and compare the output to your prediction
// =============> write the output here
// The output is the same but the last digit is 3

// Explain why the output is the way it is
// =============> write your explanation here
// Because of the global variable and also because the function has no parameter


// Finally, correct the code to fix the problem
// =============> write your new code here

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// Because the function was using the global variable, it ignored the arguments passed to it outside of the function box 
