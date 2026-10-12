const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//First, const minimum and const maximum are variables
// = is the assignment operator
// what comes after = is what the variable will store
// * is a multiplication operator
//To understand what is going on, we need to understand what the floor and random methods do
// Math.floor rounds down what ever it has inside its parenthisis,
//and because math.random is inside the parenthises the calculation is performed first before we do any rounding.
//Also, once the rounding is done + minimum is added.so math.floor round down for example if the calculation give 4.9 it rounds to 4,
//than + minimum take that result and adds to it 1 making it 5

//done
