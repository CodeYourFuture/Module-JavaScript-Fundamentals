const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?It gives us a random number between 1-100
// Try breaking down the expression and using documentation to explain what it means
 //Math.random gives us a random number between 0-1 and the next parantecec returns 100
//after that we multiple these two given values between 0-100 and the floor methode rounds down the given value
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
