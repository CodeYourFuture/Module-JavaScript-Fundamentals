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
//  1 (console.log)
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The remainder operator calculates the remainder of movie in seconds (it does it by dividing the number by 60)
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// it removes the leftover seconds that don't form a complete minute before dividing by 60 (conversion to minutes) in order
// to avoid a messy decimal
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents a total movie length, so could be named totalMovieLength
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It won't work with all values. Most importantly, the value must be strictly numeric and positive.
// Examples: 59 gives 0:0:59, but a clock shows 00:00:59 ,  -90 gives 0:-1:-30 (time can't be negative),
// 90.5 gives 0:1:30.5 (also doesn't fit the standard time format)
