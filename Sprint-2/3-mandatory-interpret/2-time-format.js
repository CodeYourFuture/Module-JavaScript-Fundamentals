const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// A: 6

// b) How many function calls are there?
//A: 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % operate the remainder of 2 numbers divided. In this case, remainingSecond is the remainder of  8784 second (movieLength)
// divided 60. And the remainingSecond is 24.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//A: totalMinutes get the result form movieLength (8784) minus remainingSecond (24). The result is 8760.
//The totalMinutes is 8760 divide 60 = 146.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//A: Duration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Only integer and positive value could work. If movieLength changed to negative value and decimal value, result could
// not show in correct time format.
