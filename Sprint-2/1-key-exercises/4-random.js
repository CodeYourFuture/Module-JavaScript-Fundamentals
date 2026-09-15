const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// Answer: num is a random number between 1 and 100, including 1 and 100. So if I change the values of minimum
// and maximum it will be a random value between them, including them.
 
// Math.random generates a random value between 0 and 1, including 0 but not 1.

// (maximum - minimum + 1) gives the amounts of values we want to be able to generate.
// If minimum was 60 and maximum was 70, inclusive, that would make 11 possible values

// Math.random * (maximum - minimum + 1) would generate any value between 0 and 11, including 0 but not 11

// Math.floor rounds the value down, leaving us with any value between 0 and 10 inclusive

// + minimum at the end, 60 in our thought experiment, makes the values range between 60 and 70 inclusive
// which is what we wanted.
