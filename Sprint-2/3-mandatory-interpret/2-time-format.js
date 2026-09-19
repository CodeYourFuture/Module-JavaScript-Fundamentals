const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//answer: we have 6 variable declarations
// b) How many function calls are there?
//answer: there is 1 function call: line 10
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//answer:% is a remainder operator, it calculates left over seconds when movie length is divided into full minutes
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//answer:it subtracts the left over seconds from the total movie length to get a multiple of 60, then divides by 60 to convert that duration into whole minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//answer: formatted movieLength, it represents the movieLength format as a time string
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//answer: yes it can work but only for positive numbers representing total seconds, if the movieLength is negative it will give off an output of an invalid time value