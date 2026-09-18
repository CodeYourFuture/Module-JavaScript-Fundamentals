const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// ANSWER: There are 6 variable declarations. 
// (movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result — all declared using const)

// b) How many function calls are there?
// ANSWER: There is only function call
// console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//ANSWER: The expression movieLength % 60 uses the remainder (%) operator to calculate the number of seconds remaining that can't form a full seconds (8784 % 60 = 24 seconds)

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// ANSWER: The expression assigned to totalMinutes means division

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// ANSWER: It subtracts the remainder seconds from movieLength to get an exact multiple of 60, then divides by 60 to convert the seconds into whole minutes (146 minutes).

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// ANSWER: A better name for the variable would be 'formattedDuration' because it clearly describes that the variable stores the movie duration in a formatted hours, minutes, and seconds format.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// ANSWER: No. It breaks if movieLength is negative (giving negative time) or a string. 
// Additionally, single-digit minutes or seconds (e.g., 4 minutes, 8 seconds) output as "2:4:8" instead of standard "02:04:08" formatting.
