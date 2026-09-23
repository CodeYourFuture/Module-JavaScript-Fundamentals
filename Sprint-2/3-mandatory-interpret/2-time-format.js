const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//There are 6 variable declarations.

// b) How many function calls are there?
// There is 1 function call the console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// the expression uses the remainder operator which returns the remainder left over when one value is divided by another. so here it is asking how many times the number 60 goes into the value stored in the variable movieLength and tell me what is left behind which is what will be stored in the variable remainingSeconds (24).

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression here is taking the value stored in remainingSeconds variable and subtracting it from the value stored in movieLength variable, then whatever this value is is divided by 60 and this final number is what gets stored in the variable totalMinutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result will print a template string showing the movie length as time in hours, time in minutes and time in seconds using a template string. I think movieDuration is a bit more descriptive than result?
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//The code will work if movieLength is a whole number but it wouldn't work with a decimal number or likely not as expected if it is string unless it contains a number.
