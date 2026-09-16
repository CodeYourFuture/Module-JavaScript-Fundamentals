const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Solution
//- "num" represents a random whole number between 1 and 100.
//Break down of expression
//-Math.random: This generates a random decimal number between 0 and 1. It can return 0, but never reaches 1. (Example: 0.876).
//-(maximum - minimum + 1): 
// This expression can be simplified as (100 - 1 + 1), which equals 100. This tells the program how many possible whole numbers there are. There are 100 possibilities.
// The +1 is important as without it, we would only reach 99 possibilities, that is 0 - 99.
//-Math.random() * (maximum - minimum + 1):
// This function multiplies the random decimal by the range size. Since Math.random() represents numbers >=0 and <1, this expression produces value anywhere from 0 up to 100, excluding 100.
// Example to justify expression: 0.876 * 100 = 87.6 
//-Math.floor: This static method rounds down to the nearest whole number, discarding the decimal. This turns the continuous range into whole numbers, from 0 - 99.
// That is 87.6 becomes 87.
// + minimum: This shifts the whole range up by adding 1. So instead of landing on 0 - 99, we have 1 - 100.