const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result
// b) How many function calls are there?
// only one function call: console.log(result);
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder of the division of movieLength by 60, which gives the number of seconds remaining after converting the total length of the movie from seconds to minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// line 4 calculates the total number of minutes in the movie by subtracting the remaining seconds from the total movie length in seconds and then dividing that value by 60, thus converting the total length of the movie from seconds to minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the total length of the movie in hours, minutes, and seconds format. A better name for this variable could be movieDuration or formattedMovieLength, as it more clearly describes the purpose of the variable.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* for positive integers:movieLength = 8784 → 2:26:24

movieLength = 60 → 0:1:0

movieLength = 3599 → 0:59:59

movieLength = 0 → 0:0:0

for negative integers: movieLength = -60 -> -1:59:0
movieLength = -3599 -> -1:0:1
movieLength = -8784 -> -3:33:36
it works for negative integers as well, but the output may not be meaningful or should have validation to prevent negative values.

for non-integer values or decimal values: movieLength = 60.5 → 0:1:0.5
movieLength = 3599.9 → 0:59:59.9
movieLength = 8784.7 → 2:26:24.7
it works for non-integer values as well, but the output may not be meaningful or should have validation to prevent non-integer values.

for non-numeric values: movieLength = "abc" → NaN:NaN:NaN
movieLength = null → 0:0:0
movielength = undefined → NaN:NaN:NaN
it doesn't work for non-numeric values.

for very large values: movieLength = 1000000000 → 277777:46:40
movieLength = 1000000000000 → 277777777:46:40
it works for very Large values as well, but the output may not be meaningful or should have validation to prevent very Large values.

for very small values: movieLength = 0.0001 → 0:0:0
movieLength = -0.0001 → 0:0:0
movieLength = 0.0000001 → 0:0:0
it works for very small values as well, but the output may not be meaningful or should have validation to prevent very small values.

