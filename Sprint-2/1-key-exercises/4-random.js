const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// (0.68 * 100 ) + 1
console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Answer: For calculations i utilised BODMAS formula solving numbers in brackets first, multiplication, subtraction and addition
// I used 0.68 for math.floor(random number) + 1
// Sum = 69
// 1.num represents a number which is an Integer that is greater or equal to 1
// 2.start by (maximum-minimum +1) which the output is 100
// 3.math.random()*100 returns random number between 0 and 100. Any random number less that 1 can be selected then multiplied by 100
// 4.math.floor() gives out the largest integer which is less than or equal to the given number which is a decimal
// The output is displayed in console log