const minimum = 1; // Sets the lowest possible number that can be generated
const maximum = 100; // Sets the highest possible number that can be generated

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

/*
EXPLANATION IN ORDER OF EXECUTION (OPERATOR PRECEDENCE):

1. (maximum - minimum + 1) — Grouping Parentheses (Highest Precedence):
   Calculates the total number of possible whole values between minimum and maximum, inclusive (e.g., 100 - 1 + 1 = 100 possible values).

2. Math.random() — Function Call:
   Generates a random floating-point decimal from 0 up to (but not including) 1.

3. Math.random() * (maximum - minimum + 1) — Multiplication:
   calculates the total number of possible values between minimum and maximum, (but not including) 100 (e.g., 0 to 99.999...).

4. Math.floor(...) — Function Call:
   Rounds the decimal down to the nearest whole integer, converting the range from [0, 99.999...] to an integer from 0 to 99.

5. + minimum — Addition (Lowest Precedence):
   Shifts the whole set of numbers up so that the lowest outcome becomes `minimum` (1) instead of 0, resulting in a whole number between 1 and 100 inclusive.
*/

// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num); // num represents a random whole number between 1 and 100 inclusive