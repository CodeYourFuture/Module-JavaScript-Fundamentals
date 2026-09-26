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

// Answers

// a) There are 6 variable declarations.

// b) There is one function call on line 10 console.log()

// c) The reminder (%) operator returns the reminder left over when one operand is divided by a second operand.

// d) movieLength(8784) - remainingSeconds(24) = 8760(seconds). 8760 / 60 gives us 146 minutes. totalMInutes = 146

// e) result represents the length of the movie in hours, minutes, and seconds format. It can be renamed movieDuration.    

// f) When displaying single digit hour, minute, or seconds it doesn't include 0 in front of the digit.