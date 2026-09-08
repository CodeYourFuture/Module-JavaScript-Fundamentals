const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 7 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result
// b) How many function calls are there?
// There is 1 function call: console.log(result)
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The % operator is the remainder operator. movieLength % 60 finds the remainder after dividing movieLength by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Calculate the total number of complete minutes.
// First, subtract the remaining seconds from the movie length,
// leaving a number that can be divided exactly by 60.
// Then divide by 60 to convert seconds into minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result represents the movie length converted from seconds into hours, minutes and seconds.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code works correctly for positive whole numbers of seconds.
// However, it may not give a useful result for negative numbers,
// decimals, or values that are not numbers.
