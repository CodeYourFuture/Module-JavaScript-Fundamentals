// Predict and explain first...

// Predict the output of the following code:
// here we have a constant variable called num which stores the number 103 we then have declared the  function getLastDigit which has an empty parameter we are then asking it to return the value stored inside num and apply the .toString method to it which turns the number 103 into a string "103" we are then taking "103" and applying the .slice method to it which will start from position -1 and return everything after it which leaves us with the string "3" then outside of the function, the function getLastDigit is being called 3 times in template literal using console.log with the arguments 42, 105 and 806 but because the variable num = "3" it will print the template literal with the "3" in the console when javascript gets to the function call for each value, which isn't the expected result.

//const num = 103;

//function getLastDigit() {
//return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// output: The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
// Explain why the output is the way it is
// the console output prints this because the the methods have only been applied to the number stored in the num variable so javascript isn't able to access the numbers passed in when the function is called in the template literal as the function getLastDigit() has no parameter so it passes in the value stored in the num variable which is "3" and so every time the function is called "3" is returned.
// Finally, correct the code to fix the problem
function getLastDigit(num) {
  let getLastDigitResult = num.toString().slice(-1);
  return getLastDigitResult;
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
