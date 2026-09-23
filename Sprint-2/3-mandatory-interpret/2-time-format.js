const movieLength = 1524.545; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//6
// b) How many function calls are there?
//0
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//it represents the remainder of the time, its a modulus function

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//it calculates the total watch time of the movie and it subtracts the remaining seconds and converts the time to minutes
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//watchTime, the length of the movie in minutes no seconds
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//it works for all the value i tried
