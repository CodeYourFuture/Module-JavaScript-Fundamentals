// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//ok the issue is clear, const is used to initialise the variable num
//at the same time num supposed to take several inputs or change its inputs
//to get the last digit of each number. However, its declared before the function using const so its value can't be reassigned
//so I'm assuming its value will always be excuted in the calculation

//const num = 103;

//function getLastDigit() {
//return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
//Because num was declared as a constant value 103 , so the assigned value of num is 103

//so out output of the last digit will calculate num when the input is 103 only
//no matter how many numbers we include in the brackets, the excution of the function depend on the declared num value
//num is declared with const and has the value 103
//the solution is to declare num as a parameter inside the function
// Finally, correct the code to fix the problem
// ===========> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//because the declared declared variable num is assigned a constant value  103.
//the solution is to delete the loine before the function and declare num as a parameter inside the function
