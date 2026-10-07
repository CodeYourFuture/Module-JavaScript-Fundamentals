const movieLength = 18784; // length of movie in seconds

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
// none

// c) Using documentation, explain what the expression movieLength % 60 represents
// movieLength represents the total seconds and with the remainder operator it represents the amount of seconds left over after the number is divided by 60
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It means to create the amount of total minutes by subtracting the remainingSeconds from movieLength and dividing the resulting number of seconds by 60 to get the result in minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents the movie length in hours, minutes and seconds. A better name would be totalMovielength 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// I changed the movieLength to 18784 and the code still works as it gave me back 5:13:4 after running it. The variables would need to be altered or changed for it to stop working.