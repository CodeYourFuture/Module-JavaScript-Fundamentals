const movieLength = -10; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variables

// b) How many function calls are there?
// 2
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It means 60 % remainder of Movie length

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// totalMinutes is assigned a value of the result from (movieLength - remainingSeconds) / 60;

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// I think its the total movie length with a timer. Based on research it appears to be template literal variable as it mixes static text with dynamic data. Sorry I don't fully understand this bit yet

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//any number greater than zero returns a valid positive hour, minute or seconds result. Changing the length to 0 returns 0:0:0. Any negative length returns negative values

// CN - added comment to have a clean commit .