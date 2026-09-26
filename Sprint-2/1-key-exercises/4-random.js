const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// Breakdown of the expression

// The order is inner brackets first, multiplication, Math.floor and then + minimum
// 1. maximum - minimum + 1 that is 100 - 1 + 1 = 100
// This gives the total number of possible values (1 to 100 = 100)

// 2. Math.random() is a random decimal between 0 and 1 but not including 1 like 0.7392..
//    Math.random()*(maximum - minimum +1) 
//    0.7392 * 100 = 73.92 

// 3. Math.floor(73.92) = 73 ,
//    it rounds down to the nearest whole number an integer from 0 to 99

// 4. + minimum will be 73 + 1 = 74
//    num represents random whole number between 1 and 100  

