const movieLength = 3661; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${String(totalHours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// Answer: There is only 6 variable declearation altogether in this program

// b) How many function calls are there?

// Answer:  There is only 1 call function in this program console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// Answer: The % symbol represent the remainder (modulo) operator, it calculates the leftover/remainder after integer division.
// Answer: % 60 divides the movieLength by 60 and returns only the remainder.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// Answer: Line 4 expression helps to eliminate any remainder from the equation, so its left with a clean multiple of 60 to avoid any decimal

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// Answer: It represent the total duration of the movie formatted into hours, minutes and seconds 
// Answer: A better name could be "totalMovieDuration"

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Answer: It will work for integer values and will give us clear and clean result using this code. However, the result would not be clean as this using float values
