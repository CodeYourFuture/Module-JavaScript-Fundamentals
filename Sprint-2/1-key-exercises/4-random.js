const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Num represents a random whole number between the value of 'minimum' (1) and 'maximum' (100)
//By creating a constant variable called 'num' and assigning it the value of the expression, we can generate a random number within the mentioned range. 

//When running the program we have to understand how the expression works:

//we have to work out the parentheses first, maximum - minimum + 1, which is equal to 100 - 1 + 1 = 100.
//so: Math.floor(Math.random() *100) + 1
// Math.floor is used 1 time and it happens before + minimum. Math.floor is used because when used Math.random() it produces a decimal number between 0 and 1.
//The code needs a whole number because we are trying to get a number between 1 and 100, this is where Math.floor comes () comes in and removes the decimal part.
//JavaScript works out  the expression inside Math.floor () first before + minimum. 
 //Math.random() produces a pseudo-random decimal number that is greater than or equal to 0 but less than 1.

 //Next, we need to multiply the result from Math.random() by 100. This may give us the result of a decimal between 0 and 100.
 //Next step is to use Math.floor() wich then rounds down the decimal number to the nearest whole integer. This then means that the result will be a whole number between 0 and 99.
//But we want 1-100, so we add 1 to the result of Math.floor() this then changes the range to be inclusive of 1 and 100.
//Therefore, the final result of num will be a random whole number between 1 and 100, inclusive.
