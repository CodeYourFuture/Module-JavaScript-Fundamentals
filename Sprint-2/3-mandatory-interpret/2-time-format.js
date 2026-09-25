const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
// There is 1 function call: console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// % is the remainder operator. It gives the remainder when movieLength is divided by 60.
// For 8784 seconds, 8784 % 60 = 24, so there are 24 seconds remaining after full minutes are counted.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// totalMinutes = (movieLength - remainingSeconds) / 60
// This removes the extra seconds left over after full minutes are taken out, then divides by 60 to convert the remaining whole seconds into total minutes.
// For 8784 seconds, this gives 146 minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result represents the time formatted as hours:minutes:seconds.
// A better name could be timeString or formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It works for any non-negative number of seconds, because it calculates hours, minutes, and seconds using division and remainders.
// It will not format correctly for negative values, and it assumes the value is in seconds rather than another unit.
