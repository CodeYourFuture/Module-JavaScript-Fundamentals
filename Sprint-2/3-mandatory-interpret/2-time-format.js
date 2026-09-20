const movieLength = -98; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/* there are 6 variable declaration in this program.
            1- movieLength , 2- remainingSeconds , 3- totalMinutes
            4- remainingMinutes , 5- totalHours , 6- result */

// b) How many function calls are there?
/* one function 
            Line 10 : console.log(); */

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Remainder(%) : Return the remainder left over when one operand is divided by a second operand
// console.log(13 % 5 ); 3

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This expression converts movie length from seconds into minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Variable result represent the movie length formatted as hours, minutes, seconds ,
// another name could be movieTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//So the code works properly for whole numbers, but not for negative numbers and decimal numbers because the result can contain decimal values.
