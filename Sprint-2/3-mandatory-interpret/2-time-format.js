const movieLength = 2; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6

// b) How many function calls are there?
// 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// its a rem calculation, basically taking how many groups of 60 are in the movie, the remaining sec is the result.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// (movieLength - remainingSeconds): will give us a whole number 
// / 60: takes the whole number and converts it to minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// the movie length in hours, minutes and seconds

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// edge case: negative movie length. For negative movie lengths it should print an error saying that movielength cannot be less than 0.