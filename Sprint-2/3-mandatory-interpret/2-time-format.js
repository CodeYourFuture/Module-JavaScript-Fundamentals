const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer



//Solution
// a) There are 6 declared variables in this program, all declared with 'const'
//   - const movieLength
//   - const remainingSeconds
//   - const totalMinutes
//   - const remainingMinutes
//   - const totalHours
//   - const result

// b) There is just 1 function call: console.log(result);

// c) In the expression 'movieLength % 60', '%' represents the remainder operator. It returns the value that of what is left over after dividing the left operand by the right operand as many whole times as possible.
//    Since movieLength = 8784, it means: 8784 % 60, which returns a result of 146 remainder 24.
//    Therefore, movieLength % 60 (8784 % 60) returns the leftover value '24'. In this context, the leftover represents the loose seconds that add up to a full minute.