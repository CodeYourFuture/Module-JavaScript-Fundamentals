// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// The last digit of 42 is 3 undefined
// The last digit of 105 is 3 undefined
// The last digit of 806 is 3 undefined

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here

// Because the function is not given a parameter and it is being passed an argument the same time which it ignores. 
// The function uses the global variable num instead and print 3

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

// The reason was the num variable wasn't declared as a parameter inside the function. 
// At the same time the function is receiving arguments which the function ignores.