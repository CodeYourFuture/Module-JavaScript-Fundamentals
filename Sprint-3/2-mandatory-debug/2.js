// Predict and explain first...

// Predict the output of the following code:
// ===========> I predict all three results will be 3 because the function always uses num, which is 103.

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// ============> The output is 3 for all three numbers.
// ============> The function ignores the numbers passed to it and always uses num, which is 103.
// =============> write your explanation here
// Finally, correct the code to fix the problem
// ============> Added num as a parameter so the function uses the number passed to it.

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
