const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: 6 variable declarations (movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result).

// b) How many function calls are there?
// Answer: 1 function call (console.log(result)).

// c) Using documentation, explain what the expression movieLength % 60 represents
// Answer: % is the remainder (modulo) operator. It calculates the leftover seconds when movieLength is divided into full minutes (60-second chunks).

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: It subtracts the leftover seconds from the total movie length to get a exact multiple of 60, then divides by 60 to convert that duration into whole minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: It represents the movie length formatted as a HH:MM:SS time string. A clearer name would be formattedTime or formattedMovieLength.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: It works for all non-negative numbers representing total seconds. However, if movieLength is negative or not a number (e.g., a string or null), it will output invalid time values or NaN.