const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations.

// b) How many function calls are there?
// There is 1 function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// % is the remainder operator. It returns what is left over after dividing one number by another.
// movieLength % 60 gives the seconds left over once all the full minutes are taken out of the movie length.
// 8784 % 60 = 24, because 8784 seconds is 146 full minutes with 24 seconds left over.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It subtracts the leftover seconds from the movie length, leaving a number that divides evenly by 60
// (8784 - 24 = 8760), then divides by 60 to get the number of whole minutes (8760 / 60 = 146).
// So totalMinutes is the total number of complete minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the total length of the movie in hours, minutes and seconds. A better name would be movieLengthHHMMSS.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

