const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const timeRemainingHHMMSS = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(timeRemainingHHMMSS);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// i) There are 5 variable declerations. Lines 1, 3, 4, 6, 7 and 9

// b) How many function calls are there?
// ii) There is only one function call. Line 10

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// iii) the % is a remainder operator telling us how many remaining seconds are left in the variable decleration in line 1

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// iv) line 4 is taking the movieLength 8784 - remainingSeconds 24 which leaves us with a whole value of 146 for the totalMinutes variable decleration.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// v) It represents the total time remaining in HH:MM:SS format, perhaps changing variable decleration to timeRemainingHHMMSS would be more descriptive in what we are trying to achieve?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// vi) this code won't work for negative number values and non-numeric values, I noticed that single-digit values don't follow the HHMMSS it shows HMSS depending on the value input used such as movieLength = 52.
