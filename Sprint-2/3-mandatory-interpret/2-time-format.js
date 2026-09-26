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

//There are 6 variables declared in this program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.
// There is 1 function calls in this program: console.log(), and the three arithmetic operations used to calculate remainingSeconds, totalMinutes, and remainingMinutes.
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60. This gives the number of seconds remaining after converting the total length of the movie into minutes and hours.
// Interpret line 4, the expression assigned to totalMinutes calculates the total number of minutes in the movie by subtracting the remaining seconds from the total length of the movie and dividing by 60.
// The variable result represents the formatted string of the movie length in hours, minutes, and seconds. A better name for this variable could be formattedMovieLength or movieLengthString.
// This code will work for all values of movieLength.
// experimenting with different values of movieLength, such as 1:51:6, 0:55:33 etc., will show that the code correctly formats the length of the movie in hours, minutes, and seconds for all positive values.
