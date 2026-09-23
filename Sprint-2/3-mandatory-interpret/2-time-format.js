const movieLength = 90.5;

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: There are 6 variable declarations.

// b) How many function calls are there?
// Answer: There is 1 function call: console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: movieLength % 60 gives the remainder after dividing movieLength by 60.
// This represents the remaining seconds after converting the time into whole minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: It subtracts the remaining seconds from movieLength and divides by 60.
// This gives the total number of whole minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: result represents the movie length formatted as hours, minutes and seconds.
// A better variable name would be formattedMovieLength.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// // Answer: No, the code does not work correctly for all values.
//
// Testing -90 produced 0:-1:-30, which is not a valid time format.
// Negative durations should not be accepted.
//
// Testing 90.5 produced 0:1:30.5, showing that the program
// does not handle fractional seconds appropriately.
//
// The program also does not add leading zeros to single-digit
// minutes or seconds.
//
// The program should validate its input and format the
// output correctly.
