const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6, line1,3,4,6,7,9
// b) How many function calls are there?
// 1, Line 10: console.log()
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The modulo operator divides the movieLength in seconds by 60 and give the remainder
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It calculates the total number of whole minutes in the movie by subtracting the remainingSeconds from the total movie then divides the answer by 60 to covert seconds to minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// This variable represents the movie duration in the form of hours:minutes:seconds. better name id duration.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will run for all non negative whole number.