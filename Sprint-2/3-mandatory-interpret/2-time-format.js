const movieLength = 59; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// a) 6 variable declarations

// b) How many function calls are there?
// b) 1 function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// c) % gives the remainder after division.
// movieLength % 60 finds the remaining seconds after dividing the movie length by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// d) totalMinutes is assigned the value 0 after subtracting the remaining seconds
// from movieLength and dividing the result by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// e) It creates the movie's time format
// Maybe a more descriptive movieTime or movieDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// f) The code does not work correctly for all values of movieLength
// It works correctly for non-negative whole numbers, but negative numbers and
// decimal values can produce an invalid time format.
