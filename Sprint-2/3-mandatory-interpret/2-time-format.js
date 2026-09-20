const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?6

// b) How many function calls are there?1

// c) Using documentation, explain what the expression movieLength % 60 represents
//The % operator is called the remainder operator.
//It gives you the remainder left over after division.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?This removes the seconds that don't make up a complete minute.

// e) What do you think the variable result represents? Can you think of a better name for this variable?creates a formatted representation of the movie's length in hours, minutes, and seconds.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
	//Works properly for non-negative whole-number seconds; decimals/negative values cause formatting problems



