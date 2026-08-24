const movieLength = 24; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6, there are six keywords const used to declare variables in this program

// b) How many function calls are there?
// 1, because console.log() is a function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// The % operator returns the remainder of a division operation
// movieLength % 60 returns the remainder when movieLength is divided by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// Subtract the remainder seconds from the movie length in seconds, then divide by 60 to get the length in minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// The variable result represents the length of the movie in hours, minutes, and seconds
// A better name for this variable might be movieLengthInHoursMinutesSeconds or timeStamp or movieTimeStamp

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Here are some values I tried:
// -8784  -2:-26:-24 : It won't work if the movieLength is negative because a movie can't be of negative length
// "8784" 2:26:24 It, weirdly, does work for a string like "8784" because the % operator converts the string to a number using coercion
// "8rr784" NaN:NaN:NaN , but it won't work for a string like "8rr784" because the % operator can't convert that to a number
// 0 0:0:0 It sort of works? It looks wrong because time is usually 00:00:00 though
// 24 0:0:24 Again this sort of works but looks broken to me
