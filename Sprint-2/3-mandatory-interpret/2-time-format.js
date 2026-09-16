const movieLength = 8784; // length of movie in seconds

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
    // Remainder operator : calculates the remainder after dividing the movie length in seconds by 60
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // It takes the remaining seconds away from the total movie length and divides by 60 to turn the seconds into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // - It represents the movie duration in hours, minutes, and seconds.
    // - const movieDuration
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // The code works with positive whole numbers for movieLength and changes them into hours, minutes, and seconds. Decimal or negative numbers may not give the correct result. 