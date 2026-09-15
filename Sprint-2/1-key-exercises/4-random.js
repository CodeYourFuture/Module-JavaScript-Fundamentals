const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
/*
Firstly its not running as it is showing as undefined as it is lacking something like console.log
After adding console.log(num) and running it a few times I get 62, 45, 35, 10. 
For what it is doing: Math.floor is the sum of a random number from 0 to 0.9999... which is then multiplied by the maxium - minimun + 1, so 100 - 1 + 1.
    That gives a number from 0-99, then then adds the minimun which is 1, so that gives a random number from 1-100.
*/