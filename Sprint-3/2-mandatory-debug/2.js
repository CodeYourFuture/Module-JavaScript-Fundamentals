// Predict and explain first...

// Predict the output of the following code:
// =============>  This function aims to return the number as a string using the toString method, and returns the last index in the string using the slice method with -1. the issue is that the number variable was declared outside the function as const, so the last digit will always be 3

const num = 103;

function getLastDigit() {
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
// Because the num variable was declared outside the function which returns num with the string methods accessed with it. The function also has no parameter to receive the value passed in the function.

// Finally, correct the code to fix the problem

function getLastDigit(num)  {
  return num.toString().slice(-1);
}

 
console.log(`The last digit of 42 is ${getLastDigit(42)}`);  
console.log(`The last digit of 105 is ${getLastDigit(105)}`); 
console.log(`The last digit of 806 is ${getLastDigit(806)}`); 


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The reason it was not working properly is because there was no parameter that can receive the value passed in the function, and so when the function is called it defaults to the num const variable in the global scope