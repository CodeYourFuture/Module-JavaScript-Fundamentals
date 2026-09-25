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


a) There are 6 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

b) There is 1 function call: console.log(result) on the last line.

c) The % operator is the remainder (modulo) operator. It divides one number by another and returns whatever is left over after removing as many whole divisions as possible. movieLength % 60 divides the total seconds by 60 and returns the leftover seconds that don't make up a full minute. For example, 8784 % 60 equals 24, meaning after taking out all the full minutes, 24 seconds remain.

d) Line 4 (totalMinutes = (movieLength - remainingSeconds) / 60) takes the total seconds and subtracts the leftover seconds calculated in the previous line, leaving a number of seconds that divides evenly into minutes. Dividing that by 60 converts it into the total number of whole minutes. For example, (8784 - 24) / 60 = 146 total minutes.

e) The result variable represents the movie's length formatted as a string in hours:minutes:seconds format, e.g. "146:24:24" isn't quite right since totalHours still needs its own remainder split, but in this program's final form it produces something like "2:26:24". A more descriptive name would be formattedDuration or durationString, since "result" doesn't explain what it actually contains.

f) The code works correctly for the underlying maths with any non-negative whole number of seconds, but it isn't fully robust: if minutes or seconds come out below 10, they display as a single digit instead of the conventional two digits (e.g. "2:6:4" instead of "2:06:04"). It also wouldn't behave correctly with negative numbers, since the % operator can return negative remainders in JavaScript, and decimal input would produce decimal values in the output since nothing in the code rounds or truncates.