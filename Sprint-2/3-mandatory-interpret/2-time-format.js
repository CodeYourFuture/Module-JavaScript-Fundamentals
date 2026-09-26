const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/* -There are 6 variable declarations in total: movieLength, remainingSeconds, totalMinutes, 
    remainingMinutes, totalHours, and result.*/

// b) How many function calls are there?
// -There is one function call:  console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/* -The expression movieLength %60 means find the reminder after dividing by 60.
    It represents the number of seconds left over after all the full minutes have been removed. */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* -The expression assigned to totalMinutes removes the leftover seconds and then divides
    the remaining total seconds by 60. This gives the total number of whole minutes.*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* -The variable result represents the movie length as a readable time string in the format hours:minutes:seconds. 
    A better name could be formattedTime or timeString.*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* -This code works for normal values of movieLength that are non-negative whole numbers of seconds. 
    it does not work for negative values and decimal values.*/
