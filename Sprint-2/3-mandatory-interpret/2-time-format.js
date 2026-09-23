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

// Answer

// a) In the above code there are 6 variable declarations

// b) There is only 1 function call in the code

// c) the expression movieLength % 60 is trying to divide the movieLength by 60 then get the remainder

// d) totalMinutes = (movieLength - remainingSeconds) / 60 in this expression
// 1. (movieLength - remainingSeconds) the values  inside the parenthesis is calculated first then it is divided by 60
//  then the value of expression is assigned to the var totalMinutes

// e) the variable result represents the formatted time in hours:minutes:seconds. I would rename it time

// f) it will not work with negative numbers because we can not have negative time
