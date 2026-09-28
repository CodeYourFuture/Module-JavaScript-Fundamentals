const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


//here starts my learning 

// first const minimun, const maximum are the variables 
// = the assignmen operator
// what comes after = is what the variable will store 
// Math.floor is a method and here we are telling it that its argument is to use the random method 
// and multiply the result before rounding with the maximum and minimum variables we created 
// * is a multiplication operator 
// to understand what is going on we need to understand what the floor and random methods do
//Math.floor (rounds down to the nearest whole number) and than pass it to Math.floor
// we are asking the program to round whatever result we have to the nearest whole number