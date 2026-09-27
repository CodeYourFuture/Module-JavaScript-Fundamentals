const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num is a variable declared to hold (being assigned) the value of the calculated result of the var minimum,
// var maximum , the Math.random() method and Math.floor() method
// This expression can be broken down in to the following main steps
// 1. the inner parentheses (maximum - minimum + 1) is calculated because that is the inner most expression
// 2. then the Math.random() generates random number which is greater than or equal to 0 but less than 1  and multiply with the result of (maximum - minimum + 1)
// 3. then the Math.floor() rounds down the result of (Math.random() * (maximum - minimum + 1)) to the nearest whole number
// 4. finally the minimum is being added to the down rounded whole number and the variable num holds the value
// after running the program the value of num looks like this 51,8,85,8,99,21 random numbers that are greater than or equal to 1 but less than 100

// the expression maximum - minimum + 1 determines how many possible whole numbers can the random method generate
// and it affects the range by stretching it out to be exactly as wide as the total count of numbers we need.
// the + minimum at the end makes the starting point for our random numbers to be the value of the minimum instead of 0
