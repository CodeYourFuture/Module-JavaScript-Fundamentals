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

// c) Using documentation, explain what the expression movieLength % 60 represents?
//8784 % 60=24
//The % operator is called the remainder operator.
//It gives you the remainder left over after division.
//we can calculate the number of the left seconds after converting the movie length into whole minutes, 24 seconds left over after converting the movie's total length into whole minutes.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?This removes the seconds that don't make up a complete minute.
//Then it divides that number by 60 to convert the seconds into whole minutes.
//we have 8784 seconds so 

//8784 - 24 = 8760
//8760 / 60 = 146 it is the total minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?creates a formatted representation of the movie's length in hours, minutes, and seconds.
//I can name it the movie duration
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
	//Works properly for non-negative whole-number seconds; decimals/negative values cause formatting problems



