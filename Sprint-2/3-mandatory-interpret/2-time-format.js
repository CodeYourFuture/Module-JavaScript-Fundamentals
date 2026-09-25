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

// a) There are 6 variable declarations.
// b) There is 1 function call. It is on line 10: console.log(result);
// c) The % operator gives the remainder after dividing movieLength by 60.
// c) The % operator gives the remainder after dividing movieLength by 60. 60 represents the number of seconds in one minute.
// d) It subtracts the remaining seconds from the movie length and then divides by 60 to convert the remaining seconds into total minutes.
// e) The variable result represents the movie duration in hours, minutes and seconds. A better name would be movieDuration.
// f) The code works for different positive values of movieLength because it converts seconds into hours, minutes and seconds. It expects movieLength to be a number representing seconds.
