const movieLength = 5; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//5

// b) How many function calls are there?
//1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//% is the modulo operator, which gives the remainder after operand.
//so in this case, the remainder of movieLength/60,
// the number of seconds not in a whole minute

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//Take the total number of seconds in the move, minus the remainder of movieLength/60 to give
//a number that divides exactly by 60, then divide that number by 60. it converts the
// time into minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The number of whole minutes in the movie. numFullMinutes

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Yes the math is fine and works with all numbers.
