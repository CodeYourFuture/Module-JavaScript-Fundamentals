const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num is a variable declared to hold (being assigned) the value of the calculated result of the var minimum, var maximum and the Math.random() method
// This expression can be broken down in to    main steps
// 1. the inner parentheses (maximum - minimum + 1) is calculated because that is the inner most expression
// 2. then the Math.random() generates random number between 0 & 1 and multiply with the result of (maximum - minimum + 1)
// 3. then the Math.floor() rounds down the result of (Math.random() * (maximum - minimum + 1)) to the nearest whole number
// 4. finally the minimum is being added to the down rounded whole number and the variable num holds the value
// after running the program the value of num looks like this 51,8,85,8,99,21 random numbers between 1 & 100
