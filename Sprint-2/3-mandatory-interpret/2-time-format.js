const movieLength = 9325; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: 6 variable declarations.

// b) How many function calls are there?
// Answer: 1 function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: The % operator is the remainder (modulo) operator.
// movieLength % 60 gives the remainder after dividing the total seconds by 60.
// That remainder is the number of seconds left after removing complete minutes.
// Example: 8784 % 60 === 24.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: (movieLength - remainingSeconds) / 60
// First it subtracts the leftover seconds so the value divides evenly by 60,
// then it divides by 60 to get the total number of whole minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: result stores the movie length formatted as hours:minutes:seconds
// (for this value: "2:26:24").
// A clearer name would be formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: It works for non-negative whole numbers of seconds and correctly
// splits time into hours, minutes, and seconds.
// Limitations:
// - fractional values can produce messy decimals
// - negative values do not make sense for a movie length.
// Note: I have changed the movieLength from "8784" to "9325" for testing.