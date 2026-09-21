const movieLength = -8784.08; // length of movie in seconds

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

//a) There are 6 variable declarations.
//b)There is 1 function call on line 10
//c) movieLength use remainder operator % . movieLength % 60 returns the remaining seconds after dividing the movie length into full minutes.
//d) expression assigned to totalMinutes calculate movie time in whole minutes.
//e) This variable represent total movie time in hh/mm/ss format, we could name it totalTime or totalMovieTime.
/*f) No, the code does not work correctly for all values. 
It works correctly when movieLength is a non-negative whole number representing the movie length in seconds.
Negative numbers produce negative hours, minutes or seconds, and decimal numbers can produce decimal seconds, which does not give the expected hh:mm:ss format. */
